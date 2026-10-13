---
title: "Билет 18. Построение ℘-функции Вейерштрасса"
subtitle: "Функция ζ Вейерштрасса, сходимость ряда по решётке, ℘ = −ζ′, периодичность, чётность, порядок 2, полупериоды и числа e₁, e₂, e₃"
lang: ru
---

<script src="site.js"></script>
<noscript><p><a href="index.html">Главная</a> · <a href="00_base.html">База</a> · <a href="01_map.html">Карта</a></p></noscript>

**Формулировка в программе:** Построение «пе» ($\wp$)-функции Вейерштрасса.

> **Покрытие лекциями:** полностью · **Источник:** С6 §4.2.1, формулы (13)–(19), утверждения 4.7, 4.8 · **Опирается на:** [Билет 15](ticket_15.html), [Билет 17](ticket_17.html), [C4](00_base.html#C4), [D1](00_base.html#D1)

## 1. Краткий ответ на 1 минуту

::: short
**Цель.** Непостоянных эллиптических функций порядка 0 и 1 нет ([билет 17](ticket_17.html)). Построим функцию порядка 2 с двукратными полюсами в точках решётки $G=\omega_1\mathbb Z\oplus\omega_2\mathbb Z$.

**Шаг 1: $\zeta$-функция** (ряд Миттаг-Леффлера с простыми полюсами в $G$):
$$\zeta(z):=\frac1z+\sum_{\omega\in G}{}'\Big(\frac1{z-\omega}+\frac1\omega+\frac z{\omega^2}\Big),$$
$\sum'$ — по всем $\omega\in G$, $\omega\ne0$. Сходится, потому что слагаемое $=\frac{z^2}{\omega^2(z-\omega)}=O(\lvert\omega\rvert^{-3})$, а на границе $n$-го параллелограмма $\Pi_n$ лежит $8n$ точек решётки на расстоянии $\ge Cn$: $\sum_n\frac{8n}{n^3}<\infty$.

**Шаг 2: $\wp:=-\zeta'$:**
$$\wp(z)=\frac1{z^2}+\sum_{\omega\in G}{}'\Big(\frac1{(z-\omega)^2}-\frac1{\omega^2}\Big),\qquad\wp'(z)=-2\sum_{\omega\in G}\frac1{(z-\omega)^3}.$$
$\wp'$ очевидно периодична (сумма по всей решётке); значит $\wp(z+\omega_j)-\wp(z)=c_j$; $\wp$ чётна, подставив $z=-\frac{\omega_j}2$, получаем $c_j=0$. Итак, $\wp$ — эллиптическая функция **порядка 2**, чётная, полюсы только в $G$.

**Свойства:** $\wp(z)=\wp(w)\iff z\equiv\pm w\pmod G$; $\wp'=0$ ровно в полупериодах $\frac{\omega_1}2,\frac{\omega_2}2,\frac{\omega_1+\omega_2}2$; значения $e_i=\wp(z_i)$ в них попарно различны.
:::

## 2. Необходимые понятия

- [Билет 17](ticket_17.html): решётка $G$, параллелограмм $\Pi$, порядок, теоремы 4.3–4.6
- [Билет 15](ticket_15.html): сходимость ряда мероморфных функций, поправочные многочлены
- [Ряд Лорана](00_base.html#D1), [полюсы и порядок](00_base.html#D3)
- [Теорема Вейерштрасса о почленном дифференцировании](00_base.html#C4)

## 3. Определения, теоремы и доказательства

**Обозначения (С6 §4.2).** $G=\omega_1\mathbb Z\oplus\omega_2\mathbb Z$ — группа периодов; $\sum'$ — суммирование по всем $\omega\in G$, кроме нуля (в С6 для целых индексов: «по всем целым индексам, кроме нуля»; здесь индекс — точка решётки).

**Определение (С6, (13)).**
$$\zeta(z):=\frac1z+\sum_{\omega\in G}{}'\Big(\frac1{z-\omega}+\frac1\omega+\frac z{\omega^2}\Big).$$

**Утверждение (корректность).** Ряд (13) сходится как ряд мероморфных функций (в смысле [билета 15](ticket_15.html)): на каждом компакте после выбрасывания конечного числа членов сходится равномерно (и абсолютно). Поэтому $\zeta$ — мероморфная функция с простыми полюсами в точках $G$ и вычетами $1$.

<details class="proof"><summary>Доказательство</summary>

::: skeleton
**Скелет.**

1. **Оценка слагаемого:** $\frac1{z-\omega}+\frac1\omega+\frac z{\omega^2}=\frac{z^2}{\omega^2(z-\omega)}$, по модулю $\le\frac{\lvert z\rvert^2}{\lvert\omega\rvert^2(\lvert\omega\rvert-\lvert z\rvert)}$.
2. **Группировка по $\partial\Pi_n$:** на $\partial\Pi_n$ не больше $8n$ точек решётки, каждая на расстоянии $\ge Cn$ от нуля ⇒ сумма по $\partial\Pi_n$ $\lesssim\frac{8n\lvert z\rvert^2}{C^3n^3}\sim\frac M{n^2}$ ⇒ ряд сходится равномерно на компактах ⇒ $\zeta$ мероморфна.
:::

**Почему именно так (мотивация).** Хочется взять $\sum_{\omega\in G}\frac1{(z-\omega)^2}$ — сумма «полюсов второго порядка во всех узлах», очевидно периодичная. Но этот ряд **не сходится абсолютно**: $\sum'\frac1{\lvert\omega\rvert^2}=\infty$ (на $\partial\Pi_n$ лежит $8n$ точек с $\lvert\omega\rvert\sim n$, получаем $\sum\frac{8n}{n^2}=\infty$). Поэтому, как в теореме Миттаг-Леффлера, вычитаем поправки: для $\zeta$ — многочлен $-\frac1\omega-\frac z{\omega^2}$ (отрезок ряда $\frac1{z-\omega}$ в нуле), для $\wp$ — константу $\frac1{\omega^2}$.

**Шаг 1. Оценка слагаемого (С6, (14)).**

$$\frac1{z-\omega}+\frac1\omega+\frac z{\omega^2}=\frac{\omega^2+\omega(z-\omega)+z(z-\omega)}{\omega^2(z-\omega)}=\frac{z^2}{\omega^2(z-\omega)} .$$
При $\lvert\omega\rvert>\lvert z\rvert$:
$$\Big\lvert\frac1{z-\omega}+\frac1\omega+\frac z{\omega^2}\Big\rvert\le\frac{\lvert z\rvert^2}{\lvert\omega\rvert^2\big(\lvert\omega\rvert-\lvert z\rvert\big)} .$$

*Зачем:* поправки сделали слагаемое порядка $\lvert\omega\rvert^{-3}$ вместо $\lvert\omega\rvert^{-1}$.

**Шаг 2. Группировка по параллелограммам (С6, (15)).**

Пусть $\Pi_n$ — параллелограмм с вершинами $n(\pm\omega_1\pm\omega_2)$. Это «раздувающиеся компакты»: каждая точка решётки, кроме нуля, лежит ровно на одной границе $\partial\Pi_n$.

- На $\partial\Pi_n$ лежит ровно $8n$ точек решётки ($\omega=k\omega_1+l\omega_2$ с $\max(\lvert k\rvert,\lvert l\rvert)=n$).
- Пусть $C>0$ — расстояние от нуля до $\partial\Pi_1$. Тогда расстояние от нуля до $\partial\Pi_n$ равно $Cn$, и для $\omega\in\partial\Pi_n$ имеем $\lvert\omega\rvert\ge Cn$.

Для фиксированного $z$ и $n>\lvert z\rvert/C$ сумма по $n$-й группе
$$S_n=\sum_{\omega\in\partial\Pi_n}\frac{\lvert z\rvert^2}{\lvert\omega\rvert^2\big(\lvert\omega\rvert-\lvert z\rvert\big)}\le\frac{8n\cdot\lvert z\rvert^2}{C^2n^2\big(Cn-\lvert z\rvert\big)}\sim\frac M{n^2} .$$
Ряд $\sum\frac1{n^2}$ сходится. Оценка равномерна по $\lvert z\rvert\le R$ (при $n\ge2R/C$ имеем $Cn-\lvert z\rvert\ge Cn/2$, $S_n\le\frac{16R^2}{C^3n^2}$). Значит, хвост ряда (13) без конечного числа слагаемых с полюсами в круге $\lvert z\rvert\le R$ сходится равномерно и абсолютно. Это и есть сходимость как ряда мероморфных функций ([билет 15](ticket_15.html)).

*Зачем абсолютная сходимость:* дальше мы переставляем слагаемые (заменяем $\omega$ на $-\omega$, сдвигаем $z$ на период), и это законно только для абсолютно сходящихся рядов.

**Вывод.** $\zeta$ мероморфна в $\mathbb C$, её полюсы — точки $G$, все простые с вычетом $1$. Кроме того, $\zeta$ **нечётна**: замена $\omega\to-\omega$ переставляет слагаемые, $\zeta(-z)=-\zeta(z)$.

</details>

**Определение (С6, (16)).**
$$\wp(z)=-\zeta'(z)=\frac1{z^2}+\sum_{\omega\in G}{}'\Big(\frac1{(z-\omega)^2}-\frac1{\omega^2}\Big).$$
Построенная функция $\wp$ называется **функцией Вейерштрасса**.

**Формула (17).**
$$\wp'(z)=-2\sum_{\omega\in G}\frac1{(z-\omega)^3}\quad(\text{сумма по всем }\omega\in G,\text{ включая }0).$$

**Теорема (свойства $\wp$, С6 §4.2.1).**

1. $\wp$ — эллиптическая функция с группой периодов $G$;
2. $\wp$ чётна: $\wp(-z)=\wp(z)$; $\wp'$ нечётна;
3. полюсы $\wp$ — ровно точки $G$, все кратности 2; значит, $\wp$ — функция **порядка 2**;
4. в каждом параллелограмме периодов уравнение $\wp(z)=c$ имеет ровно две $c$-точки $z_1,z_2$ (с учётом кратности), и $z_1+z_2\equiv0\pmod G$.

<details class="proof"><summary>Доказательство</summary>

::: skeleton
**Скелет.**

1. **$\wp=-\zeta'$**, почленное дифференцирование законно; $\wp'=-2\sum_G(z-\omega)^{-3}$ — периодична (сдвиг $z$ на период переставляет слагаемые).
2. **Периодичность $\wp$:** $(\wp(z+\omega_j)-\wp(z))'=0$ ⇒ $=c_j$; $\wp$ чётна; при $z=-\frac{\omega_j}2$: $c_j=\wp(\frac{\omega_j}2)-\wp(-\frac{\omega_j}2)=0$.
3. **Порядок 2** (полюс только в $0$, двукратный) ⇒ две $c$-точки с суммой $\equiv0$.
:::

**Шаг 3. Функции $\wp$ и $\wp'$ (С6, (16)–(17)).**

Ряд мероморфных функций, сходящийся равномерно на компактах (без полюсов), можно дифференцировать почленно ([C4](00_base.html#C4)). Получаем
$$\wp(z)=-\zeta'(z)=\frac1{z^2}+\sum{}'\Big(\frac1{(z-\omega)^2}-\frac1{\omega^2}\Big),\qquad\wp'(z)=-\frac2{z^3}-2\sum{}'\frac1{(z-\omega)^3}=-2\sum_{\omega\in G}\frac1{(z-\omega)^3} .$$
Из нечётности $\zeta$: $\wp$ чётна, $\wp'$ нечётна.

**Шаг 4. Периодичность.**

**$\wp'$ периодична.** Ряд $\sum_{\omega\in G}(z-\omega)^{-3}$ сходится абсолютно (слагаемые $O(\lvert\omega\rvert^{-3})$). При замене $z\to z+\omega_j$ слагаемое с $\omega$ переходит в слагаемое с $\omega-\omega_j$, то есть сумма та же, только переставленная. Значит, $\wp'(z+\omega_j)=\wp'(z)$.

**$\wp$ периодична.** Функция $\wp(z+\omega_j)-\wp(z)$ имеет нулевую производную, значит постоянна: $\wp(z+\omega_j)-\wp(z)=c_j$. Подставим $z=-\frac{\omega_j}2$ (это не полюс: $\frac{\omega_j}2\notin G$):
$$c_j=\wp\Big(\frac{\omega_j}2\Big)-\wp\Big(-\frac{\omega_j}2\Big)=0$$
по чётности. Итак, $\wp$ двоякопериодична. ∎

*Зачем такой обходной путь:* для самого ряда $\wp$ «сдвинуть индекс» нельзя: ряд из $\frac1{(z-\omega)^2}$ без поправок расходится, а поправки $\frac1{\omega^2}$ при сдвиге не переставляются. Производная $\wp'$ поправок не требует.

::: warn
⚠️ $\zeta$ **не** эллиптическая (у неё один простой полюс в $\Pi$ с вычетом $1$, что противоречит следствию 4.4 [билета 17](ticket_17.html)). Стандартно (нет в лекциях): $\zeta(z+\omega_j)=\zeta(z)+\eta_j$ — «квазипериодичность», $\eta_j$ — константы.
:::

**Шаг 5. Порядок 2 и $c$-точки.**

В $\Pi$ единственный полюс $\wp$ — точка $0$, кратности 2 (главная часть $\frac1{z^2}$). Значит, порядок $\wp$ равен 2. Вычет в нуле равен $0$, как и требует следствие 4.3.

По теореме 4.5 уравнение $\wp(z)=c$ имеет в $\Pi$ ровно две $c$-точки $z_1,z_2$ (с учётом кратности). По теореме 4.6, применённой к $\wp-c$ (у неё те же полюсы, $0$ и $0$): $z_1+z_2\equiv0+0\equiv0\pmod G$.

</details>

**Утверждение 4.7.** Равенство $\wp(z)=\wp(w)$ выполняется тогда и только тогда, когда $z\equiv w\pmod G$ или $z\equiv-w\pmod G$.

<details class="proof"><summary>Доказательство</summary>

Пусть $\wp(z)=\wp(w)=c$. Точка $z$ — одна $c$-точка, а вторая — $-z$ (по чётности $\wp(-z)=c$). Других $c$-точек по модулю $G$ нет, поэтому $w\equiv z$ или $w\equiv-z$. Обратно: если $w\equiv z$, равенство верно по периодичности; если $w\equiv-z$, то по периодичности и чётности. ∎

(Аккуратность: если $z\equiv-z$, то $z$ — двойная $c$-точка и других нет; утверждение верно и в этом случае.)

</details>

**Обозначения (С6, (18)–(19)).** Полупериоды и критические значения:
$$z_0\equiv0,\quad z_1\equiv\tfrac12\omega_1,\quad z_2\equiv\tfrac12\omega_2,\quad z_3\equiv\tfrac12(\omega_1+\omega_2);\qquad e_i:=\wp(z_i),\ i=1,2,3 .$$
$\wp(z_0)=\infty$.

**Утверждение 4.8.** Значения $e_i$ попарно различны.

<details class="proof"><summary>Доказательство</summary>

**Нули $\wp'$.** Если $z_i$ — полупериод, то $-z_i\equiv z_i$. Так как $\wp'$ нечётна и периодична, $\wp'(z_i)=-\wp'(-z_i)=-\wp'(z_i)$, то есть $\wp'(z_i)=0$. Функция $\wp'$ имеет порядок 3 (один полюс кратности 3), поэтому ровно 3 нуля в $\Pi$ — это $z_1,z_2,z_3$, и все они простые.

**$e_i$ различны.** *Первое доказательство (С6):* по утверждению 4.7 $\wp(z_i)=\wp(z_j)$ означало бы $z_i\equiv\pm z_j$, а различные полупериоды несравнимы (чтобы стали сравнимы, их нужно удвоить).

*Второе доказательство (С6):* если, например, $e_1=e_3$, то функция $\wp-e_1$ с одним двукратным полюсом в $\Pi$ имела бы двукратные нули в $z_1$ и $z_3$ (там $\wp'=0$), то есть 4 нуля — больше порядка. Противоречие. ∎

::: warn
⚠️ В С6 во втором доказательстве написано «2 двукратных нуля в точках $z_1$ и $z_2$», хотя рассматривается $e_1=e_3$. Должно быть $z_1$ и $z_3$.
:::

</details>

**Следствие (С6).** Уравнение $\wp(z)=c$ имеет двойной корень тогда и только тогда, когда $c=e_i$ для некоторого $i$. Уравнение $\wp'(z)=0$ имеет в $\Pi$ ровно решения $\frac12\omega_1$, $\frac12\omega_2$, $\frac12(\omega_1+\omega_2)$, все простые.

<details class="proof"><summary>Доказательство</summary>

Дифференцируя $\wp(z)=c$: корень двойной $\iff$ $\wp'(z)=0$ $\iff$ $z$ — полупериод $\iff$ $c=e_i$. Нули $\wp'$ найдены в доказательстве утверждения 4.8.

</details>

## 4. Интуиция и картинки

::: idea
**$\wp$ как разветвлённое двулистное накрытие.** $\wp$ склеивает точки $z$ и $-z$ тора $\mathbb C/G$ и отображает результат на сферу Римана. Каждое значение $c$ принимается дважды ($\pm z$), кроме четырёх значений $\infty,e_1,e_2,e_3$, где $z\equiv-z$ (точки $0$ и три полупериода). Это ровно те 4 точки ветвления, про которые формула Римана–Гурвица говорит: двулистное накрытие сферы с 4 точками ветвления — тор ([билет 20](ticket_20.html)).

**Почему сначала $\zeta$.** $\zeta$ — простейший ряд Миттаг-Леффлера с полюсами в решётке; $\wp$ и $\wp'$ получаются дифференцированием, а $\sigma$ (произведение Вейерштрасса, [билет 16](ticket_16.html)) — интегрированием и экспонентой: $\zeta=\sigma'/\sigma$.
:::

<figure>
<svg viewBox="0 0 460 244" width="460" role="img" aria-label="Параллелограммы Π_n и точки решётки на их границах">
  <polygon points="392,23 152,23 68,221 308,221" class="muted" fill="none" stroke-width="1.2"/>
  <polygon points="338,56 178,56 122,188 282,188" class="muted" fill="none" stroke-width="1.2"/>
  <polygon points="284,89 204,89 176,155 256,155" class="accent" fill="none" stroke-width="2"/>
  <circle cx="68" cy="221" r="2.6" fill="currentColor"/>
  <circle cx="82" cy="188" r="2.6" fill="currentColor"/>
  <circle cx="96" cy="155" r="2.6" fill="currentColor"/>
  <circle cx="110" cy="122" r="2.6" fill="currentColor"/>
  <circle cx="124" cy="89" r="2.6" fill="currentColor"/>
  <circle cx="138" cy="56" r="2.6" fill="currentColor"/>
  <circle cx="152" cy="23" r="2.6" fill="currentColor"/>
  <circle cx="108" cy="221" r="2.6" fill="currentColor"/>
  <circle cx="122" cy="188" r="3.6" class="accent-fill"/>
  <circle cx="136" cy="155" r="3.6" class="accent-fill"/>
  <circle cx="150" cy="122" r="3.6" class="accent-fill"/>
  <circle cx="164" cy="89" r="3.6" class="accent-fill"/>
  <circle cx="178" cy="56" r="3.6" class="accent-fill"/>
  <circle cx="192" cy="23" r="2.6" fill="currentColor"/>
  <circle cx="148" cy="221" r="2.6" fill="currentColor"/>
  <circle cx="162" cy="188" r="3.6" class="accent-fill"/>
  <circle cx="176" cy="155" r="2.6" fill="currentColor"/>
  <circle cx="190" cy="122" r="2.6" fill="currentColor"/>
  <circle cx="204" cy="89" r="2.6" fill="currentColor"/>
  <circle cx="218" cy="56" r="3.6" class="accent-fill"/>
  <circle cx="232" cy="23" r="2.6" fill="currentColor"/>
  <circle cx="188" cy="221" r="2.6" fill="currentColor"/>
  <circle cx="202" cy="188" r="3.6" class="accent-fill"/>
  <circle cx="216" cy="155" r="2.6" fill="currentColor"/>
  <circle cx="244" cy="89" r="2.6" fill="currentColor"/>
  <circle cx="258" cy="56" r="3.6" class="accent-fill"/>
  <circle cx="272" cy="23" r="2.6" fill="currentColor"/>
  <circle cx="228" cy="221" r="2.6" fill="currentColor"/>
  <circle cx="242" cy="188" r="3.6" class="accent-fill"/>
  <circle cx="256" cy="155" r="2.6" fill="currentColor"/>
  <circle cx="270" cy="122" r="2.6" fill="currentColor"/>
  <circle cx="284" cy="89" r="2.6" fill="currentColor"/>
  <circle cx="298" cy="56" r="3.6" class="accent-fill"/>
  <circle cx="312" cy="23" r="2.6" fill="currentColor"/>
  <circle cx="268" cy="221" r="2.6" fill="currentColor"/>
  <circle cx="282" cy="188" r="3.6" class="accent-fill"/>
  <circle cx="296" cy="155" r="3.6" class="accent-fill"/>
  <circle cx="310" cy="122" r="3.6" class="accent-fill"/>
  <circle cx="324" cy="89" r="3.6" class="accent-fill"/>
  <circle cx="338" cy="56" r="3.6" class="accent-fill"/>
  <circle cx="352" cy="23" r="2.6" fill="currentColor"/>
  <circle cx="308" cy="221" r="2.6" fill="currentColor"/>
  <circle cx="322" cy="188" r="2.6" fill="currentColor"/>
  <circle cx="336" cy="155" r="2.6" fill="currentColor"/>
  <circle cx="350" cy="122" r="2.6" fill="currentColor"/>
  <circle cx="364" cy="89" r="2.6" fill="currentColor"/>
  <circle cx="378" cy="56" r="2.6" fill="currentColor"/>
  <circle cx="392" cy="23" r="2.6" fill="currentColor"/>
  <circle cx="230" cy="122" r="3.5" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <text x="236" y="137" font-size="12">0</text>
  <text x="288" y="85" font-size="12">∂Π₁</text>
  <text x="342" y="52" font-size="12">∂Π₂</text>
  <text x="396" y="19" font-size="12">∂Π₃</text>
  <text x="12" y="234" font-size="12" class="accent-fill">● на ∂Π₂ ровно 16 = 8·2 точек решётки</text>
</svg>
<figcaption>Параллелограммы Π₁, Π₂, Π₃ с вершинами n(±ω₁ ± ω₂). На границе Π<sub>n</sub> лежит 8n точек решётки, и все они не ближе Cn к нулю. Поэтому сумма |ω|<sup>−3</sup> по n-й границе не больше 8n/(Cn)³ ∼ 1/n², а сумма |ω|<sup>−2</sup> — порядка 1/n, и её ряд расходится.</figcaption>
</figure>

## 5. Пример / типовая задача с решением

::: example
**Задача 1.** При каких $s$ сходится $\sum'_{\omega\in G}\lvert\omega\rvert^{-s}$?

**Решение.** На $\partial\Pi_n$ ровно $8n$ точек, и $Cn\le\lvert\omega\rvert\le C'n$. Сумма по $n$-й группе заключена между $\frac{8n}{(C'n)^s}$ и $\frac{8n}{(Cn)^s}$, то есть порядка $n^{1-s}$. Ряд сходится $\iff s-1>1\iff s>2$. Поэтому $\sum'\omega^{-2}$ расходится абсолютно, а $\sum'\omega^{-3}$, $\sum'\omega^{-4}$, … сходятся.

**Задача 2.** Решётка квадратная: $\omega_1=1$, $\omega_2=i$. Докажите, что $\wp(iz)=-\wp(z)$, и найдите $e_3$ и связь $e_1,e_2$.

**Решение.** $iG=G$. В ряду для $\wp(iz)$ заменим $\omega=i\omega'$:
$$\wp(iz)=\frac1{(iz)^2}+\sum{}'\Big(\frac1{(iz-i\omega')^2}-\frac1{(i\omega')^2}\Big)=-\frac1{z^2}-\sum{}'\Big(\frac1{(z-\omega')^2}-\frac1{\omega'^2}\Big)=-\wp(z).$$
Тогда $e_2=\wp(\frac i2)=-\wp(\frac12)=-e_1$. Для $z_3=\frac{1+i}2$: $iz_3=\frac{-1+i}2\equiv\frac{1+i}2$, поэтому $e_3=\wp(iz_3)=-e_3$, то есть $e_3=0$.

**Задача 3.** Пусть $f$ — чётная эллиптическая функция с решёткой $G$, у которой в $\Pi$ единственный полюс — в нуле, второго порядка. Докажите, что $f=a\wp+b$.

**Решение.** Пусть главная часть $f$ в нуле $\frac a{z^2}+\frac{a'}z$. По чётности ряд Лорана содержит только чётные степени, значит $a'=0$. Тогда $f-a\wp$ — эллиптическая без полюсов, по теореме 4.3 константа $b$.

**Задача 4.** Найдите все нули $\wp'$ и все решения $\wp(z)=e_2$ в $\Pi$.

**Решение.** $\wp'=0$ ровно в $\frac{\omega_1}2,\frac{\omega_2}2,\frac{\omega_1+\omega_2}2$ (простые нули). $\wp(z)=e_2$: только $z=\frac{\omega_2}2$, двойной корень.
:::

## 6. Частые дополнительные вопросы экзаменатора

- **Почему нельзя взять $\sum_{\omega}\frac1{(z-\omega)^2}$ без поправок?** Ряд не сходится абсолютно ($\sum'\lvert\omega\rvert^{-2}=\infty$), и его сумма зависела бы от порядка суммирования.
- **А почему $\wp'$ можно задать без поправок?** $\sum\lvert\omega\rvert^{-3}<\infty$.
- **Сколько точек решётки на $\partial\Pi_n$ и почему?** $8n$: точки $k\omega_1+l\omega_2$ с $\max(\lvert k\rvert,\lvert l\rvert)=n$; их $(2n+1)^2-(2n-1)^2=8n$.
- **Почему $\wp$ чётна?** Замена $\omega\to-\omega$ переставляет слагаемые абсолютно сходящегося ряда.
- **Чему равен вычет $\wp$ в нуле?** Нулю (главная часть $\frac1{z^2}$).
- **Почему $\wp$ не принимает значение $e_i$ в двух разных точках $\Pi$?** Там двойной корень (утверждение 4.7 + $\wp'(z_i)=0$).
- **Является ли $\zeta$ эллиптической?** Нет: один простой полюс в $\Pi$; $\zeta(z+\omega_j)=\zeta(z)+\eta_j$.
- **Как зависят $\wp$ от решётки при растяжении?** $\wp(\lambda z;\lambda G)=\lambda^{-2}\wp(z;G)$.

## 7. Типичные ошибки и ловушки

::: warn
- Доказывать периодичность $\wp$ «сдвигом индекса» прямо в ряде для $\wp$: поправки $\frac1{\omega^2}$ при этом не переставляются. Правильно: через $\wp'$ и чётность.
- Забыть, почему $-\frac{\omega_j}2$ не полюс.
- Писать сумму в $\wp'$ как $\sum'$: в $\wp'$ суммирование по **всем** $\omega$, включая $0$.
- Утверждать, что $\zeta$ периодична.
- Считать, что $\wp$ принимает каждое значение в двух разных точках: в $e_1,e_2,e_3$ и $\infty$ — одна точка кратности 2.
- ⚠️ Цитировать из С6 «2 двукратных нуля в $z_1$ и $z_2$» при $e_1=e_3$ — опечатка, нужно $z_1$ и $z_3$.
:::

## 8. Связи с другими билетами

- [Билет 17](ticket_17.html): теоремы 4.3–4.6, на которых держатся свойства $\wp$.
- [Билет 15](ticket_15.html): $\zeta$ — это ряд Миттаг-Леффлера с полюсами в решётке.
- [Билет 16](ticket_16.html): $\sigma$-функция — произведение Вейерштрасса по решётке, $\zeta=\sigma'/\sigma$.
- [Билет 19](ticket_19.html): разложение $\wp$ в ряд Лорана в нуле и дифференциальное уравнение; связь $e_i$ с $g_2,g_3$.
- [Билет 20](ticket_20.html): $t\mapsto(\wp(t):\wp'(t):1)$ — изоморфизм тора и кубической кривой.

## 9. Самопроверка

::: quiz
1. Запишите определения $\zeta$ и $\wp$. Зачем в $\zeta$ слагаемые $\frac1\omega+\frac z{\omega^2}$?

    <details><summary>Ответ</summary>

    $\zeta(z)=\frac1z+\sum'\big(\frac1{z-\omega}+\frac1\omega+\frac z{\omega^2}\big)$, $\wp=-\zeta'=\frac1{z^2}+\sum'\big(\frac1{(z-\omega)^2}-\frac1{\omega^2}\big)$. Поправки делают слагаемое равным $\frac{z^2}{\omega^2(z-\omega)}=O(\lvert\omega\rvert^{-3})$, а $\sum'\lvert\omega\rvert^{-3}<\infty$.

    </details>

2. Как доказывается сходимость ряда для $\zeta$?

    <details><summary>Ответ</summary>

    Группируем по границам $\partial\Pi_n$: там $8n$ точек, каждая на расстоянии $\ge Cn$. Сумма модулей по группе $\le\frac{8n\lvert z\rvert^2}{C^2n^2(Cn-\lvert z\rvert)}\sim\frac M{n^2}$, равномерно на компактах.

    </details>

3. Докажите двоякую периодичность $\wp$.

    <details><summary>Ответ</summary>

    $\wp'=-2\sum_G(z-\omega)^{-3}$ периодична (сдвиг переставляет слагаемые). Значит $\wp(z+\omega_j)-\wp(z)=c_j$. При $z=-\omega_j/2$ по чётности $c_j=\wp(\omega_j/2)-\wp(-\omega_j/2)=0$.

    </details>

4. Когда $\wp(z)=\wp(w)$?

    <details><summary>Ответ</summary>

    $\iff z\equiv\pm w\pmod G$: порядок 2 даёт две $c$-точки с суммой $\equiv0$, а $z$ и $-z$ — две $c$-точки.

    </details>

5. Где нули $\wp'$ и почему $e_1,e_2,e_3$ различны?

    <details><summary>Ответ</summary>

    В полупериодах $\frac{\omega_1}2,\frac{\omega_2}2,\frac{\omega_1+\omega_2}2$ ($\wp'$ нечётна, а $z_i\equiv-z_i$); порядок $\wp'$ равен 3, других нулей нет. Если бы $e_i=e_j$, то $\wp-e_i$ имела бы два двойных нуля — 4 нуля при порядке 2.

    </details>

6. Где в построении используется абсолютная сходимость рядов по решётке? При каких $s$ сходится $\sum'\lvert\omega\rvert^{-s}$?

    <details><summary>Ответ</summary>

    Абсолютная сходимость нужна, чтобы переставлять слагаемые: замена $\omega\to-\omega$ (нечётность $\zeta$, чётность $\wp$) и сдвиг $z\to z+\omega_j$ в ряде для $\wp'$. Ряд $\sum'\lvert\omega\rvert^{-s}$ сходится $\iff s>2$: сумма по $\partial\Pi_n$ имеет порядок $8n\cdot n^{-s}$.

    </details>

7. Почему при доказательстве периодичности $\wp$ подставляют именно $z=-\frac{\omega_j}2$? Почему нельзя сразу сдвинуть индекс в ряде для $\wp$?

    <details><summary>Ответ</summary>

    Нужна точка, где $\wp$ конечна и где чётность связывает $z$ и $z+\omega_j$: при $z=-\frac{\omega_j}2$ имеем $z+\omega_j=\frac{\omega_j}2=-z$, а $\frac{\omega_j}2\notin G$ — не полюс. Сдвиг индекса в самом ряде для $\wp$ не годится: поправки $\frac1{\omega^2}$ при сдвиге не переставляются, а без них ряд расходится.

    </details>

8. Чему равны вычеты $\zeta$ и $\wp$ в точке $\omega\in G$? Почему $\zeta$ не эллиптическая?

    <details><summary>Ответ</summary>

    $\operatorname{res}_\omega\zeta=1$ (главная часть $\frac1{z-\omega}$), $\operatorname{res}_\omega\wp=0$ (главная часть $\frac1{(z-\omega)^2}$). Если бы $\zeta$ была эллиптической, у неё был бы порядок 1 — это запрещено следствием 4.4 [билета 17](ticket_17.html). На самом деле $\zeta(z+\omega_j)=\zeta(z)+\eta_j$.

    </details>

9. Решётка квадратная: $\omega_1=1$, $\omega_2=i$. Докажите, что $\wp(iz)=-\wp(z)$, и выведите $e_2=-e_1$, $e_3=0$.

    <details><summary>Ответ</summary>

    $iG=G$; заменой $\omega=i\omega'$ в ряде получаем $\wp(iz)=-\wp(z)$, так как $(i\cdot)^{-2}=-(\cdot)^{-2}$. Тогда $e_2=\wp(\frac i2)=-\wp(\frac12)=-e_1$. Далее $i\cdot\frac{1+i}2=\frac{-1+i}2\equiv\frac{1+i}2\pmod G$, поэтому $e_3=-e_3$, $e_3=0$.

    </details>

10. Решётка $G=\mathbb Z\oplus i\mathbb Z$, $\Pi=\{t_1+it_2:\ t_i\in[0,1)\}$. Найдите в $\Pi$ все решения уравнений $\wp(z)=\wp(\frac14)$ и $\wp(z)=\wp(\frac12)$.

    <details><summary>Ответ</summary>

    По утверждению 4.7 решения — $z\equiv\pm w$. Для $w=\frac14$: $z=\frac14$ и $z=\frac34$ (так как $-\frac14\equiv\frac34$), два простых корня. Для $w=\frac12$: $-\frac12\equiv\frac12$, поэтому единственное решение $z=\frac12$ — двойной корень (там $\wp'=0$, значение $e_1$).

    </details>
:::
