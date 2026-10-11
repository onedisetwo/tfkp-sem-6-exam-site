#!/usr/bin/env python3
"""Проверка собранного сайта: битые ссылки и якоря, ошибки MathML (merror).

Запуск после build.sh:  python3 check_site.py
Выход с кодом 1, если что-то найдено.
"""
import glob
import os
import re
import sys
from urllib.parse import unquote

HERE = os.path.dirname(os.path.abspath(__file__))
pages = {os.path.basename(p): open(p, encoding="utf-8").read()
         for p in glob.glob(os.path.join(HERE, "*.html"))}
ids = {name: set(re.findall(r'\sid="([^"]+)"', src)) for name, src in pages.items()}

links = bad = merr = 0
for name, src in sorted(pages.items()):
    for href in re.findall(r'href="([^"]+)"', src):
        if re.match(r"(https?:|mailto:|data:)", href) or href.endswith(".css") or "'" in href:
            continue
        links += 1
        file, _, anchor = href.partition("#")
        file = file or name
        anchor = unquote(anchor)
        if file not in pages:
            bad += 1; print("нет файла  %s -> %s" % (name, href))
        elif anchor and anchor not in ids[file]:
            bad += 1; print("нет якоря  %s -> %s" % (name, href))
    n = src.count("<merror")
    if n:
        merr += n; print("merror x%d  %s" % (n, name))

print("страниц %d, ссылок %d, битых %d, merror %d" % (len(pages), links, bad, merr))
sys.exit(1 if bad or merr else 0)
