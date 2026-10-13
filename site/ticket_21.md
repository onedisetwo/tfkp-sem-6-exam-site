---
title: "Билет 21. Эллиптический синус"
subtitle: "Построение эллиптического синуса sn через отображение полуплоскости на прямоугольник, его свойства; обратная функция — эллиптический интеграл"
lang: ru
---

<script src="site.js"></script>
<noscript><p><a href="index.html">Главная</a> · <a href="00_base.html">База</a> · <a href="01_map.html">Карта</a></p></noscript>

**Формулировка в программе:** Эллиптический синус: построение и его свойства. Функция, обратная к эллиптическому синусу.

> **Покрытие лекциями:** нет в лекциях · **Источник:** стандартное изложение (Лаврентьев–Шабат, гл. II; Гурвиц–Курант) · **Опирается на:** [Билет 22](ticket_22.html), [Билет 17](ticket_17.html), [E2](00_base.html#E2), [E3](00_base.html#E3), [E4](00_base.html#E4), [B1](00_base.html#B1)

::: nolect
**Нет в лекциях, стандартный вариант.** В С6 раздела об эллиптическом синусе нет. ⚠️ В предисловии С6 сказано «из раздела про эллиптические функции остался только синус Якоби», но в самом тексте его нет. Весь билет ниже — стандартное изложение. Обозначения $K$, $K'$, $k$, $\operatorname{sn}$ — общепринятые (Якоби).
:::

## 1. Краткий ответ на 1 минуту

::: short
**Построение.** Фиксируем $0<k<1$. Эллиптический интеграл первого рода
$$w=F(z)=\int_0^z\frac{d\zeta}{\sqrt{(1-\zeta^2)(1-k^2\zeta^2)}}$$
(ветвь корня положительна на $(-1,1)$) — это интеграл Кристоффеля–Шварца с вершинами $\pm1,\pm\frac1k$ и всеми углами $\frac\pi2$. Он конформно отображает верхнюю полуплоскость на прямоугольник с вершинами $\pm K$, $\pm K+iK'$, где
$$K=\int_0^1\frac{dt}{\sqrt{(1-t^2)(1-k^2t^2)}},\qquad K'=\int_1^{1/k}\frac{dt}{\sqrt{(t^2-1)(1-k^2t^2)}} .$$
**Эллиптический синус** $\operatorname{sn}w$ — обратное отображение: прямоугольник $\to$ полуплоскость.

**Свойства.** По принципу симметрии $\operatorname{sn}$ продолжается отражениями через стороны прямоугольника на всю плоскость. Два отражения через параллельные стороны дают сдвиг, поэтому $\operatorname{sn}$ — эллиптическая функция с периодами $4K$ и $2iK'$, порядка 2: нули $0,2K$, простые полюсы $iK'$, $2K+iK'$. Нечётна, $\operatorname{sn}(0)=0$, $\operatorname{sn}'(0)=1$, $\operatorname{sn}K=1$, $\operatorname{sn}(w+2K)=-\operatorname{sn}w$, и
$$\big(\operatorname{sn}'w\big)^2=\big(1-\operatorname{sn}^2w\big)\big(1-k^2\operatorname{sn}^2w\big).$$

**Обратная функция** — эллиптический интеграл $F$, бесконечнозначная аналитическая функция с точками ветвления $\pm1,\pm\frac1k$; все её значения в точке $z$: $w_0+4mK+2niK'$ и $2K-w_0+4mK+2niK'$, $m,n\in\mathbb Z$.
:::

## 2. Необходимые понятия

- [Билет 22](ticket_22.html): формула Кристоффеля–Шварца (отображение полуплоскости на многоугольник)
- [Принцип симметрии](00_base.html#E4) — главный инструмент
- [Теорема Римана](00_base.html#E2) и [соответствие границ](00_base.html#E3)
- [Билет 17](ticket_17.html): эллиптические функции, порядок, теоремы Лиувилля
- [Интеграл по кривой, первообразная](00_base.html#B1)

## 3. Определения, теоремы и доказательства

**Определение.** Для $0<k<1$ (модуль) положим
$$K=K(k)=\int_0^1\frac{dt}{\sqrt{(1-t^2)(1-k^2t^2)}},\qquad K'=\int_1^{1/k}\frac{dt}{\sqrt{(t^2-1)(1-k^2t^2)}} .$$
Оба интеграла сходятся (особенности вида $\lvert t-t_0\rvert^{-1/2}$). Можно показать, что $K'=K(k')$, где $k'=\sqrt{1-k^2}$ — дополнительный модуль.

**Определение.** **Эллиптический интеграл первого рода (в форме Лежандра):**
$$F(z)=\int_0^z\frac{d\zeta}{\sqrt{(1-\zeta^2)(1-k^2\zeta^2)}},\qquad\operatorname{Im}z\ge0,$$
где в верхней полуплоскости $H=\{\operatorname{Im}z>0\}$ выбрана голоморфная ветвь корня, положительная на интервале $(-1,1)$ (в $H$ подкоренное выражение не обращается в нуль, $H$ односвязна).

**Теорема 1.** $F$ конформно отображает $H$ на прямоугольник
$$R=\{-K<\operatorname{Re}w<K,\ 0<\operatorname{Im}w<K'\},$$
причём $F(\pm1)=\pm K$, $F(\pm\frac1k)=\pm K+iK'$, $F(\infty)=iK'$, $F(0)=0$.

<details class="proof"><summary>Доказательство</summary>

::: skeleton
**Скелет.**

1. **$F$ — интеграл Кристоффеля–Шварца** с вершинами $-\frac1k,-1,1,\frac1k$ и углами $\frac\pi2$. Следим за аргументом подынтегральной функции на вещественной оси: на каждом из интервалов он постоянен, и при переходе через вершину поворачивается на $\frac\pi2$ ⇒ граница $H$ идёт по сторонам прямоугольника; длины сторон $2K$ и $K'$.
2. По принципу соответствия границ $F:H\to R$ конформна; $\operatorname{sn}=F^{-1}$.
:::

**Шаг 1. Корректность.** $F$ голоморфна в $H$ (интеграл от голоморфной функции в односвязной области не зависит от пути, [B1](00_base.html#B1)). $F$ непрерывно продолжается на $\mathbb R$: особенности подынтегральной функции в $\pm1,\pm\frac1k$ интегрируемы ($\sim\lvert\zeta\mp1\rvert^{-1/2}$). На бесконечности подынтегральная функция $\sim\frac{\pm1}{k\zeta^2}$, поэтому $F(z)$ имеет конечный предел при $z\to\infty$ в $\overline H$.

**Шаг 2. Образ вещественной оси.** Будем двигать $z$ по $\mathbb R$ слева направо (это положительный обход границы $H$) и следить за аргументом $F'(z)=\big((1-z^2)(1-k^2z^2)\big)^{-1/2}$.

- $z\in(-1,1)$: все множители положительны, $F'>0$, $F(z)$ идёт по вещественной оси от $F(-1)=-K$ до $F(1)=K$.
- $z\in(1,\frac1k)$: при обходе точки $1$ сверху по малой полуокружности аргумент множителя $1-z$ меняется с $0$ на $-\pi$, у корня — на $-\frac\pi2$, у $F'$ — на $+\frac\pi2$. Значит, $F'=i\cdot(\text{положительное})$, и $F$ идёт вертикально вверх: $F(z)=K+i\int_1^z\frac{dt}{\sqrt{(t^2-1)(1-k^2t^2)}}$, до точки $F(\frac1k)=K+iK'$.
- $z\in(\frac1k,+\infty)$: ещё один поворот на $\frac\pi2$, $F'<0$, $F$ идёт влево по горизонтали $\operatorname{Im}w=K'$. Длина пути до $\infty$: $\int_{1/k}^\infty\frac{dt}{\sqrt{(t^2-1)(k^2t^2-1)}}=K$ (замена $t=\frac1{ks}$). Значит, $F(\infty)=iK'$.
- Симметрично ($F$ нечётна: $F(-z)=-F(z)$, а с учётом выбора ветви $F(-\bar z)=-\overline{F(z)}$): $(-\infty,-\frac1k)$ идёт от $iK'$ до $-K+iK'$, а $(-\frac1k,-1)$ — вниз до $-K$.

*Зачем:* это и есть доказательство формулы Кристоффеля–Шварца «в обратную сторону»: аргумент $F'$ постоянен на интервалах, а в вершинах поворачивается на $\pi(1-\alpha_k)=\frac\pi2$.

**Шаг 3. Конформность.** $F$ голоморфна в $H$, непрерывна в $\overline H\cup\{\infty\}$ и взаимно-однозначно отображает границу $\mathbb R\cup\{\infty\}$ на границу прямоугольника $\partial R$ с сохранением ориентации. По теореме о соответствии границ ([E3](00_base.html#E3), теорема 5.13 С5; через дробно-линейную замену переходим от $H$ к кругу) $F$ — конформное отображение $H$ на $R$. ∎

</details>

**Определение.** **Эллиптический синус** (синус Якоби) $\operatorname{sn}w=\operatorname{sn}(w;k)$ — функция, обратная к $F$: $\operatorname{sn}:R\to H$, продолженная на всю плоскость по принципу симметрии.

**Теорема 2 (свойства $\operatorname{sn}$).**

1. $\operatorname{sn}$ — мероморфная функция в $\mathbb C$;
2. $\operatorname{sn}$ — эллиптическая функция с периодами $4K$ и $2iK'$; кроме того, $\operatorname{sn}(w+2K)=-\operatorname{sn}w$;
3. в параллелограмме периодов $[0,4K)\times[0,2K')$ у $\operatorname{sn}$ простые нули $0$, $2K$ и простые полюсы $iK'$, $2K+iK'$; порядок равен 2;
4. $\operatorname{sn}$ нечётна; $\operatorname{sn}0=0$, $\operatorname{sn}'0=1$, $\operatorname{sn}(\pm K)=\pm1$, $\operatorname{sn}(K+iK')=\frac1k$;
5. $\operatorname{sn}$ удовлетворяет дифференциальному уравнению $(\operatorname{sn}')^2=(1-\operatorname{sn}^2)(1-k^2\operatorname{sn}^2)$.

<details class="proof"><summary>Доказательство</summary>

::: skeleton
**Скелет.**

1. **Симметрия:** нижняя сторона $[-K,K]\leftrightarrow[-1,1]$ ⇒ $\operatorname{sn}\bar w=\overline{\operatorname{sn}w}$; боковая сторона $\operatorname{Re}w=K\leftrightarrow[1,\frac1k]$ ⇒ $\operatorname{sn}(2K-\bar w)=\overline{\operatorname{sn}w}$; верхняя сторона $\leftrightarrow$ вещественная ось через $\infty$ ⇒ $\operatorname{sn}(\bar w+2iK')=\overline{\operatorname{sn}w}$.
2. Комбинируя: $\operatorname{sn}(2K-w)=\operatorname{sn}w$, $\operatorname{sn}(w+2iK')=\operatorname{sn}w$; нечётность ⇒ $\operatorname{sn}(w+2K)=-\operatorname{sn}w$ ⇒ периоды $4K$, $2iK'$.
3. Нули и полюсы — из соответствия вершин; уравнение — из $F'(z)=\frac1{\sqrt{(1-z^2)(1-k^2z^2)}}$.
:::

**Шаг 1. Отражение через нижнюю сторону.** Сторона $(-K,K)$ прямоугольника переходит при $\operatorname{sn}$ в интервал $(-1,1)$ вещественной оси. Оба — отрезки прямых. По [принципу симметрии](00_base.html#E4) $\operatorname{sn}$ продолжается на отражённый прямоугольник $\overline R$ (нижний), причём
$$\operatorname{sn}(\bar w)=\overline{\operatorname{sn}(w)} .$$
Получаем конформное отображение прямоугольника $(-K,K)\times(-K',K')$ на $\mathbb C\setminus\big((-\infty,-1]\cup[1,+\infty)\big)$.

**Шаг 2. Отражение через боковую сторону.** Сторона $\operatorname{Re}w=K$ (от $K$ до $K+iK'$) переходит в отрезок $(1,\frac1k)$. Отражение относительно этой стороны: $w\mapsto2K-\bar w$; в плоскости $z$ — отражение относительно $\mathbb R$. Поэтому
$$\operatorname{sn}(2K-\bar w)=\overline{\operatorname{sn}(w)} .$$
Подставим $\bar w$ вместо $w$ и используем шаг 1: $\operatorname{sn}(2K-w)=\overline{\operatorname{sn}(\bar w)}=\operatorname{sn}(w)$.

**Шаг 3. Отражение через верхнюю сторону.** Сторона $\operatorname{Im}w=K'$ переходит в $(\frac1k,+\infty)\cup\{\infty\}\cup(-\infty,-\frac1k)$, это тоже «прямая» (окружность на сфере через $\infty$). Отражение $w\mapsto\bar w+2iK'$, поэтому $\operatorname{sn}(\bar w+2iK')=\overline{\operatorname{sn}(w)}$, и аналогично шагу 2
$$\operatorname{sn}(w+2iK')=\operatorname{sn}(w) .$$

**Шаг 4. Нечётность и период $4K$.** $F(-z)=-F(z)$ (подынтегральная функция чётна), значит $\operatorname{sn}(-w)=-\operatorname{sn}(w)$. Из шага 2: $\operatorname{sn}(w+2K)=\operatorname{sn}(2K-(-w))=\operatorname{sn}(-w)=-\operatorname{sn}(w)$, отсюда $\operatorname{sn}(w+4K)=\operatorname{sn}(w)$.

*Зачем три отражения:* композиция двух отражений относительно параллельных прямых — сдвиг на удвоенное расстояние между ними. Отражения через стороны $\operatorname{Re}w=\pm K$ дают сдвиг на $4K$, через $\operatorname{Im}w=0$ и $\operatorname{Im}w=K'$ — на $2iK'$.

**Шаг 5. Мероморфность во всей плоскости.** Отражая $R$ через стороны снова и снова, замощаем плоскость прямоугольниками размера $2K\times K'$. Функциональные уравнения шагов 1–4 задают $\operatorname{sn}$ согласованно на каждом из них, а на каждой общей стороне продолжение голоморфно по принципу симметрии. Значение $\infty$ функция принимает только в образах точки $iK'$; около $iK'$ она однолистна, поэтому там простой полюс. Итак, $\operatorname{sn}$ мероморфна в $\mathbb C$ и по шагам 3–4 эллиптическая.

**Шаг 6. Нули, полюсы, порядок.** В $\overline R$ $\operatorname{sn}=0$ только при $w=0$, $\operatorname{sn}=\infty$ только при $w=iK'$. По периодичности в параллелограмме $[0,4K)\times[0,2K')$: нули $0$ и $2K$ ($\operatorname{sn}2K=-\operatorname{sn}0=0$), полюсы $iK'$ и $2K+iK'$. Порядок 2, как и должно быть (порядок 1 невозможен, [билет 17](ticket_17.html)). Проверка теоремы 4.6: $0+2K\equiv iK'+2K+iK'=2K+2iK'\pmod{4K\mathbb Z+2iK'\mathbb Z}$ ✓.

**Шаг 7. Значения и производная.** $\operatorname{sn}K=1$, $\operatorname{sn}(K+iK')=\frac1k$ — из соответствия вершин. $F'(0)=1$, поэтому $\operatorname{sn}'(0)=1$. Производная обратной функции: $\operatorname{sn}'(w)=\dfrac1{F'(\operatorname{sn}w)}=\sqrt{(1-\operatorname{sn}^2w)(1-k^2\operatorname{sn}^2w)}$, откуда дифференциальное уравнение. ∎

</details>

**Теорема 3 (обратная функция).** Функция $F$, продолженная по всевозможным путям в $\overline{\mathbb C}\setminus\{\pm1,\pm\frac1k\}$, — полная аналитическая функция, обратная к $\operatorname{sn}$. Если $w_0$ — одно её значение в точке $z$, то все значения — это
$$w_0+4mK+2niK'\quad\text{и}\quad2K-w_0+4mK+2niK',\qquad m,n\in\mathbb Z .$$
Точки $\pm1,\pm\frac1k$ — точки ветвления второго порядка.

<details class="proof"><summary>Доказательство</summary>

**Шаг 1.** Локально обратная к $\operatorname{sn}$ — это интеграл $\int\frac{d\zeta}{\sqrt{(1-\zeta^2)(1-k^2\zeta^2)}}$ с какой-то ветвью корня и константой. Значит, все ветви полной аналитической функции $\operatorname{sn}^{-1}$ — продолжения $F$.

**Шаг 2.** Значения $\operatorname{sn}^{-1}(z)$ — все решения $\operatorname{sn}w=z$. Если $w_0$ — одно, то $w_0$ и $2K-w_0$ (шаг 2 теоремы 2) — два решения в параллелограмме периодов (порядок 2, других нет, [билет 17](ticket_17.html), теорема 4.5), а остальные отличаются на периоды $4mK+2niK'$.

**Шаг 3.** Точки ветвления: где два решения $w_0$ и $2K-w_0$ совпадают по модулю решётки, то есть $\operatorname{sn}'=0$: $z=\pm1,\pm\frac1k$. Обход такой точки переводит $w_0$ в $2K-w_0$ (с точностью до периода), обход двух — сдвигает на период. ∎

</details>

## 4. Интуиция и картинки

::: idea
**Аналогия с обычным синусом.** $\arcsin z=\int_0^z\frac{d\zeta}{\sqrt{1-\zeta^2}}$ — интеграл Кристоффеля–Шварца с двумя вершинами $\pm1$: он отображает $H$ на полуполосу $\{\lvert\operatorname{Re}w\rvert<\frac\pi2,\ \operatorname{Im}w>0\}$. Отражения через две вертикальные стороны дают период $2\pi$. Это «вырожденный прямоугольник» с $K'=\infty$; при $k\to0$ получаем $K\to\frac\pi2$ и $\operatorname{sn}(w;0)=\sin w$. Добавив вторую пару вершин $\pm\frac1k$, мы закрываем полуполосу сверху и получаем второй период.

**Связь с $\wp$ (стандартно).** $\operatorname{sn}^2$ — чётная эллиптическая функция с решёткой $L=2K\mathbb Z\oplus2iK'\mathbb Z$, двойным нулём в $0$ и двойным полюсом в $iK'$. Сравнивая с $\wp_L$ (теорема 4.3 [билета 17](ticket_17.html)), получаем
$$\frac1{\operatorname{sn}^2w}=\wp_L(w)-\wp_L(iK'),\qquad\wp_L(iK')=-\frac{1+k^2}3 .$$
:::

<figure>
<svg viewBox="0 0 480 200" width="480" role="img" aria-label="Верхняя полуплоскость и прямоугольник для эллиптического синуса">
  <defs><marker id="ar21" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker></defs>
  <rect x="10" y="40" width="200" height="110" class="soft-fill"/>
  <line x1="10" y1="150" x2="210" y2="150" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="30" cy="150" r="3.5" fill="currentColor"/><text x="14" y="168" font-size="11">−1/k</text>
  <circle cx="75" cy="150" r="3.5" fill="currentColor"/><text x="66" y="168" font-size="11">−1</text>
  <circle cx="110" cy="150" r="3" fill="currentColor"/><text x="107" y="168" font-size="11">0</text>
  <circle cx="145" cy="150" r="3.5" fill="currentColor"/><text x="141" y="168" font-size="11">1</text>
  <circle cx="190" cy="150" r="3.5" fill="currentColor"/><text x="180" y="168" font-size="11">1/k</text>
  <text x="80" y="90" font-size="14">Im z &gt; 0</text>
  <text x="80" y="192" font-size="12">плоскость z</text>
  <line x1="222" y1="95" x2="262" y2="95" stroke="currentColor" stroke-width="1.5" marker-end="url(#ar21)"/>
  <text x="218" y="84" font-size="11">w = F(z)</text>
  <text x="222" y="115" font-size="11">← z = sn w</text>
  <rect x="290" y="50" width="160" height="100" class="soft-fill" stroke="currentColor" stroke-width="1.5"/>
  <line x1="290" y1="150" x2="450" y2="150" class="accent" stroke-width="2.5"/>
  <circle cx="290" cy="150" r="3.5" fill="currentColor"/><text x="276" y="168" font-size="11">−K</text>
  <circle cx="450" cy="150" r="3.5" fill="currentColor"/><text x="446" y="168" font-size="11">K</text>
  <circle cx="370" cy="150" r="3" fill="currentColor"/><text x="366" y="168" font-size="11">0</text>
  <circle cx="450" cy="50" r="3.5" fill="currentColor"/><text x="436" y="42" font-size="11">K + iK′</text>
  <circle cx="290" cy="50" r="3.5" fill="currentColor"/><text x="262" y="42" font-size="11">−K + iK′</text>
  <circle cx="370" cy="50" r="4" class="accent" stroke-width="2"/><text x="362" y="42" font-size="11" class="accent-fill">iK′</text>
  <text x="338" y="192" font-size="12">плоскость w</text>
</svg>

<figcaption>Эллиптический интеграл F переводит верхнюю полуплоскость в прямоугольник: −1/k ↦ −K + iK′, −1 ↦ −K, 1 ↦ K, 1/k ↦ K + iK′, ∞ ↦ iK′. Отрезок [−1, 1] переходит в нижнюю сторону (выделена). Эллиптический синус — обратное отображение.</figcaption>
</figure>

## 5. Пример / типовая задача с решением

::: example
**Задача 1.** Найдите $\operatorname{sn}(w+2iK')$, $\operatorname{sn}(w+4K)$, $\operatorname{sn}(K-w)$ через $\operatorname{sn}w$.

**Решение.** $\operatorname{sn}(w+2iK')=\operatorname{sn}w$, $\operatorname{sn}(w+4K)=\operatorname{sn}w$ (периоды). $\operatorname{sn}(K-w)$: из $\operatorname{sn}(2K-u)=\operatorname{sn}u$ при $u=K+w$: $\operatorname{sn}(K-w)=\operatorname{sn}(K+w)$, то есть $\operatorname{sn}$ симметрична относительно $K$ (как $\sin$ относительно $\frac\pi2$).

**Задача 2.** Найдите первые члены ряда Тейлора $\operatorname{sn}$ в нуле.

**Решение.** $\operatorname{sn}$ нечётна, $\operatorname{sn}'(0)=1$. Из уравнения $(\operatorname{sn}')^2=1-(1+k^2)\operatorname{sn}^2+k^2\operatorname{sn}^4$ дифференцированием: $\operatorname{sn}''=-(1+k^2)\operatorname{sn}+2k^2\operatorname{sn}^3$, поэтому $\operatorname{sn}'''(0)=-(1+k^2)$ и
$$\operatorname{sn}w=w-\frac{1+k^2}6w^3+O(w^5).$$
При $k=0$ получаем $\sin w=w-\frac{w^3}6+\dots$ ✓.

**Задача 3.** Найдите вычет $\operatorname{sn}$ в полюсе $iK'$.

**Решение.** На луче $z>\frac1k$ подынтегральная функция отрицательна (шаг 2 теоремы 1) и равна $-\frac1{kz^2}\big(1+O(z^{-2})\big)$. Поэтому при больших $z$
$$F(z)=iK'-\int_z^{\infty}F'(\zeta)\,d\zeta=iK'+\frac1{kz}+O(z^{-3}),$$
и по аналитичности эта формула верна около $z=\infty$. Значит, $w-iK'\approx\frac1{kz}$, то есть $\operatorname{sn}w=z\approx\dfrac1{k(w-iK')}$. Вычет $\operatorname{res}_{iK'}\operatorname{sn}=\frac1k$.

**Задача 4.** При каком $k$ прямоугольник $R$ — квадрат?

**Решение.** Стороны $R$ равны $2K$ и $K'$, нужно $K'=2K$. При росте $k$ от $0$ до $1$ интеграл $K(k)$ непрерывно возрастает от $\frac\pi2$ до $\infty$, а $K'(k)=K(\sqrt{1-k^2})$ убывает от $\infty$ до $\frac\pi2$. Отношение $\frac{K'}{K}$ непрерывно и строго убывает от $\infty$ до $0$, поэтому нужное $k$ существует и единственно. (При $k=\frac1{\sqrt2}$ имеем $K'=K$, прямоугольник $2:1$.)
:::

## 6. Частые дополнительные вопросы экзаменатора

- **Почему $\operatorname{sn}$ двоякопериодична?** Композиция двух отражений через параллельные стороны прямоугольника — сдвиг; по принципу симметрии каждое отражение в $w$ соответствует отражению относительно $\mathbb R$ в $z$, а два таких отражения дают тождество.
- **Какие у $\operatorname{sn}$ периоды?** $4K$ и $2iK'$. ($2K$ — «антипериод»: $\operatorname{sn}(w+2K)=-\operatorname{sn}w$.)
- **Какой порядок?** 2: нули $0,2K$, полюсы $iK'$, $2K+iK'$ в параллелограмме периодов.
- **Можно ли так же получить эллиптическую функцию из треугольника?** Да, если отражения замощают плоскость без наложений: углы треугольника должны быть $\big(\frac\pi3,\frac\pi3,\frac\pi3\big)$, $\big(\frac\pi2,\frac\pi4,\frac\pi4\big)$ или $\big(\frac\pi2,\frac\pi3,\frac\pi6\big)$. Для произвольного треугольника отражения «налезают» друг на друга и однозначной функции не получается.
- **Что будет при $k\to0$?** $K\to\frac\pi2$, $K'\to\infty$, $\operatorname{sn}w\to\sin w$.
- **Что такое $\operatorname{cn}$ и $\operatorname{dn}$?** $\operatorname{cn}=\sqrt{1-\operatorname{sn}^2}$, $\operatorname{dn}=\sqrt{1-k^2\operatorname{sn}^2}$ (с нужными ветвями), $\operatorname{sn}'=\operatorname{cn}\operatorname{dn}$.
- **Риманова поверхность обратной функции?** Над сферой с точками ветвления $\pm1,\pm\frac1k$ корень $\sqrt{(1-z^2)(1-k^2z^2)}$ задаёт тор ([билет 20](ticket_20.html)); $F$ — интеграл по этому тору, а $\operatorname{sn}$ его униформизует.

## 7. Типичные ошибки и ловушки

::: warn
- Считать период равным $2K$: на самом деле $\operatorname{sn}(w+2K)=-\operatorname{sn}w$, период $4K$.
- Перепутать $K'$ с производной $K$: штрих — это «дополнительный» интеграл, $K'(k)=K(\sqrt{1-k^2})$.
- Забыть, что для принципа симметрии нужен образ стороны — отрезок прямой: верхняя сторона переходит в вещественную ось **через бесконечность**, это тоже «прямая» на сфере.
- Сказать «эллиптический синус есть в лекциях»: в С6 его нет (⚠️ только упоминание в предисловии).
- Путать модуль $k$ с номером и забыть ограничение $0<k<1$.
:::

## 8. Связи с другими билетами

- [Билет 22](ticket_22.html): $F$ — интеграл Кристоффеля–Шварца для прямоугольника.
- [Билет 17](ticket_17.html): $\operatorname{sn}$ — эллиптическая функция порядка 2.
- [Билет 18](ticket_18.html), [19](ticket_19.html): $\operatorname{sn}^{-2}=\wp-\mathrm{const}$; уравнение для $\operatorname{sn}$ — аналог уравнения для $\wp$.
- [Билет 20](ticket_20.html): риманова поверхность $\sqrt{(1-z^2)(1-k^2z^2)}$ — тор.
- [Билет 23](ticket_23.html): та же техника «построить отображение на многоугольник и отражать», но для кругового треугольника с нулевыми углами.

## 9. Самопроверка

::: quiz
1. Как строится эллиптический синус?

    <details><summary>Ответ</summary>

    $F(z)=\int_0^z\frac{d\zeta}{\sqrt{(1-\zeta^2)(1-k^2\zeta^2)}}$ конформно отображает верхнюю полуплоскость на прямоугольник $(-K,K)\times(0,K')$; $\operatorname{sn}=F^{-1}$, продолженная на $\mathbb C$ по принципу симметрии.

    </details>

2. Откуда берутся периоды $4K$ и $2iK'$?

    <details><summary>Ответ</summary>

    Отражения через стороны $\operatorname{Re}w=\pm K$ — это отражения $z\mapsto\bar z$; их композиция — сдвиг на $4K$, и $\operatorname{sn}$ при нём не меняется. Аналогично через $\operatorname{Im}w=0$ и $\operatorname{Im}w=K'$ — сдвиг на $2iK'$.

    </details>

3. Где нули и полюсы $\operatorname{sn}$ и какой порядок?

    <details><summary>Ответ</summary>

    Нули $0,2K$, простые полюсы $iK'$, $2K+iK'$ (по модулю $4K\mathbb Z+2iK'\mathbb Z$); порядок 2.

    </details>

4. Какое дифференциальное уравнение для $\operatorname{sn}$ и почему?

    <details><summary>Ответ</summary>

    $(\operatorname{sn}')^2=(1-\operatorname{sn}^2)(1-k^2\operatorname{sn}^2)$, так как $\operatorname{sn}'=1/F'(\operatorname{sn})$ и $F'(z)=((1-z^2)(1-k^2z^2))^{-1/2}$.

    </details>

5. Как устроена функция, обратная к $\operatorname{sn}$?

    <details><summary>Ответ</summary>

    Это эллиптический интеграл $F$, продолженный по всем путям в $\overline{\mathbb C}\setminus\{\pm1,\pm\frac1k\}$. Все значения: $w_0$ и $2K-w_0$ плюс $4mK+2niK'$; точки $\pm1,\pm\frac1k$ — точки ветвления второго порядка.

    </details>

6. Дайте определения $K$ и $K'$. Почему интегралы сходятся? Куда $F$ переводит точки $\pm1$, $\pm\frac1k$, $\infty$?

    <details><summary>Ответ</summary>

    $$K=\int_0^1\frac{dt}{\sqrt{(1-t^2)(1-k^2t^2)}},\qquad K'=\int_1^{1/k}\frac{dt}{\sqrt{(t^2-1)(1-k^2t^2)}}.$$
    Особенности на концах вида $\lvert t-t_0\rvert^{-1/2}$ интегрируемы. $F(\pm1)=\pm K$, $F(\pm\frac1k)=\pm K+iK'$, $F(\infty)=iK'$. Стороны прямоугольника $R$: горизонтальная $2K$, вертикальная $K'$.

    </details>

7. Почему на интервале $(1,\frac1k)$ функция $F$ идёт вертикально вверх, а на $(\frac1k,+\infty)$ — влево?

    <details><summary>Ответ</summary>

    При обходе точки $1$ сверху по малой полуокружности аргумент множителя $1-z$ меняется на $-\pi$, у корня — на $-\frac\pi2$, у $F'$ — на $+\frac\pi2$: $F'=i\cdot(\text{положительное})$. В точке $\frac1k$ происходит ещё один такой поворот, и $F'<0$. Так проявляется общий факт ([билет 22](ticket_22.html)): в вершине с углом $\pi\alpha_k$ направление поворачивается на $\pi(1-\alpha_k)=\frac\pi2$.

    </details>

8. Найдите ряд Тейлора $\operatorname{sn}$ в нуле до $w^3$. Что получается при $k=0$?

    <details><summary>Ответ</summary>

    Дифференцируя уравнение $(\operatorname{sn}')^2=(1-\operatorname{sn}^2)(1-k^2\operatorname{sn}^2)$, получаем
    $$\operatorname{sn}''=-(1+k^2)\operatorname{sn}+2k^2\operatorname{sn}^3,$$
    откуда $\operatorname{sn}'''(0)=-(1+k^2)$ и
    $$\operatorname{sn}w=w-\frac{1+k^2}6w^3+O(w^5).$$
    При $k=0$ это $\sin w=w-\frac{w^3}6+\dots$

    </details>

9. Найдите вычеты $\operatorname{sn}$ в полюсах $iK'$ и $2K+iK'$. Согласуется ли это со следствием 4.3 [билета 17](ticket_17.html)?

    <details><summary>Ответ</summary>

    Около $z=\infty$ имеем $F(z)=iK'+\frac1{kz}+O(z^{-3})$, поэтому $\operatorname{sn}w\approx\frac1{k(w-iK')}$, вычет $\frac1k$. Из $\operatorname{sn}(w+2K)=-\operatorname{sn}w$ вычет в $2K+iK'$ равен $-\frac1k$. Сумма вычетов в параллелограмме периодов $\frac1k-\frac1k=0$, как и требует следствие 4.3.

    </details>

10. Найдите в параллелограмме $[0,4K)\times[0,2K')$ все решения уравнений $\operatorname{sn}w=1$ и $\operatorname{sn}w=-\frac1k$.

    <details><summary>Ответ</summary>

    Решения — $w_0$ и $2K-w_0$ по модулю $4K\mathbb Z+2iK'\mathbb Z$. Для $\operatorname{sn}w=1$: $w_0=K$, $2K-K=K$ — одна точка, двойной корень. Для $-\frac1k$: $w_0=-K+iK'\equiv3K+iK'$, а $2K-w_0=3K-iK'\equiv3K+iK'$ — тоже двойной корень. Поэтому $\pm1,\pm\frac1k$ — точки ветвления обратной функции (там $\operatorname{sn}'=0$).

    </details>
:::
