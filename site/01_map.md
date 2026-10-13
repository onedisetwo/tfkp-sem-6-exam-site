---
title: "Карта курса"
subtitle: "Как связаны 23 билета, что на что опирается и в каком порядке учить"
lang: ru
---

<script src="site.js"></script>
<noscript><p><a href="index.html">Главная</a> · <a href="00_base.html">База</a> · <a href="02_formulas.html">Формулы</a> · <a href="03_plan.html">План</a></p></noscript>

::: short
Программа делится на **шесть кластеров**. Внутри кластера билеты идут цепочкой: каждый следующий опирается на предыдущий. Между кластерами связей мало. Главные «узлы», на которые опирается больше всего: **Б1, Б3** (формула Коши и ряды в $\mathbb C^n$), **Б10–Б12** (алгебраические функции и римановы поверхности), **Б15** (Миттаг-Леффлер), **Б17–Б19** (эллиптические функции), **Б22** (Кристоффель–Шварц).
:::

## Граф зависимостей

Стрелка $X\to Y$ означает «билет $Y$ опирается на билет $X$». Рамка с заливкой — билет полностью есть в лекциях; без заливки — частично; пунктир — нет в лекциях (стандартный вариант). Цвет рамки — ваш прогресс: оранжевая — выучено что-то одно (формулировки или доказательства), зелёная толстая — выучено всё; отмечается на странице билета. Каждый прямоугольник — ссылка на билет, подсказка при наведении показывает, что выучено.

<figure>
<svg viewBox="0 0 680 560" style="width:100%;max-width:680px;height:auto" role="img" aria-label="Граф зависимостей билетов">
<defs><marker id="arrM" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker></defs>
<g class="muted" font-size="11" fill="currentColor"><text x="8" y="14">I–II. Многомерный анализ (1–8) · III. Мероморфные (15–16)</text><text x="8" y="252">V. Алгебраические функции и римановы поверхности (9–14)</text><text x="8" y="412">IV. Эллиптические функции (17–20)</text><text x="8" y="492">VI. Конформные отображения (21–23)</text></g>
<g stroke="currentColor" stroke-width="1.3" class="muted" fill="none">
<line x1="97" y1="45" x2="123" y2="45" marker-end="url(#arrM)"/>
<line x1="84" y1="104" x2="136" y2="66" marker-end="url(#arrM)"/>
<line x1="97" y1="125" x2="123" y2="125" marker-end="url(#arrM)"/>
<line x1="207" y1="60" x2="233" y2="70" marker-end="url(#arrM)"/>
<line x1="207" y1="110" x2="233" y2="100" marker-end="url(#arrM)"/>
<line x1="69" y1="66" x2="151" y2="184" marker-end="url(#arrM)"/>
<line x1="317" y1="71" x2="353" y2="59" marker-end="url(#arrM)"/>
<line x1="463" y1="45" x2="437" y2="45" marker-end="url(#arrM)"/>
<line x1="207" y1="60" x2="353" y2="110" marker-end="url(#arrM)"/>
<line x1="317" y1="99" x2="353" y2="111" marker-end="url(#arrM)"/>
<line x1="275" y1="106" x2="275" y2="264" marker-end="url(#arrM)"/>
<line x1="317" y1="285" x2="353" y2="285" marker-end="url(#arrM)"/>
<line x1="437" y1="285" x2="463" y2="285" marker-end="url(#arrM)"/>
<line x1="547" y1="285" x2="573" y2="285" marker-end="url(#arrM)"/>
<line x1="615" y1="306" x2="615" y2="344" marker-end="url(#arrM)"/>
<line x1="317" y1="295" x2="573" y2="355" marker-end="url(#arrM)"/>
<line x1="505" y1="306" x2="505" y2="344" marker-end="url(#arrM)"/>
<line x1="586" y1="306" x2="534" y2="344" marker-end="url(#arrM)"/>
<line x1="573" y1="45" x2="547" y2="45" marker-end="url(#arrM)"/>
<line x1="591" y1="66" x2="189" y2="424" marker-end="url(#arrM)"/>
<line x1="97" y1="445" x2="123" y2="445" marker-end="url(#arrM)"/>
<line x1="207" y1="445" x2="233" y2="445" marker-end="url(#arrM)"/>
<line x1="317" y1="445" x2="573" y2="445" marker-end="url(#arrM)"/>
<line x1="615" y1="386" x2="615" y2="424" marker-end="url(#arrM)"/>
<line x1="55" y1="466" x2="55" y2="504" marker-end="url(#arrM)"/>
<line x1="123" y1="525" x2="97" y2="525" marker-end="url(#arrM)"/>
<line x1="207" y1="525" x2="233" y2="525" marker-end="url(#arrM)"/>
</g>
<a href="ticket_01.html"><rect x="17.0" y="28.0" width="76" height="34" rx="7" class="soft-fill" stroke="currentColor" stroke-width="1.4"/><text x="55" y="50" text-anchor="middle" font-size="14" fill="currentColor">Билет 1</text></a>
<a href="ticket_02.html"><rect x="17.0" y="108.0" width="76" height="34" rx="7" class="soft-fill" stroke="currentColor" stroke-width="1.4"/><text x="55" y="130" text-anchor="middle" font-size="14" fill="currentColor">Билет 2</text></a>
<a href="ticket_03.html"><rect x="127.0" y="28.0" width="76" height="34" rx="7" class="soft-fill" stroke="currentColor" stroke-width="1.4"/><text x="165" y="50" text-anchor="middle" font-size="14" fill="currentColor">Билет 3</text></a>
<a href="ticket_04.html"><rect x="127.0" y="108.0" width="76" height="34" rx="7" class="soft-fill" stroke="currentColor" stroke-width="1.4"/><text x="165" y="130" text-anchor="middle" font-size="14" fill="currentColor">Билет 4</text></a>
<a href="ticket_05.html"><rect x="237.0" y="68.0" width="76" height="34" rx="7" style="fill:var(--bg)" stroke="currentColor" stroke-width="1.4"/><text x="275" y="90" text-anchor="middle" font-size="14" fill="currentColor">Билет 5</text></a>
<a href="ticket_06.html"><rect x="127.0" y="188.0" width="76" height="34" rx="7" style="fill:var(--bg)" stroke="currentColor" stroke-width="1.4"/><text x="165" y="210" text-anchor="middle" font-size="14" fill="currentColor">Билет 6</text></a>
<a href="ticket_07.html"><rect x="357.0" y="28.0" width="76" height="34" rx="7" style="fill:var(--bg)" stroke="currentColor" stroke-width="1.4"/><text x="395" y="50" text-anchor="middle" font-size="14" fill="currentColor">Билет 7</text></a>
<a href="ticket_08.html"><rect x="357.0" y="108.0" width="76" height="34" rx="7" style="fill:var(--bg)" stroke="currentColor" stroke-width="1.4"/><text x="395" y="130" text-anchor="middle" font-size="14" fill="currentColor">Билет 8</text></a>
<a href="ticket_16.html"><rect x="467.0" y="28.0" width="76" height="34" rx="7" style="fill:var(--bg)" stroke="currentColor" stroke-width="1.4"/><text x="505" y="50" text-anchor="middle" font-size="14" fill="currentColor">Билет 16</text></a>
<a href="ticket_15.html"><rect x="577.0" y="28.0" width="76" height="34" rx="7" class="soft-fill" stroke="currentColor" stroke-width="1.4"/><text x="615" y="50" text-anchor="middle" font-size="14" fill="currentColor">Билет 15</text></a>
<a href="ticket_09.html"><rect x="237.0" y="268.0" width="76" height="34" rx="7" style="fill:var(--bg)" stroke="currentColor" stroke-width="1.4"/><text x="275" y="290" text-anchor="middle" font-size="14" fill="currentColor">Билет 9</text></a>
<a href="ticket_10.html"><rect x="357.0" y="268.0" width="76" height="34" rx="7" style="fill:var(--bg)" stroke="currentColor" stroke-width="1.4"/><text x="395" y="290" text-anchor="middle" font-size="14" fill="currentColor">Билет 10</text></a>
<a href="ticket_11.html"><rect x="467.0" y="268.0" width="76" height="34" rx="7" style="fill:var(--bg)" stroke="currentColor" stroke-width="1.4"/><text x="505" y="290" text-anchor="middle" font-size="14" fill="currentColor">Билет 11</text></a>
<a href="ticket_12.html"><rect x="577.0" y="268.0" width="76" height="34" rx="7" style="fill:var(--bg)" stroke="currentColor" stroke-width="1.4"/><text x="615" y="290" text-anchor="middle" font-size="14" fill="currentColor">Билет 12</text></a>
<a href="ticket_13.html"><rect x="577.0" y="348.0" width="76" height="34" rx="7" style="fill:var(--bg)" stroke="currentColor" stroke-width="1.4" stroke-dasharray="5 3"/><text x="615" y="370" text-anchor="middle" font-size="14" fill="currentColor">Билет 13</text></a>
<a href="ticket_14.html"><rect x="467.0" y="348.0" width="76" height="34" rx="7" style="fill:var(--bg)" stroke="currentColor" stroke-width="1.4" stroke-dasharray="5 3"/><text x="505" y="370" text-anchor="middle" font-size="14" fill="currentColor">Билет 14</text></a>
<a href="ticket_17.html"><rect x="17.0" y="428.0" width="76" height="34" rx="7" class="soft-fill" stroke="currentColor" stroke-width="1.4"/><text x="55" y="450" text-anchor="middle" font-size="14" fill="currentColor">Билет 17</text></a>
<a href="ticket_18.html"><rect x="127.0" y="428.0" width="76" height="34" rx="7" class="soft-fill" stroke="currentColor" stroke-width="1.4"/><text x="165" y="450" text-anchor="middle" font-size="14" fill="currentColor">Билет 18</text></a>
<a href="ticket_19.html"><rect x="237.0" y="428.0" width="76" height="34" rx="7" class="soft-fill" stroke="currentColor" stroke-width="1.4"/><text x="275" y="450" text-anchor="middle" font-size="14" fill="currentColor">Билет 19</text></a>
<a href="ticket_20.html"><rect x="577.0" y="428.0" width="76" height="34" rx="7" style="fill:var(--bg)" stroke="currentColor" stroke-width="1.4"/><text x="615" y="450" text-anchor="middle" font-size="14" fill="currentColor">Билет 20</text></a>
<a href="ticket_21.html"><rect x="17.0" y="508.0" width="76" height="34" rx="7" style="fill:var(--bg)" stroke="currentColor" stroke-width="1.4" stroke-dasharray="5 3"/><text x="55" y="530" text-anchor="middle" font-size="14" fill="currentColor">Билет 21</text></a>
<a href="ticket_22.html"><rect x="127.0" y="508.0" width="76" height="34" rx="7" style="fill:var(--bg)" stroke="currentColor" stroke-width="1.4" stroke-dasharray="5 3"/><text x="165" y="530" text-anchor="middle" font-size="14" fill="currentColor">Билет 22</text></a>
<a href="ticket_23.html"><rect x="237.0" y="508.0" width="76" height="34" rx="7" style="fill:var(--bg)" stroke="currentColor" stroke-width="1.4" stroke-dasharray="5 3"/><text x="275" y="530" text-anchor="middle" font-size="14" fill="currentColor">Билет 23</text></a>
</svg>
<figcaption>Граф зависимостей билетов. Связи с базовым модулем (A1–F8) не показаны: они перечислены в начале каждого билета.</figcaption>
</figure>

## Кластеры

| Кластер | Билеты | Покрытие лекциями | О чём |
|---|---|---|---|
| I. Голоморфные функции многих переменных | [1](ticket_01.html), [2](ticket_02.html), [3](ticket_03.html), [4](ticket_04.html), [5](ticket_05.html), [6](ticket_06.html) | хорошее | Формула Коши, степенные ряды, три определения голоморфности, интегрирование форм |
| II. Области голоморфности и биголоморфизмы | [7](ticket_07.html), [8](ticket_08.html) | частичное | Фигура Хартогса, теорема Картана |
| III. Мероморфные и целые функции | [15](ticket_15.html), [16](ticket_16.html) | хорошее | Миттаг-Леффлер, Вейерштрасс, $\operatorname{ctg}z$, $\sin z$ |
| IV. Эллиптические функции | [17](ticket_17.html), [18](ticket_18.html), [19](ticket_19.html), [20](ticket_20.html) | хорошее (кроме 20) | Решётка периодов, $\wp$, уравнение $\wp'^2=4\wp^3-g_2\wp-g_3$, тор |
| V. Алгебраические функции и римановы поверхности | [9](ticket_09.html), [10](ticket_10.html), [11](ticket_11.html), [12](ticket_12.html), [13](ticket_13.html), [14](ticket_14.html) | слабое | Неявная функция, алгебраическая функция, риманова поверхность, род, монодромия |
| VI. Конформные отображения | [21](ticket_21.html), [22](ticket_22.html), [23](ticket_23.html) | нет | $\operatorname{sn}$, Кристоффель–Шварц, модулярная функция, Пикар |

## Таблица: билет → лекции → опора

| Б | Тема | Лекции | Где в конспекте | Опирается на |
|---|---|---|---|---|
| [1](ticket_01.html) | Коши–Риман ⇒ кратная формула Коши | есть | С6 §2.1 | база A2, A3, B4, B6 |
| [2](ticket_02.html) | Степенные ряды от $n$ переменных | есть | С6 §2.2.1, 2.2.3–2.2.4 | база C1 |
| [3](ticket_03.html) | Формула Коши ⇒ ряд; неравенства Коши | есть | С6 §2.2.2 | 1, 2 |
| [4](ticket_04.html) | Ряд ⇒ Коши–Риман | есть | С6 §2.2.5 | 2 |
| [5](ticket_05.html) | Три определения; единственность, максимум, открытость | частично | С6 §2.2.5–2.2.6 | 1, 3, 4 |
| [6](ticket_06.html) | Коши–Пуанкаре; Морера с призмами | частично | С6 §2.1.2 | 1 |
| [7](ticket_07.html) | Области голоморфности; фигура Хартогса | частично | С6 §2.3 | 2, 3, 5, 16 |
| [8](ticket_08.html) | Биголоморфизмы; теорема Картана | частично | С6 §2.4 | 3, 5 |
| [9](ticket_09.html) | Неявное отображение; дискриминант | частично | С6 §2.4.1 | 1, 5 |
| [10](ticket_10.html) | Два определения алгебраической функции | частично | С5 §6.4 | 9 |
| [11](ticket_11.html) | Риманова поверхность ПАФ; нормализация | частично | С5 §6.2 | 10 |
| [12](ticket_12.html) | Род; формула Римана–Гурвица | частично | С5 §6.4.3 | 10, 11 |
| [13](ticket_13.html) | Кривые в $\mathbb C^2$, $\mathbb{CP}^2$; род неособой кривой | нет | — | 9, 12 |
| [14](ticket_14.html) | Монодромия; теорема Абеля | нет | — | 10, 11, 12 |
| [15](ticket_15.html) | Миттаг-Леффлер; $\operatorname{ctg}z$ | есть | С6 §3.1 | база C4, D1–D4 |
| [16](ticket_16.html) | Бесконечные произведения; Вейерштрасс; $\sin z$ | частично | С6 §3.2 | 15 |
| [17](ticket_17.html) | Группа периодов; эллиптические функции | есть | С6 §4.1 | база C2, D4, D5 |
| [18](ticket_18.html) | Построение $\wp$ | есть | С6 §4.2.1 | 15, 17 |
| [19](ticket_19.html) | Уравнение для $\wp$; $e_i$, $g_2$, $g_3$ | есть | С6 §4.2.2 | 17, 18 |
| [20](ticket_20.html) | Тор $\mathbb C/G$ и кубика | частично | С6 §4.2.4 | 12, 13, 19 |
| [21](ticket_21.html) | Эллиптический синус | нет | — | 17, 22 |
| [22](ticket_22.html) | Формула Кристоффеля–Шварца | нет | — | база E1–E4 |
| [23](ticket_23.html) | Модулярная функция; теорема Пикара | нет | — | 22 |

## В каком порядке учить

Логика: сначала то, что хорошо изложено в лекциях и на что опираются другие; потом то, что дано по стандартным источникам. По дням это расписано в [плане](03_plan.html).

1. **База** A–D ([базовый модуль](00_base.html)).
2. **Кластер I:** 1 → 2 → 3 → 4 → 5 → 6.
3. **Кластер III:** 15 → 16.
4. **Кластер II:** 7 → 8 (для 7 нужен 16).
5. **Кластер IV:** 17 → 18 → 19.
6. **База** E–F.
7. **Кластер V:** 9 → 10 → 11 → 12 → 13 → 14.
8. **Билет 20** (замыкает IV и V).
9. **Кластер VI:** 22 → 21 → 23.

::: warn
Если времени не хватает, урезайте **глубину**, а не билеты: по билетам 13, 14, 21–23 выучите хотя бы краткий ответ, формулировки и скелет доказательства. Попасться может любой билет.
:::

## Сквозные темы

- **Формула Коши** — Б1, Б3, Б6, Б7 (интеграл Хартогса), Б15 (метод Коши).
- **Неравенства Коши** — Б3, Б7 (принцип непрерывности), Б8 (Картан).
- **Теорема единственности** — Б5, Б7, Б8, Б10, Б11.
- **Главные части и поправки** — Б15 (суммы), Б16 (произведения), Б18 ($\wp$).
- **Риман–Гурвиц** — Б12, Б13, Б20.
- **Принцип симметрии** — Б21, Б22, Б23.
