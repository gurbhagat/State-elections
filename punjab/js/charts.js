/* =============================================
   Punjab Elections 2027 — charts.js
   Lightweight SVG + Canvas-free chart library
   ============================================= */

/* ---- Horizontal Bar Chart ---- */
function renderBarChart(containerId, data, opts = {}) {
  const el = document.getElementById(containerId);
  if (!el) return;
  const maxVal = Math.max(...data.map(d => d.value));
  el.innerHTML = data.map(d => {
    const pct = maxVal > 0 ? (d.value / maxVal * 100).toFixed(1) : 0;
    const label = opts.formatValue ? opts.formatValue(d.value) : d.value;
    return `
      <div class="bar-row">
        <div class="bar-label">${d.label}</div>
        <div class="bar-track">
          <div class="bar-fill" style="width:${pct}%;background:${d.color||'var(--accent)'}">
            <span>${label}</span>
          </div>
        </div>
        ${opts.showNum !== false ? `<div class="bar-num">${label}</div>` : ''}
      </div>`;
  }).join('');
}

/* ---- Grouped Bar Chart (SVG) ---- */
function renderGroupedBarChart(containerId, data, opts = {}) {
  const el = document.getElementById(containerId);
  if (!el) return;

  const W = el.offsetWidth || 700;
  const H = opts.height || 320;
  const padL = 40, padR = 16, padT = 20, padB = 50;
  const chartW = W - padL - padR;
  const chartH = H - padT - padB;

  const parties = opts.parties || ['AAP','INC','SAD','BJP'];
  const colors = opts.colors || { AAP:'#005DAA', INC:'#138808', SAD:'#003380', BJP:'#FF6000', BSP:'#1A1A8A', IND:'#666660' };

  const years = data.map(d => d.year);
  const maxSeats = Math.max(...data.flatMap(d => parties.map(p => d[p] || 0))) * 1.1;

  const groupW = chartW / years.length;
  const barW = Math.min((groupW - 8) / parties.length, 28);

  const yScale = v => chartH - (v / maxSeats * chartH);

  // Grid lines
  const gridSteps = 5;
  let gridLines = '';
  for (let i = 0; i <= gridSteps; i++) {
    const v = (maxSeats / gridSteps * i);
    const y = yScale(v) + padT;
    gridLines += `<line x1="${padL}" y1="${y}" x2="${W - padR}" y2="${y}" stroke="var(--border)" stroke-dasharray="3 3" />`;
    gridLines += `<text x="${padL - 6}" y="${y + 4}" text-anchor="end" fill="var(--text-3)" font-size="10" font-family="Inter,sans-serif">${Math.round(v)}</text>`;
  }

  // Bars
  let bars = '';
  let xLabels = '';
  years.forEach((year, gi) => {
    const d = data[gi];
    const groupX = padL + gi * groupW + groupW / 2 - (parties.length * barW) / 2;

    parties.forEach((p, pi) => {
      const val = d[p] || 0;
      const bx = groupX + pi * barW;
      const bh = val / maxSeats * chartH;
      const by = padT + yScale(val);
      bars += `<rect x="${bx.toFixed(1)}" y="${by.toFixed(1)}" width="${(barW - 2).toFixed(1)}" height="${bh.toFixed(1)}" fill="${colors[p]||'#aaa'}" rx="2">
        <title>${p}: ${val} seats in ${year}</title></rect>`;
    });

    xLabels += `<text x="${(padL + gi * groupW + groupW / 2).toFixed(1)}" y="${H - padB + 18}" text-anchor="middle" fill="var(--text-3)" font-size="12" font-family="Inter,sans-serif" font-weight="500">${year}</text>`;
  });

  // Legend
  const legendItems = parties.map(p =>
    `<g><rect width="10" height="10" rx="2" fill="${colors[p]||'#aaa'}"/><text x="14" y="9" font-size="11" font-family="Inter,sans-serif" fill="var(--text-2)">${p}</text></g>`
  );
  let lx = padL;
  let legendSvg = '';
  parties.forEach(p => {
    legendSvg += `<g transform="translate(${lx},${H - 14})"><rect width="10" height="10" rx="2" fill="${colors[p]||'#aaa'}"/><text x="13" y="9" font-size="11" font-family="Inter,sans-serif" fill="var(--text-2)">${p}</text></g>`;
    lx += p.length * 7 + 24;
  });

  el.innerHTML = `
    <svg viewBox="0 0 ${W} ${H}" class="svg-chart" style="width:100%;height:auto">
      ${gridLines}
      ${bars}
      ${xLabels}
      ${legendSvg}
    </svg>`;
}

/* ---- Seat Bar (full-width stacked horizontal) ---- */
function renderSeatBar(containerId, results, total) {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = results.map(r => {
    const pct = (r.seats / total * 100).toFixed(2);
    return `<div style="width:${pct}%;background:${r.color};height:100%;float:left;transition:width .6s ease" title="${r.party}: ${r.seats} seats (${pct}%)"></div>`;
  }).join('');
}

/* ---- Donut-like (pie) SVG ---- */
function renderDonut(containerId, data, opts = {}) {
  const el = document.getElementById(containerId);
  if (!el) return;
  const total = data.reduce((s, d) => s + d.value, 0);
  const cx = 80, cy = 80, r = 64, ir = 40;
  let angle = -Math.PI / 2;
  let paths = '';
  data.forEach(d => {
    if (!d.value) return;
    const sweep = (d.value / total) * 2 * Math.PI;
    const x1 = cx + r * Math.cos(angle), y1 = cy + r * Math.sin(angle);
    angle += sweep;
    const x2 = cx + r * Math.cos(angle), y2 = cy + r * Math.sin(angle);
    const ix1 = cx + ir * Math.cos(angle), iy1 = cy + ir * Math.sin(angle);
    const ixS = cx + ir * Math.cos(angle - sweep), iyS = cy + ir * Math.sin(angle - sweep);
    const lg = sweep > Math.PI ? 1 : 0;
    paths += `<path d="M${x1.toFixed(2)} ${y1.toFixed(2)} A${r} ${r} 0 ${lg} 1 ${x2.toFixed(2)} ${y2.toFixed(2)} L${ix1.toFixed(2)} ${iy1.toFixed(2)} A${ir} ${ir} 0 ${lg} 0 ${ixS.toFixed(2)} ${iyS.toFixed(2)} Z" fill="${d.color}">
      <title>${d.label}: ${d.value}</title></path>`;
  });
  el.innerHTML = `
    <svg viewBox="0 0 160 160" style="width:160px;height:160px">
      ${paths}
      <text x="${cx}" y="${cy}" text-anchor="middle" dy="4" font-size="14" font-weight="700" font-family="Inter,sans-serif" fill="var(--text)">${total}</text>
      <text x="${cx}" y="${cy + 16}" text-anchor="middle" font-size="9" font-family="Inter,sans-serif" fill="var(--text-3)">TOTAL</text>
    </svg>`;
}

window.renderBarChart = renderBarChart;
window.renderGroupedBarChart = renderGroupedBarChart;
window.renderSeatBar = renderSeatBar;
window.renderDonut = renderDonut;
