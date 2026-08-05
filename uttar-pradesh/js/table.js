/* =============================================
   Punjab Elections 2027 — table.js
   Reusable sortable, filterable, paginated table
   ============================================= */

class DataTable {
  constructor(options) {
    this.containerId = options.containerId;
    this.data = [];
    this.filtered = [];
    this.sortCol = options.defaultSort || null;
    this.sortDir = 'asc';
    this.page = 1;
    this.pageSize = options.pageSize || 25;
    this.columns = options.columns || [];
    this.onRender = options.onRender || null;
    this.container = document.getElementById(this.containerId);
    if (!this.container) return;
    this.tableEl = this.container.querySelector('table') || this._createTable();
    this.paginationEl = this.container.querySelector('.pagination-wrap');
    this.countEl = this.container.querySelector('.result-count');
  }

  _createTable() {
    const t = document.createElement('table');
    t.className = 'data-table';
    const wrap = document.createElement('div');
    wrap.className = 'table-wrap';
    wrap.appendChild(t);
    this.container.appendChild(wrap);
    return t;
  }

  load(data) {
    this.data = data;
    this.filtered = [...data];
    this._renderHead();
    this.render();
    return this;
  }

  filter(predicateFn) {
    this.filtered = this.data.filter(predicateFn);
    this.page = 1;
    this.render();
  }

  filterByText(text, fields) {
    const q = text.toLowerCase().trim();
    if (!q) {
      this.filtered = [...this.data];
    } else {
      this.filtered = this.data.filter(row =>
        fields.some(f => String(row[f] || '').toLowerCase().includes(q))
      );
    }
    this.page = 1;
    this.render();
  }

  sort(col, dir) {
    if (dir === undefined) {
      if (this.sortCol === col) {
        this.sortDir = this.sortDir === 'asc' ? 'desc' : 'asc';
      } else {
        this.sortCol = col;
        this.sortDir = 'asc';
      }
    } else {
      this.sortCol = col;
      this.sortDir = dir;
    }
    const d = this.sortDir === 'asc' ? 1 : -1;
    this.filtered.sort((a, b) => {
      const av = a[col], bv = b[col];
      if (typeof av === 'number' && typeof bv === 'number') return (av - bv) * d;
      return String(av || '').localeCompare(String(bv || '')) * d;
    });
    this.render();
  }

  _renderHead() {
    const thead = this.tableEl.querySelector('thead') || this.tableEl.createTHead();
    thead.innerHTML = '';
    const tr = thead.insertRow();
    this.columns.forEach(col => {
      const th = document.createElement('th');
      const labelKey = col.key === 'acNo' ? 'acNo' :
                       col.key === 'name' ? 'name' :
                       col.key === 'winner' ? 'winner' :
                       col.key === 'party' ? 'party' :
                       col.key === 'votes' ? 'votes' :
                       col.key === 'margin' ? 'margin' :
                       col.key === 'turnout' ? 'turnout' :
                       col.key === 'district' ? 'district' :
                       col.key === 'reserved' ? 'reserved' : '';
      const translatedLabel = (window.t && labelKey && t(labelKey)) || col.label;
      th.innerHTML = `${translatedLabel}<span class="sort-icon">${col.sortable !== false ? ' ↕' : ''}</span>`;
      if (col.align === 'right') th.style.textAlign = 'right';
      if (col.sortable !== false && col.key) {
        th.addEventListener('click', () => this.sort(col.key));
        th.style.cursor = 'pointer';
      }
      if (col.width) th.style.width = col.width;
      tr.appendChild(th);
    });
    this._updateHeadSort();
  }

  _updateHeadSort() {
    const ths = this.tableEl.querySelectorAll('th');
    this.columns.forEach((col, i) => {
      if (!ths[i]) return;
      const icon = ths[i].querySelector('.sort-icon');
      if (!icon) return;
      if (col.key === this.sortCol) {
        ths[i].classList.add('sorted');
        icon.textContent = this.sortDir === 'asc' ? ' ↑' : ' ↓';
      } else {
        ths[i].classList.remove('sorted');
        icon.textContent = col.sortable !== false ? ' ↕' : '';
      }
    });
  }

  render() {
    this._updateHeadSort();
    const total = this.filtered.length;
    const start = (this.page - 1) * this.pageSize;
    const end = Math.min(start + this.pageSize, total);
    const pageData = this.filtered.slice(start, end);

    let tbody = this.tableEl.querySelector('tbody');
    if (!tbody) tbody = this.tableEl.createTBody();
    tbody.innerHTML = '';

    if (pageData.length === 0) {
      const tr = tbody.insertRow();
      const td = tr.insertCell();
      td.colSpan = this.columns.length;
      td.style.cssText = 'text-align:center;padding:40px 16px;color:var(--text-3);font-size:var(--text-sm)';
      td.textContent = (window.t && t('noResults')) || 'No results found.';
      this._renderPagination(total, start, end);
      this._renderCount(total, start, end);
      return;
    }

    pageData.forEach(row => {
      const tr = tbody.insertRow();
      this.columns.forEach(col => {
        const td = tr.insertCell();
        if (col.align === 'right') td.style.textAlign = 'right';
        if (col.className) td.className = col.className;
        const val = col.render ? col.render(row[col.key], row) : (row[col.key] ?? '—');
        if (typeof val === 'string' && val.includes('<')) {
          td.innerHTML = val;
        } else {
          td.textContent = val;
        }
      });
      if (this.onRender) this.onRender(tr, row);
    });

    this._renderPagination(total, start, end);
    this._renderCount(total, start, end);
  }

  _renderCount(total, start, end) {
    if (!this.countEl) return;
    const s = (window.t && t('showing')) || 'Showing';
    const o = (window.t && t('of')) || 'of';
    const r = (window.t && t('results')) || 'results';
    this.countEl.textContent = `${s} ${start+1}–${end} ${o} ${total} ${r}`;
    if (total === 0) this.countEl.textContent = '';
  }

  _renderPagination(total) {
    if (!this.paginationEl) return;
    const pages = Math.ceil(total / this.pageSize);
    if (pages <= 1) { this.paginationEl.innerHTML = ''; return; }

    const els = [];
    const btn = (label, pg, disabled = false, active = false) => {
      const b = document.createElement('button');
      b.className = 'page-btn' + (active ? ' active' : '');
      b.textContent = label;
      b.disabled = disabled;
      b.addEventListener('click', () => { this.page = pg; this.render(); window.scrollTo({top:0,behavior:'smooth'}); });
      return b;
    };

    this.paginationEl.innerHTML = '';
    this.paginationEl.appendChild(btn('‹', this.page - 1, this.page === 1));

    let lo = Math.max(1, this.page - 2);
    let hi = Math.min(pages, lo + 4);
    lo = Math.max(1, hi - 4);

    if (lo > 1) { this.paginationEl.appendChild(btn('1', 1)); if (lo > 2) { const d = document.createElement('span'); d.textContent='…'; d.style.padding='0 4px'; d.style.color='var(--text-3)'; this.paginationEl.appendChild(d); } }
    for (let p = lo; p <= hi; p++) this.paginationEl.appendChild(btn(p, p, false, p === this.page));
    if (hi < pages) { if (hi < pages - 1) { const d = document.createElement('span'); d.textContent='…'; d.style.padding='0 4px'; d.style.color='var(--text-3)'; this.paginationEl.appendChild(d); } this.paginationEl.appendChild(btn(pages, pages)); }

    this.paginationEl.appendChild(btn('›', this.page + 1, this.page === pages));
  }
}

window.DataTable = DataTable;
