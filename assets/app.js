(() => {
  const CAT_LABEL = {
    game: "游戏",
    "agent-eng": "Agent 工程",
    "llm-tools": "大模型工具",
    other: "其他",
  };
  const SUB_LABEL = {
    "dev-efficiency": "研发效率",
    "phone-computer-use": "Phone / Computer Use",
    "agent-fleet": "Agent 军团",
  };
  const ORIGIN_LABEL = {
    bookmark: "书签",
    "daily-digest": "每日精选",
    "bookmark+daily-digest": "书签与每日精选",
  };
  const CAT_ORDER = ["game", "agent-eng", "llm-tools", "other"];
  const SUB_ORDER = ["dev-efficiency", "phone-computer-use", "agent-fleet"];

  const state = {
    cat: "all",
    sub: "all",
    tag: "all",
    q: "",
    view: "list",
    ck: "",
    sel: null,
    hist: [],
  };

  let projects = [];
  let byId = {};
  let cmpSections = [];
  let idRe = null;

  const $ = (id) => document.getElementById(id);
  const esc = (s) =>
    String(s ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");

  function catLabel(c) {
    return CAT_LABEL[c] || c || "—";
  }
  function subLabel(s) {
    return s ? SUB_LABEL[s] || s : "—";
  }

  function countsOf(list) {
    const cat = { game: 0, "agent-eng": 0, "llm-tools": 0, other: 0 };
    const sub = { "dev-efficiency": 0, "phone-computer-use": 0, "agent-fleet": 0 };
    const depth = { full: 0, light: 0, none: 0 };
    for (const p of list) {
      cat[p.category] = (cat[p.category] || 0) + 1;
      if (p.subcategory) sub[p.subcategory] = (sub[p.subcategory] || 0) + 1;
      const d = (p.analysis && p.analysis.depth) || "none";
      depth[d] = (depth[d] || 0) + 1;
    }
    return { cat, sub, depth, total: list.length };
  }

  function allTags(list) {
    const set = new Set();
    for (const p of list) for (const t of p.tags || []) if (t) set.add(t);
    return [...set].sort((a, b) => a.localeCompare(b, "zh-Hans"));
  }

  function filtered() {
    const q = state.q.trim().toLowerCase();
    return projects.filter((p) => {
      if (state.cat !== "all" && p.category !== state.cat) return false;
      if (state.sub !== "all") {
        if (p.category !== "agent-eng" || p.subcategory !== state.sub) return false;
      }
      if (state.tag !== "all" && !(p.tags || []).includes(state.tag)) return false;
      if (q) {
        const a = p.analysis || {};
        const hay = [
          p.id,
          p.name,
          p.summary,
          p.author,
          (p.tags || []).join(" "),
          (p.models || []).join(" "),
          p.source_url,
          p.preview_url,
          p.notes,
          a.core_tech,
          a.method,
          (a.features || []).join(" "),
          (a.highlights || []).join(" "),
        ]
          .join(" ")
          .toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });
  }

  function linkify(text) {
    if (!text) return "";
    if (!idRe) return esc(text);
    const re = new RegExp(idRe.source, "g");
    let out = "";
    let last = 0;
    let m;
    while ((m = re.exec(text))) {
      out += esc(text.slice(last, m.index));
      const id = m[1];
      const name = (byId[id] && byId[id].name) || id;
      out += `<button type="button" class="ref" data-id="${esc(id)}" title="${esc(name)}">${esc(id)}</button>`;
      last = m.index + m[0].length;
    }
    out += esc(text.slice(last));
    return out;
  }

  function extLinks(p) {
    const parts = [];
    if (p.source_url) parts.push(`<a href="${esc(p.source_url)}" target="_blank" rel="noopener noreferrer">源码</a>`);
    if (p.preview_url) parts.push(`<a href="${esc(p.preview_url)}" target="_blank" rel="noopener noreferrer">预览</a>`);
    if (p.post_url) parts.push(`<a href="${esc(p.post_url)}" target="_blank" rel="noopener noreferrer">原帖</a>`);
    return parts.length ? `<span class="links">${parts.join("")}</span>` : "—";
  }

  function renderMetrics() {
    const c = countsOf(projects);
    const items = [
      { n: c.total, l: "全部项目", d: `完整分析 ${c.depth.full || 0} · 轻量分析 ${c.depth.light || 0}` },
      { n: c.cat.game || 0, l: "游戏" },
      { n: c.cat["agent-eng"] || 0, l: "Agent 工程" },
      { n: c.cat["llm-tools"] || 0, l: "大模型工具" },
      { n: c.cat.other || 0, l: "其他" },
    ];
    $("metrics").innerHTML = items
      .map(
        (it) =>
          `<div class="metric"><span class="n">${it.n}</span><span class="l">${esc(it.l)}</span>${
            it.d ? `<span class="d">${esc(it.d)}</span>` : ""
          }</div>`
      )
      .join("");
  }

  function renderCatSeg() {
    const c = countsOf(projects);
    const opts = [
      { v: "all", l: "全部", n: c.total },
      { v: "game", l: "游戏", n: c.cat.game || 0 },
      { v: "agent-eng", l: "Agent 工程", n: c.cat["agent-eng"] || 0 },
      { v: "llm-tools", l: "大模型工具", n: c.cat["llm-tools"] || 0 },
      { v: "other", l: "其他", n: c.cat.other || 0 },
    ];
    $("cat-seg").innerHTML = opts
      .map(
        (o) =>
          `<button type="button" class="seg-btn${state.cat === o.v ? " is-on" : ""}" data-cat="${o.v}" aria-pressed="${
            state.cat === o.v
          }">${esc(o.l)}<span class="count">${o.n}</span></button>`
      )
      .join("");
  }

  function renderSelects() {
    const sub = $("sub-select");
    const opts = ['<option value="all">全部子类</option>'].concat(
      SUB_ORDER.map((s) => `<option value="${s}">${esc(SUB_LABEL[s])}</option>`)
    );
    sub.innerHTML = opts.join("");
    sub.value = state.sub;

    const tags = allTags(projects);
    const tag = $("tag-select");
    tag.innerHTML = ['<option value="all">全部标签</option>']
      .concat(tags.map((t) => `<option value="${esc(t)}">${esc(t)}</option>`))
      .join("");
    tag.value = state.tag;
  }

  function renderTable() {
    const rows = filtered();
    $("status").textContent = `当前 ${rows.length} 条`;
    $("tab-list").innerHTML = `项目列表<span class="count">${projects.length}</span>`;
    const body = $("project-body");
    if (!rows.length) {
      body.innerHTML = `<tr><td colspan="8">没有符合条件的项目。</td></tr>`;
      return;
    }
    body.innerHTML = rows
      .map((p) => {
        const depth = p.analysis && p.analysis.depth === "full" ? "完整 ›" : p.analysis && p.analysis.depth === "light" ? "轻量 ›" : "—";
        const analysisCell =
          p.analysis && p.analysis.depth
            ? `<button type="button" class="analysis-btn" data-id="${esc(p.id)}">${depth}</button>`
            : "—";
        const tags = (p.tags || []).slice(0, 4).join(" · ") || "—";
        return `<tr>
          <td><button type="button" class="name-btn" data-id="${esc(p.id)}">${esc(p.name)}</button></td>
          <td>${esc(catLabel(p.category))}</td>
          <td class="col-sub">${esc(subLabel(p.subcategory))}</td>
          <td class="col-summary">${esc(p.summary || "")}</td>
          <td class="col-tags tags">${esc(tags)}</td>
          <td class="col-author">${esc(p.author || "—")}</td>
          <td>${analysisCell}</td>
          <td>${extLinks(p)}</td>
        </tr>`;
      })
      .join("");
  }

  function sectionProjects(sec) {
    if (sec.key === "game" || sec.key === "llm-tools" || sec.key === "other") {
      return projects.filter((p) => p.category === (sec.key === "other" ? "other" : sec.key));
    }
    return projects.filter((p) => p.subcategory === sec.key);
  }

  function renderCompareTabs() {
    const box = $("cmp-seg");
    box.innerHTML = cmpSections
      .map((s) => {
        const n = s.rows.length || sectionProjects(s).length;
        const on = state.ck === s.key ? " is-on" : "";
        return `<button type="button" class="seg-btn${on}" role="tab" aria-selected="${state.ck === s.key}" data-ck="${esc(
          s.key
        )}">${esc(s.title)}<span class="count">${n}</span></button>`;
      })
      .join("");
    $("tab-compare").innerHTML = `横向对比<span class="count">${cmpSections.length}</span>`;
  }

  function renderCompare() {
    const sec = cmpSections.find((s) => s.key === state.ck) || cmpSections[0];
    if (!sec) {
      $("cmp-scope").textContent = "暂无对比数据。";
      $("cmp-table-wrap").innerHTML = "";
      $("cmp-prose").innerHTML = "";
      return;
    }
    const n = sec.rows.length || sectionProjects(sec).length;
    const extra = sec.scope ? `范围：${sec.scope}。` : "";
    $("cmp-scope").textContent = `${extra}本表按当前数据计 ${n} 个项目。成熟度中的星标为观察时的查询值，之后会变化。「自报」指项目方自述、未经独立验证。`;

    if (sec.rows.length) {
      $("cmp-table-wrap").innerHTML = `<table class="grid">
        <thead><tr><th>项目</th><th>技术路线</th><th>核心能力</th><th>成熟度</th><th>开源</th><th>适用场景</th></tr></thead>
        <tbody>${sec.rows
          .map((r) => {
            const name = (byId[r.id] && byId[r.id].name) || r.id;
            return `<tr>
              <td><button type="button" class="name-btn" data-id="${esc(r.id)}">${esc(name)}</button></td>
              <td>${esc(r.tech)}</td>
              <td>${esc(r.capability)}</td>
              <td>${esc(r.maturity)}</td>
              <td>${esc(r.license)}</td>
              <td>${esc(r.use_case)}</td>
            </tr>`;
          })
          .join("")}</tbody>
      </table>`;
    } else {
      $("cmp-table-wrap").innerHTML = "";
    }

    const paras = (sec.prose || []).map((t) => `<p>${linkify(t)}</p>`).join("");
    $("cmp-prose").innerHTML = `<h3>${esc(sec.title)}：说明与结论</h3>${paras}`;
  }

  function renderDrawer(p) {
    const a = p.analysis || {};
    const depth = a.depth === "full" ? "完整分析" : a.depth === "light" ? "轻量分析" : "暂无分析";
    const cat = `${catLabel(p.category)}${p.subcategory ? " / " + subLabel(p.subcategory) : ""}`;
    $("drawer-title").textContent = p.name;
    const origin = ORIGIN_LABEL[p.origin] || p.origin || "";
    const metaBits = [
      cat,
      depth,
      p.author ? `作者 ${p.author}` : "",
      p.first_seen ? `首次见到 ${p.first_seen}` : "",
      origin,
      p.stars != null ? `★ ${p.stars}` : "",
    ].filter(Boolean);
    const features = (a.features || []).map((x) => `<li>${esc(x)}</li>`).join("");
    const highlights = (a.highlights || []).map((x) => `<li>${esc(x)}</li>`).join("");
    const limitations = (a.limitations || []).map((x) => `<li>${esc(x)}</li>`).join("");
    const tags = (p.tags || []).length ? `<p class="kicker">标签：${esc((p.tags || []).join(" · "))}</p>` : "";
    const notes = p.notes ? `<div class="prop"><dt>备注</dt><dd>${esc(p.notes)}</dd></div>` : "";
    const models = (p.models || []).length
      ? `<div class="prop"><dt>相关模型</dt><dd>${esc((p.models || []).join("、"))}</dd></div>`
      : "";
    const researched = a.researched_at ? `<div class="prop"><dt>分析日期</dt><dd>${esc(a.researched_at)}</dd></div>` : "";

    $("drawer-body").innerHTML = `
      <p class="kicker">${esc(metaBits.join(" · "))}</p>
      <p class="summary">${esc(p.summary || "")}</p>
      ${tags}
      ${
        a.depth
          ? `<dl class="props">
        <div class="prop"><dt>核心技术</dt><dd>${esc(a.core_tech || "未查到")}</dd></div>
        <div class="prop"><dt>核心方法</dt><dd>${esc(a.method || "未查到")}</dd></div>
        ${features ? `<div class="prop"><dt>主要功能</dt><dd><ul>${features}</ul></dd></div>` : ""}
        ${a.comparison ? `<div class="prop"><dt>横向对比</dt><dd>${linkify(a.comparison)}</dd></div>` : ""}
        ${models}${notes}${researched}
      </dl>
      <div class="lists">
        <div class="hi"><h3>特点</h3>${highlights ? `<ul>${highlights}</ul>` : "<p>—</p>"}</div>
        <div class="lo"><h3>局限</h3>${limitations ? `<ul>${limitations}</ul>` : "<p>—</p>"}</div>
      </div>`
          : "<p>暂无分析。</p>"
      }
      <p>${extLinks(p)}</p>
    `;
    $("drawer-back").hidden = state.hist.length === 0;
    const backName = state.hist.length ? (byId[state.hist[state.hist.length - 1]] || {}).name : "";
    $("drawer-back").textContent = backName ? `返回 ${backName}` : "返回";
  }

  function currentListHash() {
    if (state.view === "compare") return state.ck ? `#compare/${encodeURIComponent(state.ck)}` : "#compare";
    return "";
  }

  function openProject(id, { pushHist = false, updateHash = true } = {}) {
    const p = byId[id];
    if (!p) return;
    if (pushHist && state.sel && state.sel !== id) state.hist.push(state.sel);
    if (state.sel !== id && !pushHist) {
      /* keep hist if navigating from back */
    }
    state.sel = id;
    renderDrawer(p);
    const dlg = $("drawer");
    if (!dlg.open) dlg.showModal();
    if (updateHash) {
      const hash = `#${encodeURIComponent(id)}`;
      if (location.hash !== hash) history.pushState({ id, view: state.view, ck: state.ck }, "", hash);
    }
  }

  function closeDrawer({ updateHash = true } = {}) {
    state.sel = null;
    state.hist = [];
    const dlg = $("drawer");
    if (dlg.open) dlg.close();
    if (updateHash) {
      const next = currentListHash() || " ";
      const url = next.trim() ? next : location.pathname + location.search;
      history.pushState({ view: state.view, ck: state.ck }, "", url === " " ? location.pathname + location.search : url);
    }
  }

  function backDrawer() {
    const prev = state.hist.pop();
    if (!prev) {
      closeDrawer();
      return;
    }
    state.sel = prev;
    const p = byId[prev];
    if (p) renderDrawer(p);
    const hash = `#${encodeURIComponent(prev)}`;
    history.pushState({ id: prev, view: state.view, ck: state.ck }, "", hash);
  }

  function setView(view, { updateHash = true } = {}) {
    state.view = view;
    $("list-view").hidden = view !== "list";
    $("compare-view").hidden = view !== "compare";
    $("tab-list").classList.toggle("is-on", view === "list");
    $("tab-compare").classList.toggle("is-on", view === "compare");
    $("tab-list").setAttribute("aria-selected", String(view === "list"));
    $("tab-compare").setAttribute("aria-selected", String(view === "compare"));
    if (view === "compare") renderCompare();
    if (updateHash && !state.sel) {
      const next = currentListHash() || location.pathname + location.search;
      if ((location.hash || "") !== (currentListHash() || "")) {
        history.replaceState({ view: state.view, ck: state.ck }, "", next);
      }
    }
  }

  function applyHash() {
    const raw = decodeURIComponent((location.hash || "").replace(/^#/, ""));
    if (!raw) {
      if (state.sel) closeDrawer({ updateHash: false });
      return;
    }
    if (raw === "compare" || raw.startsWith("compare/")) {
      const key = raw.split("/")[1] || (cmpSections[0] && cmpSections[0].key) || "";
      if (key && cmpSections.some((s) => s.key === key)) state.ck = key;
      if (state.sel) closeDrawer({ updateHash: false });
      setView("compare", { updateHash: false });
      renderCompareTabs();
      renderCompare();
      return;
    }
    if (byId[raw]) {
      openProject(raw, { updateHash: false });
    }
  }

  function toast(msg) {
    const el = document.createElement("div");
    el.className = "toast";
    el.textContent = msg;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 1800);
  }

  async function copyLink() {
    if (!state.sel) return;
    const url = `${location.origin}${location.pathname}#${encodeURIComponent(state.sel)}`;
    try {
      await navigator.clipboard.writeText(url);
      toast("链接已复制");
    } catch {
      toast(url);
    }
  }

  function bind() {
    $("tab-list").addEventListener("click", () => setView("list"));
    $("tab-compare").addEventListener("click", () => setView("compare"));

    $("cat-seg").addEventListener("click", (e) => {
      const btn = e.target.closest("[data-cat]");
      if (!btn) return;
      state.cat = btn.dataset.cat;
      if (state.cat !== "all" && state.cat !== "agent-eng") state.sub = "all";
      $("sub-select").value = state.sub;
      renderCatSeg();
      renderTable();
    });

    $("sub-select").addEventListener("change", (e) => {
      state.sub = e.target.value;
      renderTable();
    });
    $("tag-select").addEventListener("change", (e) => {
      state.tag = e.target.value;
      renderTable();
    });
    $("search").addEventListener("input", (e) => {
      state.q = e.target.value;
      renderTable();
    });

    document.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-id]");
      if (!btn) return;
      if (btn.closest("dialog") && btn.classList.contains("ref")) {
        openProject(btn.dataset.id, { pushHist: true });
        return;
      }
      openProject(btn.dataset.id, { pushHist: Boolean(state.sel) });
    });

    $("cmp-seg").addEventListener("click", (e) => {
      const btn = e.target.closest("[data-ck]");
      if (!btn) return;
      state.ck = btn.dataset.ck;
      renderCompareTabs();
      renderCompare();
      if (!state.sel) history.replaceState({ view: "compare", ck: state.ck }, "", currentListHash());
    });

    $("drawer-close").addEventListener("click", () => closeDrawer());
    $("drawer-back").addEventListener("click", () => backDrawer());
    $("drawer-copy").addEventListener("click", () => copyLink());
    $("drawer").addEventListener("close", () => {
      if (state.sel) {
        state.sel = null;
        state.hist = [];
        const next = currentListHash() || location.pathname + location.search;
        history.pushState({ view: state.view, ck: state.ck }, "", next);
      }
    });

    window.addEventListener("popstate", () => applyHash());
  }

  async function load() {
    try {
      const [projRes, cmpRes] = await Promise.all([
        fetch("data/projects.json"),
        fetch("data/comparisons.json"),
      ]);
      if (!projRes.ok) throw new Error(`无法读取 data/projects.json（${projRes.status}）`);
      const data = await projRes.json();
      projects = Array.isArray(data.projects) ? data.projects : [];
      byId = Object.fromEntries(projects.map((p) => [p.id, p]));
      const ids = projects
        .map((p) => p.id)
        .filter(Boolean)
        .sort((a, b) => b.length - a.length)
        .map((id) => id.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
      idRe = ids.length
        ? new RegExp("(?<![A-Za-z0-9_-])(" + ids.join("|") + ")(?![A-Za-z0-9_-])")
        : null;

      if (cmpRes.ok) {
        const cmp = await cmpRes.json();
        cmpSections = Array.isArray(cmp.sections) ? cmp.sections : [];
      }
      if (!state.ck && cmpSections[0]) state.ck = cmpSections[0].key;

      renderMetrics();
      renderCatSeg();
      renderSelects();
      renderTable();
      renderCompareTabs();
      bind();
      applyHash();
    } catch (err) {
      $("metrics").innerHTML = `<p class="error">数据加载失败：${esc(err.message || err)}。请确认站点能访问 data/projects.json。</p>`;
    }
  }

  load();
})();
