#!/bin/sh
# Собирает все страницы сайта: sh build.sh
cd "$(dirname "$0")" || exit 1
for f in *.md; do
  pandoc "$f" -s --mathml --css style.css -o "${f%.md}.html" && echo "ok  ${f%.md}.html"
done
