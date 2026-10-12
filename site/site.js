/* ТФКП — общий скрипт сайта.
   Подключается первой строкой каждого .md:  <script src="site.js"></script>
   Делает: верхнее меню, переключатель темы, оглавление страницы,
   «раскрыть все ответы», отметку «выучено», навигацию между билетами,
   раскрытие ответов при печати, таблицу билетов на главной.

   ЕДИНСТВЕННОЕ место, где хранится статус страниц, — массив TICKETS ниже.
   status: "ready" — страница готова; "soon" — пишется; "wait" — ждёт лекций.
   cover:  "ok" — есть в лекциях; "part" — частично; "miss" — нет в лекциях. */

(function () {
  "use strict";

  var TICKETS = [
    // Голоморфные функции многих переменных
    { n: 1,  g: "I",   t: "От Коши–Римана к кратной формуле Коши",            cover: "ok",   status: "ready" },
    { n: 2,  g: "I",   t: "Степенные ряды от n переменных",                    cover: "ok",   status: "ready" },
    { n: 3,  g: "I",   t: "Формула Коши ⇒ степенной ряд. Неравенства Коши",   cover: "ok",   status: "ready" },
    { n: 4,  g: "I",   t: "Степенной ряд ⇒ условия Коши–Римана",              cover: "ok",   status: "ready" },
    { n: 5,  g: "I",   t: "Три определения голоморфности и их следствия",     cover: "part", status: "ready" },
    { n: 6,  g: "I",   t: "Теорема Коши–Пуанкаре. Аналог Мореры",             cover: "part", status: "ready" },
    // Области голоморфности и биголоморфизмы
    { n: 7,  g: "II",  t: "Области голоморфности",                            cover: "part", status: "ready" },
    { n: 8,  g: "II",  t: "Биголоморфные отображения. Теорема Картана",       cover: "part", status: "ready" },
    // Алгебраические функции и римановы поверхности
    { n: 9,  g: "V",   t: "Неявное отображение. Дискриминант. P(z,w)=0",       cover: "part", status: "ready" },
    { n: 10, g: "V",   t: "Два определения алгебраической функции",           cover: "part", status: "ready" },
    { n: 11, g: "V",   t: "Риманова поверхность ПАФ. Нормализация",           cover: "part", status: "ready" },
    { n: 12, g: "V",   t: "Риманова поверхность алг. функции. Риман–Гурвиц",  cover: "part", status: "ready" },
    { n: 13, g: "V",   t: "Алгебраические кривые в C² и CP². Род",            cover: "miss", status: "ready" },
    { n: 14, g: "V",   t: "Группа монодромии. Теорема Абеля",                 cover: "miss", status: "ready" },
    // Мероморфные и целые функции
    { n: 15, g: "III", t: "Теорема Миттаг-Леффлера. Разложение ctg z",        cover: "ok",   status: "ready" },
    { n: 16, g: "III", t: "Бесконечные произведения. Разложение sin z",       cover: "part", status: "ready" },
    // Эллиптические функции
    { n: 17, g: "IV",  t: "Группа периодов. Эллиптические функции",           cover: "ok",   status: "ready" },
    { n: 18, g: "IV",  t: "Построение ℘-функции Вейерштрасса",                cover: "ok",   status: "ready" },
    { n: 19, g: "IV",  t: "Дифференциальное уравнение для ℘",                 cover: "ok",   status: "ready" },
    { n: 20, g: "IV",  t: "Тор: C/G и кубическая кривая",                     cover: "part", status: "ready" },
    // Конформные отображения
    { n: 21, g: "VI",  t: "Эллиптический синус",                              cover: "miss", status: "ready" },
    { n: 22, g: "VI",  t: "Формула Кристоффеля–Шварца",                        cover: "miss", status: "ready" },
    { n: 23, g: "VI",  t: "Модулярная функция. Малая теорема Пикара",         cover: "miss", status: "ready" }
  ];

  var GROUPS = {
    I: "I. Голоморфные функции многих переменных",
    II: "II. Области голоморфности, биголоморфизмы",
    III: "III. Мероморфные и целые функции",
    IV: "IV. Эллиптические функции",
    V: "V. Алгебраические функции, римановы поверхности",
    VI: "VI. Конформные отображения"
  };
  var GROUP_ORDER = ["I", "II", "III", "IV", "V", "VI"];

  var PAGES = [
    { href: "index.html", t: "Главная" },
    { href: "00_base.html", t: "База" },
    { href: "04_overview.html", t: "Обзор" },
    { href: "01_map.html", t: "Карта" },
    { href: "02_formulas.html", t: "Формулы" },
    { href: "03_plan.html", t: "План" }
  ];
  var READY_PAGES = { "index.html": true, "00_base.html": true, "01_map.html": true, "02_formulas.html": true, "03_plan.html": true, "04_overview.html": true };

  var COVER_LABEL = { ok: "есть в лекциях", part: "частично", miss: "нет в лекциях" };
  var STATUS_LABEL = { ready: "готов", soon: "пишется", wait: "ждёт лекций" };

  /* ---------- хранилище (может быть недоступно) ---------- */
  function load(key, fallback) {
    try { var v = localStorage.getItem(key); return v === null ? fallback : JSON.parse(v); }
    catch (e) { return fallback; }
  }
  function save(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) { /* без сохранения */ }
  }

  /* ---------- тема: применяем сразу, до отрисовки ---------- */
  var THEMES = ["auto", "light", "dark"];
  var THEME_ICON = { auto: "☀☾", light: "☀", dark: "☾" };
  var THEME_NAME = { auto: "как в системе", light: "светлая", dark: "тёмная" };
  var theme = load("tfkp-theme", "auto");
  function applyTheme() {
    if (theme === "auto") document.documentElement.removeAttribute("data-theme");
    else document.documentElement.setAttribute("data-theme", theme);
  }
  applyTheme();
  if (!document.documentElement.getAttribute("lang")) document.documentElement.setAttribute("lang", "ru");

  /* ---------- утилиты ---------- */
  function el(tag, attrs, children) {
    var e = document.createElement(tag);
    if (attrs) for (var k in attrs) {
      if (k === "text") e.textContent = attrs[k];
      else if (k === "html") e.innerHTML = attrs[k];
      else e.setAttribute(k, attrs[k]);
    }
    (children || []).forEach(function (c) { if (c) e.appendChild(typeof c === "string" ? document.createTextNode(c) : c); });
    return e;
  }
  function pad(n) { return n < 10 ? "0" + n : "" + n; }
  function ticketHref(n) { return "ticket_" + pad(n) + ".html"; }
  function currentFile() {
    var p = location.pathname.split("/").pop();
    return p === "" ? "index.html" : decodeURIComponent(p);
  }
  function badge(cls, text) { return el("span", { "class": "badge " + cls, text: text }); }
  function learnedSet() { return load("tfkp-learned", []); }
  function isLearned(n) { return learnedSet().indexOf(n) !== -1; }
  function setLearned(n, on) {
    var s = learnedSet().filter(function (x) { return x !== n; });
    if (on) s.push(n);
    save("tfkp-learned", s);
  }
  function ticketByHref(href) {
    var m = /ticket_(\d\d)\.html/.exec(href || "");
    if (!m) return null;
    var n = parseInt(m[1], 10);
    for (var i = 0; i < TICKETS.length; i++) if (TICKETS[i].n === n) return TICKETS[i];
    return null;
  }
  function pageReady(href) {
    var file = (href || "").split("#")[0];
    var tk = ticketByHref(file);
    if (tk) return tk.status === "ready";
    if (/^(index|00_base|01_map|02_formulas|03_plan|04_overview)\.html$/.test(file)) return !!READY_PAGES[file];
    return true;
  }

  /* ---------- верхнее меню ---------- */
  function buildNav() {
    var here = currentFile();
    var nav = el("nav", { "class": "topnav", "aria-label": "Меню сайта" });
    nav.appendChild(el("a", { href: "index.html", "class": "brand", text: "ТФКП" }));
    PAGES.slice(1).forEach(function (p) {
      var a = el("a", { href: p.href, text: p.t });
      if (p.href === here) a.className = "current";
      nav.appendChild(a);
    });

    var det = el("details");
    det.appendChild(el("summary", { text: "Билеты" }));
    var box = el("div", { "class": "menu-tickets" });
    GROUP_ORDER.forEach(function (g) {
      box.appendChild(el("div", { "class": "group", text: GROUPS[g] }));
      TICKETS.filter(function (t) { return t.g === g; }).forEach(function (t) {
        var inner = [el("span", { "class": "num", text: t.n + "." }), el("span", { "class": "title", text: t.t })];
        if (isLearned(t.n)) inner.push(badge("done", "выучен"));
        else if (t.status !== "ready") inner.push(badge(t.status, STATUS_LABEL[t.status]));
        var item = t.status === "ready"
          ? el("a", { href: ticketHref(t.n) }, inner)
          : el("span", { "class": "item", title: "Страница ещё не готова" }, inner);
        if (ticketHref(t.n) === here) item.className = "current";
        box.appendChild(item);
      });
    });
    det.appendChild(box);
    nav.appendChild(det);
    document.addEventListener("click", function (e) { if (det.open && !det.contains(e.target)) det.open = false; });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") det.open = false; });

    nav.appendChild(el("span", { "class": "spacer" }));

    if (document.querySelector("details")) {   // меню ещё не вставлено, значит это ответы
      var open = false;
      var b = el("button", { type: "button", title: "Раскрыть или свернуть все ответы", text: "Ответы ▸" });
      b.addEventListener("click", function () {
        open = !open;
        document.querySelectorAll("details").forEach(function (d) { if (!nav.contains(d) && !d.closest("nav.page-toc")) d.open = open; });
        b.textContent = open ? "Ответы ▾" : "Ответы ▸";
      });
      nav.appendChild(b);
    }

    var tb = el("button", { type: "button", "class": "icon", title: "Тема: " + THEME_NAME[theme], text: THEME_ICON[theme] });
    tb.addEventListener("click", function () {
      theme = THEMES[(THEMES.indexOf(theme) + 1) % THEMES.length];
      save("tfkp-theme", theme);
      applyTheme();
      tb.textContent = THEME_ICON[theme];
      tb.title = "Тема: " + THEME_NAME[theme];
    });
    nav.appendChild(tb);

    var pb = el("button", { type: "button", "class": "print-btn", title: "Печать (все ответы раскроются)", text: "Печать" });
    pb.addEventListener("click", function () { window.print(); });
    nav.appendChild(pb);

    document.body.insertBefore(nav, document.body.firstChild);
  }

  /* ---------- оглавление страницы ---------- */
  function buildToc() {
    if (document.body.hasAttribute("data-no-toc") || document.querySelector(".no-toc")) return;
    var hs = Array.prototype.slice.call(document.querySelectorAll("body > h1, body > h2, body > h3, .concept > h3"));
    hs = hs.filter(function (h) { return !h.closest(".quiz") && !h.closest("details"); });
    if (hs.length < 5) return;
    var ul = el("ul");
    hs.forEach(function (h, i) {
      if (!h.id) h.id = "sec-" + i;
      var a = el("a", { href: "#" + h.id });
      var copy = h.cloneNode(true);
      copy.querySelectorAll("annotation").forEach(function (n) { n.remove(); });
      while (copy.firstChild) a.appendChild(copy.firstChild);
      ul.appendChild(el("li", { "class": h.tagName === "H1" || (h.tagName === "H2" && !document.querySelector("body > h1")) ? "lvl2" : "lvl3" }, [a]));
    });
    var toc = el("nav", { "class": "page-toc", "aria-label": "Содержание страницы" });
    var d = el("details", hs.length > 15 ? null : { open: "" });
    d.appendChild(el("summary", { text: "Содержание" }));
    d.appendChild(ul);
    toc.appendChild(d);
    var header = document.getElementById("title-block-header");
    var after = header || document.querySelector(".topnav");
    after.parentNode.insertBefore(toc, after.nextSibling);
    // Короткое введение (если оно есть) оставляем перед оглавлением
  }

  /* ---------- ссылки на неготовые страницы ---------- */
  function markPending() {
    document.querySelectorAll("a[href]").forEach(function (a) {
      if (a.closest(".topnav")) return;
      var href = a.getAttribute("href");
      if (/^[a-z]+:/i.test(href) || href.charAt(0) === "#") return;
      if (!pageReady(href)) {
        a.classList.add("pending");
        a.title = "Эта страница ещё готовится";
        a.addEventListener("click", function (e) { e.preventDefault(); });
      }
    });
  }

  /* ---------- страница билета: выучено + пред./след. ---------- */
  function ticketExtras() {
    var tk = ticketByHref(currentFile());
    if (!tk) return;
    var header = document.getElementById("title-block-header");
    var bar = el("p", { "class": "no-print" });
    var btn = el("button", { type: "button", "class": "btn" });
    function sync() {
      var on = isLearned(tk.n);
      btn.textContent = on ? "✓ Выучен" : "Отметить как выученный";
      btn.classList.toggle("on", on);
    }
    btn.addEventListener("click", function () { setLearned(tk.n, !isLearned(tk.n)); sync(); });
    sync();
    bar.appendChild(badge(tk.cover, COVER_LABEL[tk.cover]));
    bar.appendChild(document.createTextNode(" "));
    bar.appendChild(btn);
    if (header) header.appendChild(bar);

    var i = TICKETS.indexOf(tk);
    var pager = el("nav", { "class": "pager", "aria-label": "Соседние билеты" });
    function link(t, label) {
      if (!t) return el("span");
      var txt = label + " Билет " + t.n;
      return t.status === "ready" ? el("a", { href: ticketHref(t.n), text: txt }) : el("span", { text: txt + " (готовится)" });
    }
    pager.appendChild(link(TICKETS[i - 1], "←"));
    pager.appendChild(el("a", { href: "01_map.html", text: "Карта" }));
    var next = link(TICKETS[i + 1], "");
    if (TICKETS[i + 1]) next.textContent = next.textContent.trim() + " →";
    pager.appendChild(next);
    document.body.appendChild(pager);
  }

  /* ---------- главная: таблица билетов и прогресс ---------- */
  function ticketTable() {
    var host = document.getElementById("tickets-table");
    if (!host) return;
    host.innerHTML = "";
    var learned = learnedSet().length;
    var ready = TICKETS.filter(function (t) { return t.status === "ready"; }).length;
    host.appendChild(el("p", { text: "Готово страниц: " + ready + " из 23. Выучено: " + learned + " из 23." }));
    var bar = el("div", { "class": "progress", title: "Выучено" }, [el("span")]);
    bar.firstChild.style.width = (learned / 23 * 100) + "%";
    host.appendChild(bar);

    var table = el("table");
    table.appendChild(el("thead", null, [el("tr", null, [
      el("th", { text: "№" }), el("th", { text: "Билет" }), el("th", { text: "Лекции" }),
      el("th", { text: "Страница" }), el("th", { text: "Выучен" })
    ])]));
    var tb = el("tbody");
    GROUP_ORDER.forEach(function (g) {
      tb.appendChild(el("tr", null, [el("th", { colspan: "5", text: GROUPS[g] })]));
      TICKETS.filter(function (t) { return t.g === g; }).forEach(function (t) {
        var title = t.status === "ready" ? el("a", { href: ticketHref(t.n), text: t.t }) : el("span", { text: t.t });
        var cb = el("input", { type: "checkbox", "aria-label": "Билет " + t.n + " выучен" });
        cb.checked = isLearned(t.n);
        cb.addEventListener("change", function () { setLearned(t.n, cb.checked); ticketTable(); });
        tb.appendChild(el("tr", null, [
          el("td", { text: String(t.n) }),
          el("td", null, [title]),
          el("td", null, [badge(t.cover, COVER_LABEL[t.cover])]),
          el("td", null, [badge(t.status, STATUS_LABEL[t.status])]),
          el("td", null, [cb])
        ]));
      });
    });
    table.appendChild(tb);
    host.appendChild(table);
  }

  /* ---------- печать: раскрыть все ответы ---------- */
  var closedBeforePrint = [];
  window.addEventListener("beforeprint", function () {
    closedBeforePrint = [];
    document.querySelectorAll("details").forEach(function (d) {
      if (d.closest(".topnav")) return;
      if (!d.open) { closedBeforePrint.push(d); d.open = true; }
    });
  });
  window.addEventListener("afterprint", function () {
    closedBeforePrint.forEach(function (d) { d.open = false; });
  });

  function init() {
    buildNav();
    buildToc();
    ticketExtras();
    ticketTable();
    markPending();
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
