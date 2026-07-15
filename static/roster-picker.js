(function () {
  var ROSTERS = [
    { url: 'data/tino-alliance-94.csv', label: 'RONY / TINO 티노 (94) — current', count: 94, isDefault: true },
    { url: 'data/r10t-alliance-99.csv', label: 'R10t Riot (99) — previous', count: 99 }
  ];

  function parseCsv(text) {
    var lines = text.split(/\r?\n/).filter(function (l) { return l.trim(); });
    if (!lines.length) return [];
    var headers = lines[0].split(',').map(function (h) { return h.trim().toLowerCase().replace(/["']/g, ''); });
    var rows = [];
    for (var i = 1; i < lines.length; i++) {
      var cells = lines[i].split(',');
      var r = {};
      for (var j = 0; j < headers.length; j++) {
        r[headers[j]] = (cells[j] || '').trim().replace(/^["']|["']$/g, '');
      }
      rows.push(r);
    }
    return rows;
  }

  function render(container) {
    var wrap = document.createElement('div');
    wrap.style.cssText = 'display:flex;gap:8px;align-items:center;flex-wrap:wrap;margin:6px 0';
    var label = document.createElement('label');
    label.textContent = 'Roster:';
    label.style.cssText = 'color:var(--fg-muted,#9aa0a6);font-size:13px';
    var sel = document.createElement('select');
    sel.id = 'lws-roster-select';
    sel.style.cssText = 'padding:6px 10px;background:#0d1424;color:#eee;border:1px solid #2a3444;border-radius:4px;font-size:13px';
    ROSTERS.forEach(function (r) {
      var opt = document.createElement('option');
      opt.value = r.url;
      opt.textContent = r.label;
      if (r.isDefault) opt.selected = true;
      sel.appendChild(opt);
    });
    var btn = document.createElement('button');
    btn.type = 'button';
    btn.textContent = 'Load';
    btn.style.cssText = 'padding:6px 12px;background:#c9a961;color:#0a0e1a;border:none;border-radius:4px;font-weight:600;cursor:pointer;font-size:13px';
    btn.addEventListener('click', function () { load(sel.value); });
    var status = document.createElement('span');
    status.id = 'lws-roster-status';
    status.style.cssText = 'color:#9aa0a6;font-size:12px;margin-left:8px';
    wrap.appendChild(label);
    wrap.appendChild(sel);
    wrap.appendChild(btn);
    wrap.appendChild(status);
    container.appendChild(wrap);
  }

  function load(url) {
    var status = document.getElementById('lws-roster-status');
    if (status) status.textContent = 'loading…';
    return fetch(url)
      .then(function (r) { if (!r.ok) throw new Error('HTTP ' + r.status); return r.text(); })
      .then(function (t) {
        var rows = parseCsv(t);
        if (status) status.textContent = rows.length + ' members loaded';
        var name = url.split('/').pop().replace('.csv', '');
        if (typeof window.__lwsRosterLoaded === 'function') {
          window.__lwsRosterLoaded(rows, name);
        }
        window.dispatchEvent(new CustomEvent('lws:roster-loaded', { detail: { rows: rows, name: name } }));
        return rows;
      })
      .catch(function (e) {
        if (status) status.textContent = 'load failed: ' + e.message;
      });
  }

  window.LWSRosterPicker = {
    render: render,
    load: load,
    parseCsv: parseCsv,
    rosters: ROSTERS
  };

  document.addEventListener('DOMContentLoaded', function () {
    var mount = document.getElementById('lws-roster-picker');
    if (mount) render(mount);
    var auto = document.querySelector('[data-lws-roster-autoload]');
    if (auto || document.getElementById('lws-roster-picker')) {
      load(ROSTERS[0].url);
    }
  });
})();
