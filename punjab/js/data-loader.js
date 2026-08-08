/* =============================================
   data-loader.js — works with file:// and http://
   Data is loaded via <script> tags (global vars)
   or fetched as JSON when served over HTTP.
   ============================================= */

/* In-memory cache */
const _cache = {};

/* Check if inline data (loaded via <script src="data/...js">) is present */
function _hasInline(key) {
  return typeof window._DATA !== 'undefined' && window._DATA[key];
}

async function loadJSON(path) {
  if (_cache[path]) return _cache[path];
  const res = await fetch(path);
  if (!res.ok) throw new Error(`Failed to load ${path}: ${res.status}`);
  const data = await res.json();
  _cache[path] = data;
  return data;
}

/* Generic loader: uses pre-loaded inline data if available, else fetches */
async function _load(key, jsonPath, scriptPath) {
  const cacheKey = key;
  if (_cache[cacheKey]) return _cache[cacheKey];

  /* 1. Check inline data (loaded via <script src="data/xyz.data.js">) */
  if (_hasInline(key)) {
    _cache[cacheKey] = window._DATA[key];
    return _cache[cacheKey];
  }

  /* 2. Try fetch (works on http/https) */
  try {
    const data = await loadJSON(jsonPath);
    _cache[cacheKey] = data;
    return data;
  } catch (err) {
    /* 3. Dynamically inject the .data.js script (fallback for file://) */
    return new Promise((resolve, reject) => {
      if (_hasInline(key)) { resolve(window._DATA[key]); return; }
      const s = document.createElement('script');
      s.src = scriptPath;
      s.onload = () => {
        if (_hasInline(key)) {
          _cache[cacheKey] = window._DATA[key];
          resolve(_cache[cacheKey]);
        } else {
          reject(new Error(`Inline data not found for key: ${key}`));
        }
      };
      s.onerror = () => reject(new Error(`Could not load script: ${scriptPath}`));
      document.head.appendChild(s);
    });
  }
}

async function loadConstituencies() { return _load('constituencies', 'data/constituencies.json', 'data/constituencies.data.js'); }
async function loadParties()        { return _load('parties',        'data/parties.json',        'data/parties.data.js'); }
async function loadDistricts()      { return _load('districts',      'data/districts.json',      'data/districts.data.js'); }
async function loadTrends()         { return _load('trends',         'data/trends.json',         'data/trends.data.js'); }
async function loadSchedule()       { return _load('schedule',       'data/schedule-2027.json',  'data/schedule.data.js'); }
async function loadCandidates2027() { return _load('candidates2027', 'data/candidates-2027.json', 'data/candidates-2027.data.js'); }

/* Flatten constituency for table display */
function flattenForTable(constituencies, year = 2022) {
  const r = year === 2017 ? 'r17' : 'r22';
  const lang = window.currentLang || 'en';
  return constituencies.map(c => {
    const acData = c[r] || {};
    const name = lang === 'hi' ? (c.nameHi || c.name) : lang === 'pa' ? (c.namePa || c.name) : c.name;
    const winner = lang === 'hi' ? (acData.winnerHi || acData.winner) : lang === 'pa' ? (acData.winnerPa || acData.winner) : acData.winner;
    const runnerup = lang === 'hi' ? (acData.runnerupHi || acData.runnerup) : lang === 'pa' ? (acData.runnerupPa || acData.runnerup) : acData.runnerup;
    return {
      id: c.id,
      acNo: c.acNo,
      name: name,
      nameEn: c.name,
      nameHi: c.nameHi,
      namePa: c.namePa,
      district: c.district,
      reserved: c.reserved,
      winner: winner || '—',
      winnerEn: acData.winner || '—',
      winnerHi: acData.winnerHi || acData.winner,
      winnerPa: acData.winnerPa || acData.winner,
      party: acData.party || '—',
      votes: acData.votes || 0,
      margin: acData.margin || 0,
      runnerup: runnerup || '—',
      runnerupEn: acData.runnerup || '—',
      runnerupHi: acData.runnerupHi || acData.runnerup,
      runnerupPa: acData.runnerupPa || acData.runnerup,
      runnerupParty: acData.runnerupParty || '—',
      totalVotes: acData.totalVotes || 0,
      turnout: acData.turnout || 0,
      slug: c.name.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
    };
  });
}

/* Get unique districts from constituency data */
function getDistricts(constituencies) {
  return [...new Set(constituencies.map(c => c.district))].sort();
}

window.loadJSON = loadJSON;
window.loadConstituencies = loadConstituencies;
window.loadParties = loadParties;
window.loadDistricts = loadDistricts;
window.loadTrends = loadTrends;
window.loadSchedule = loadSchedule;
window.loadCandidates2027 = loadCandidates2027;
window.flattenForTable = flattenForTable;
window.getDistricts = getDistricts;
