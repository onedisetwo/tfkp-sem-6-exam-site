#!/usr/bin/env python3
"""Собирает весь сайт в один файл ../tfkp_site.html (открывается локально, без интернета).

Запуск после build.sh:  python3 bundle.py
Внутри файла: стили со встроенными шрифтами, site.js и все страницы в <template> (в <head>, чтобы показ страницы не стирал их).
Небольшой маршрутизатор показывает нужную страницу по адресу #страница.html:якорь.
"""
import base64
import html
import os
import re

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(HERE, "..", "tfkp_site.html")

# Порядок страниц не важен для работы, но так файл читается легче.
FIRST = ["index.html", "00_base.html", "01_map.html", "02_formulas.html", "03_plan.html"]
SKIP = {"notes_16_23.html"}  # служебная страница, в меню её нет


def read(name):
    with open(os.path.join(HERE, name), encoding="utf-8") as f:
        return f.read()


def css_with_fonts():
    css = read("style.css")

    def inline(m):
        path = os.path.join(HERE, m.group(1))
        with open(path, "rb") as f:
            data = base64.b64encode(f.read()).decode("ascii")
        return 'url("data:font/woff2;base64,%s")' % data

    return re.sub(r'url\("(fonts/[^"]+\.woff2)"\)', inline, css)


def site_js():
    js = read("site.js")
    # Текущая страница берётся у маршрутизатора, а не из имени файла.
    js, n1 = re.subn(r"function currentFile\(\) \{",
                     "function currentFile() {\n    if (window.__TFKP_PAGE) return window.__TFKP_PAGE;", js, count=1)
    # init() вызывает маршрутизатор при каждом показе страницы.
    js, n2 = re.subn(r'  if \(document\.readyState === "loading"\) document\.addEventListener\("DOMContentLoaded", init\);\n  else init\(\);',
                     "  window.__TFKP_INIT = init;", js, count=1)
    assert n1 == 1 and n2 == 1, "site.js изменился: поправьте bundle.py"
    return js.replace("</script", "<\\/script")  # иначе комментарий в site.js закроет тег


def page_body(name):
    src = read(name)
    title = re.search(r"<title>(.*?)</title>", src, re.S).group(1).strip()
    body = re.search(r"<body>(.*)</body>", src, re.S).group(1)
    body = body.replace('<script src="site.js"></script>', "")
    body = re.sub(r"<noscript>.*?</noscript>", "", body, flags=re.S)
    assert "</template>" not in body
    return title, body.strip()


ROUTER = r"""
(function () {
  "use strict";
  var current = null;

  function tpl(file) { return document.getElementById("page:" + file); }

  function parse(hash) {
    var h = decodeURIComponent((hash || "").replace(/^#/, ""));
    var m = /^([\w.-]+\.html)(?::(.*))?$/.exec(h);
    if (m && tpl(m[1])) return { file: m[1], anchor: m[2] || "" };
    if (h && current) return { file: current, anchor: h };
    return { file: "index.html", anchor: "" };
  }

  function scrollTo(anchor) {
    var e = anchor && document.getElementById(anchor);
    if (e) e.scrollIntoView(); else window.scrollTo(0, 0);
  }

  function render(file, anchor) {
    var t = tpl(file);
    current = file;
    window.__TFKP_PAGE = file;
    document.body.innerHTML = "";
    document.body.appendChild(t.content.cloneNode(true));
    document.body.querySelectorAll("script").forEach(function (old) {
      var s = document.createElement("script");
      s.textContent = old.textContent;
      old.parentNode.replaceChild(s, old);
    });
    document.title = t.getAttribute("data-title");
    window.__TFKP_INIT();
    scrollTo(anchor);
  }

  function route() {
    var r = parse(location.hash);
    if (r.file === current) scrollTo(r.anchor);
    else render(r.file, r.anchor);
  }

  document.addEventListener("click", function (e) {
    if (e.defaultPrevented || e.button !== 0 || e.ctrlKey || e.metaKey || e.shiftKey) return;
    var a = e.target.closest ? e.target.closest("a[href]") : null;
    if (!a) return;
    var href = a.getAttribute("href");
    if (/^[a-z][a-z0-9+.-]*:/i.test(href)) return;   // внешние ссылки
    var file, anchor;
    if (href.charAt(0) === "#") { file = current; anchor = decodeURIComponent(href.slice(1)); }
    else { var i = href.indexOf("#"); file = i < 0 ? href : href.slice(0, i); anchor = i < 0 ? "" : decodeURIComponent(href.slice(i + 1)); }
    if (!tpl(file)) return;
    e.preventDefault();
    var hash = "#" + file + (anchor ? ":" + anchor : "");
    if (file === current) { history.pushState(null, "", hash); scrollTo(anchor); }
    else location.hash = hash;
  });

  window.addEventListener("hashchange", route);
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", route);
  else route();
})();
"""


def main():
    names = [n for n in sorted(os.listdir(HERE)) if n.endswith(".html") and n not in SKIP]
    names = [n for n in FIRST if n in names] + [n for n in names if n not in FIRST]
    parts = []
    for n in names:
        title, body = page_body(n)
        parts.append('<template id="page:%s" data-title="%s">\n%s\n</template>' % (n, html.escape(title, quote=True), body))
    out = """<!DOCTYPE html>
<html lang="ru">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes">
<title>ТФКП, 6 семестр: подготовка к экзамену</title>
<style>
code{white-space: pre-wrap;}
span.smallcaps{font-variant: small-caps;}
div.columns{display: flex; gap: min(4vw, 1.5em);}
div.column{flex: auto; overflow-x: auto;}
</style>
<style>
%s
</style>
%s
<script>
%s
</script>
<script>
%s
</script>
</head>
<body>
<noscript><p>Для работы сайта нужен JavaScript.</p></noscript>
</body>
</html>
""" % (css_with_fonts(), "\n".join(parts), site_js(), ROUTER)
    with open(OUT, "w", encoding="utf-8") as f:
        f.write(out)
    print("ok  %s  (%d страниц, %.1f МБ)" % (os.path.normpath(OUT), len(names), os.path.getsize(OUT) / 1e6))


if __name__ == "__main__":
    main()
