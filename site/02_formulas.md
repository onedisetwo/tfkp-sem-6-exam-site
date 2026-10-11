---
title: "Сводка формул"
subtitle: "Все формулы курса на одной странице, по темам, со ссылками на билеты"
lang: ru
---

<script src="site.js"></script>
<noscript><p><a href="index.html">Главная</a> · <a href="00_base.html">База</a> · <a href="01_map.html">Карта</a> · <a href="03_plan.html">План</a></p></noscript>

::: short
Здесь только формулы и формулировки в одну строку, без доказательств. У каждой формулы ссылка на билет, где она выводится. Обозначения — как в лекциях (С5, С6); соглашения, которые в лекциях не зафиксированы, собраны в последнем разделе.
:::

## 1. Одна переменная: что нужно из 5 семестра {#f-base}

- Коши–Риман и операторы ([A2](00_base.html#A2), [A3](00_base.html#A3)):
$$\frac{\partial}{\partial z}=\frac12\Big(\frac{\partial}{\partial x}-i\frac{\partial}{\partial y}\Big),\qquad\frac{\partial}{\partial\bar z}=\frac12\Big(\frac{\partial}{\partial x}+i\frac{\partial}{\partial y}\Big),\qquad f\in O(D)\iff\frac{\partial f}{\partial\bar z}=0 .$$
- Формула Коши и производные ([B4](00_base.html#B4)):
$$f(z)=\frac1{2\pi i}\oint_{\partial D}\frac{f(\zeta)\,d\zeta}{\zeta-z},\qquad f^{(n)}(z)=\frac{n!}{2\pi i}\oint\frac{f(\zeta)\,d\zeta}{(\zeta-z)^{n+1}} .$$
- Коши–Адамар и неравенства Коши ([C1](00_base.html#C1), [C2](00_base.html#C2)):
$$\frac1R=\overline{\lim_{n\to\infty}}\sqrt[n]{\lvert c_n\rvert},\qquad\lvert c_n\rvert\le\frac{M(r)}{r^n}.$$
- Вычеты ([D4](00_base.html#D4)): полюс порядка $p$ в $a$:
$$\operatorname{res}_af=\frac1{(p-1)!}\lim_{z\to a}\frac{d^{p-1}}{dz^{p-1}}\big[(z-a)^pf(z)\big],\qquad\oint_{\partial D}f\,dz=2\pi i\sum\operatorname{res}.$$
- Принцип аргумента ([D5](00_base.html#D5)):
$$\frac1{2\pi i}\oint_{\partial D}\frac{f'}{f}\,dz=N-P .$$
- Ряд Пюизо ([F5](00_base.html#F5)): около точки ветвления порядка $k$
$$f(z)=\sum_{j\in\mathbb Z}c_j(z-a)^{j/k}.$$

## 2. Функции многих переменных (билеты 1–8) {#f-several}

- Голоморфность ([Б1](ticket_01.html)): $f\in O(D)$, $D\subset\mathbb C^n$ $\iff$ $f$ $\mathbb R$-дифференцируема и $\bar\partial f=\sum_j\frac{\partial f}{\partial\bar z_j}d\bar z_j\equiv0$.
- Кратная формула Коши в полидиске $\Delta=\Delta(a,r)$, остов $\operatorname{Sk}\Delta=\{\lvert\zeta_j-a_j\rvert=r_j\}$ ([Б1](ticket_01.html)):
$$f(z)=\frac1{(2\pi i)^n}\int_{\operatorname{Sk}\Delta}\frac{f(\zeta)\,d\zeta_1\cdots d\zeta_n}{(\zeta_1-z_1)\cdots(\zeta_n-z_n)} .$$
- Ряд Тейлора и коэффициенты ([Б3](ticket_03.html)):
$$f(z)=\sum_mc_m(z-a)^m,\qquad c_m=\frac1{(2\pi i)^n}\int_{\operatorname{Sk}\Delta}\frac{f(\zeta)\,d\zeta}{\prod_j(\zeta_j-a_j)^{m_j+1}}=\frac1{m!}\frac{\partial^{\lvert m\rvert}f(a)}{\partial z^m},$$
где $m!=m_1!\cdots m_n!$, $\lvert m\rvert=m_1+\dots+m_n$.
- Неравенства Коши ([Б3](ticket_03.html)): $\lvert f\rvert\le M$ в $\Delta(a,r)$ $\Rightarrow$
$$\lvert c_m\rvert\le\frac M{r_1^{m_1}\cdots r_n^{m_n}}.$$
- Лемма Абеля, сопряжённые радиусы ([Б2](ticket_02.html)): если $\sum c_m\hat z^m$ ограничен, ряд сходится абсолютно в $\{\lvert z_j\rvert<\lvert\hat z_j\rvert\}$. Область сходимости — полная область Рейнхарта, **логарифмически выпуклая**: её образ при $\varphi(z)=(\ln\lvert z_1\rvert,\dots,\ln\lvert z_n\rvert)$ выпуклый.
- Голоморфная $n$-форма замкнута; теорема Коши–Пуанкаре ([Б6](ticket_06.html)): для $(n+1)$-мерной $\sigma\subset D$
$$d(f\,dz_1\wedge\dots\wedge dz_n)=0,\qquad\int_{\partial\sigma}f\,dz_1\wedge\dots\wedge dz_n=0 .$$
- Продолжение с фигуры Хартогса ([Б7](ticket_07.html)):
$$F(z_1,z_2)=\frac1{2\pi i}\int_{\lvert\zeta\rvert=1-\varepsilon}\frac{f(z_1,\zeta)}{\zeta-z_2}\,d\zeta .$$
- Теорема Картана ([Б8](ticket_08.html)): $D$ ограниченного вида, $f\in\operatorname{Aut}D$, $f(a)=a$, $f'(a)=\mathrm{id}$ $\Rightarrow$ $f=\mathrm{id}$. Ключ: $f^\nu(z)=z+\nu P_m(z)+\dots$. Следствие: $\dim_{\mathbb R}\operatorname{Aut}D\le2n^2+2n$.
- Область Зигеля и шар ([Б8](ticket_08.html)):
$$\{\operatorname{Im}w>\lvert z\rvert^2\}\to B^2:\qquad\tilde z=\frac{2z}{w+i},\quad\tilde w=\frac{w-i}{w+i}.$$

## 3. Алгебраические функции и римановы поверхности (билеты 9–14) {#f-algebraic}

- Неявное отображение ([Б9](ticket_09.html)): $F(a,b)=0$, $\det\frac{\partial F}{\partial w}(a,b)\ne0$ $\Rightarrow$ есть голоморфная $w=f(z)$, и
$$f'(z)=-\Big(\frac{\partial F}{\partial w}\Big)^{-1}\frac{\partial F}{\partial z}.$$
- Дискриминант ([Б9](ticket_09.html)):
$$D(a_0w^n+\dots+a_n)=a_0^{2n-2}\prod_{i<j}(w_i-w_j)^2;\qquad D(aw^2+bw+c)=b^2-4ac,\quad D(w^3+pw+q)=-4p^3-27q^2 .$$
- Критическое множество уравнения $P(z,w)=p_0(z)w^n+\dots+p_n(z)=0$: $\Sigma=\{p_0=0\}\cup\{\Delta=0\}$ ([Б9](ticket_09.html)).
- Теорема 6.6 С5 ([Б10](ticket_10.html)): значения $f_1,\dots,f_n$ алгебраической функции — корни
$$w^n-\sigma_1w^{n-1}+\dots+(-1)^n\sigma_n=0,\qquad\sigma_k\ \text{— элементарные симметрические, рациональны}.$$
- Нормализация в точке ветвления порядка $k$ ([Б11](ticket_11.html)): локальная координата $\zeta$, $z=a+\zeta^k$ (над $\infty$: $z=\zeta^{-k}$).
- Эйлерова характеристика и Риман–Гурвиц ([Б12](ticket_12.html)): $m$ — число листов, $e_p$ — порядок ветвления точки $p$ поверхности:
$$\chi=\text{В}-\text{Р}+\text{Г}=2-2g,\qquad g=\frac12\sum_{p}(e_p-1)-(m-1).$$
- Род гиперэллиптической кривой ([Б12](ticket_12.html), С6 §4.2.4): $w^2=P_n(z)$ без кратных корней
$$g=\Big[\frac{n-1}2\Big].$$
- Род неособой плоской кривой степени $n$ ([Б13](ticket_13.html)):
$$g=\frac{(n-1)(n-2)}2;\qquad\tilde P(x,y,z)=z^nP\Big(\frac xz,\frac yz\Big);\qquad\text{особая точка: }\tilde P_x=\tilde P_y=\tilde P_z=0 .$$
- Монодромия ([Б14](ticket_14.html)): $\pi_1(\overline{\mathbb C}\setminus A,z_0)\to S_m$; функция в радикалах $\Rightarrow$ группа разрешима; для $w^5-5w=z$ группа $S_5$ (неразрешима). Ключевое тождество для 3-циклов:
$$(a\,b\,c)=(a\,b\,d)(a\,c\,e)(a\,b\,d)^{-1}(a\,c\,e)^{-1}.$$

## 4. Мероморфные и целые функции (билеты 15–16) {#f-meromorphic}

- Миттаг-Леффлер ([Б15](ticket_15.html)): $g_n$ — главная часть в $a_n$, $P_n$ — поправочный многочлен (отрезок ряда Тейлора $g_n$ в нуле):
$$f(z)=G(z)+\sum_n\big(g_n(z)-P_n(z)\big),\qquad G\in O(\mathbb C).$$
- Метод Коши, простые полюсы, $f$ ограничена на контурах ([Б15](ticket_15.html)):
$$f(z)=f(0)+\sum_kb_k\Big(\frac1{z-a_k}+\frac1{a_k}\Big),\qquad b_k=\operatorname{res}_{a_k}f .$$
- Котангенс и обратный квадрат синуса ([Б15](ticket_15.html)):
$$\operatorname{ctg}z=\frac1z+\sum_{k=1}^\infty\frac{2z}{z^2-\pi^2k^2},\qquad\frac1{\sin^2z}=\sum_{k\in\mathbb Z}\frac1{(z-\pi k)^2},\qquad\sum_{k\ge1}\frac1{k^2}=\frac{\pi^2}6 .$$
- Бесконечное произведение ([Б16](ticket_16.html)): $\prod(1+c_k)$ сходится $\iff$ предел частичных произведений конечен и не равен нулю; для функций достаточно равномерной сходимости $\sum\lvert u_k(z)\rvert$ на компактах.
- Теорема Вейерштрасса ([Б16](ticket_16.html)):
$$f(z)=z^{m_0}e^{h(z)}\prod_{n=1}^\infty\Big(1-\frac z{a_n}\Big)\exp\Big(\frac z{a_n}+\frac{z^2}{2a_n^2}+\dots+\frac{z^{m_n}}{m_na_n^{m_n}}\Big),\qquad h\in O(\mathbb C).$$
- Синус ([Б16](ticket_16.html)):
$$\sin z=z\prod_{n=1}^\infty\Big(1-\frac{z^2}{\pi^2n^2}\Big),\qquad\sin\pi z=\pi z\prod_{n=1}^\infty\Big(1-\frac{z^2}{n^2}\Big),\qquad\frac{d}{dz}\ln\sin z=\operatorname{ctg}z .$$

## 5. Эллиптические функции (билеты 17–20) {#f-elliptic}

- Решётка и параллелограмм ([Б17](ticket_17.html)):
$$G=\omega_1\mathbb Z\oplus\omega_2\mathbb Z,\qquad\Pi=\{t_1\omega_1+t_2\omega_2:\ t_i\in[0,1)\}.$$
- Теоремы Лиувилля ([Б17](ticket_17.html)): целая эллиптическая — константа; $\sum_{\Pi}\operatorname{res}f=0$ (порядка 1 не бывает); каждое значение принимается $r$ раз ($r$ — порядок); сумма нулей $\equiv$ сумме полюсов $\pmod G$.
- Дзета- и $\wp$-функции ([Б18](ticket_18.html)):
$$\zeta(z)=\frac1z+\sum_{\omega\in G}{}'\Big(\frac1{z-\omega}+\frac1\omega+\frac z{\omega^2}\Big),\qquad\wp=-\zeta',$$
$$\wp(z)=\frac1{z^2}+\sum_{\omega\in G}{}'\Big(\frac1{(z-\omega)^2}-\frac1{\omega^2}\Big),\qquad\wp'(z)=-2\sum_{\omega\in G}\frac1{(z-\omega)^3}.$$
- Ряд Лорана $\wp$ ([Б19](ticket_19.html)):
$$\wp(z)=\frac1{z^2}+\sum_{n\ge2}c_nz^{2n-2},\qquad c_n=(2n-1)\sum{}'\omega^{-2n}.$$
- Полупериоды и критические значения ([Б18](ticket_18.html), [Б19](ticket_19.html)):
$$z_1=\tfrac{\omega_1}2,\quad z_2=\tfrac{\omega_2}2,\quad z_3=\tfrac{\omega_1+\omega_2}2,\qquad e_i=\wp(z_i),\ \ e_i\ \text{попарно различны}.$$
- Дифференциальное уравнение ([Б19](ticket_19.html)):
$$(\wp')^2=4\wp^3-g_2\wp-g_3=4(\wp-e_1)(\wp-e_2)(\wp-e_3),\qquad g_2=60\sum{}'\frac1{\omega^4},\quad g_3=140\sum{}'\frac1{\omega^6}.$$
- Виет и дискриминант ([Б19](ticket_19.html)):
$$e_1+e_2+e_3=0,\quad e_1e_2+e_2e_3+e_3e_1=-\tfrac14g_2,\quad e_1e_2e_3=\tfrac14g_3,\qquad\Delta=g_2^3-27g_3^2=16\prod_{i<j}(e_i-e_j)^2\ne0 .$$

  ⚠️ Нормировка: $\Delta=\frac1{16}D(4x^3-g_2x-g_3)$, где $D$ — дискриминант из Б9.
- Тор и кубика ([Б20](ticket_20.html)):
$$\mathbb C/G\ \xrightarrow{\ \sim\ }\ \{zy^2=4x^3-g_2xz^2-g_3z^3\}\subset\mathbb{CP}^2,\qquad t\mapsto\big(\wp(t):\wp'(t):1\big).$$

## 6. Конформные отображения (билеты 21–23) {#f-conformal}

- Кристоффель–Шварц ([Б22](ticket_22.html)): углы $\pi\alpha_k$, $\sum\alpha_k=n-2$,
$$f(z)=C\int_{z_0}^z\prod_{k=1}^n(\zeta-a_k)^{\alpha_k-1}\,d\zeta+C_1,\qquad\frac{f''}{f'}=\sum_k\frac{\alpha_k-1}{z-a_k}.$$
- Эллиптический интеграл и синус ([Б21](ticket_21.html)), $0<k<1$:
$$F(z)=\int_0^z\frac{d\zeta}{\sqrt{(1-\zeta^2)(1-k^2\zeta^2)}},\qquad K=F(1),\qquad K'=\int_1^{1/k}\frac{dt}{\sqrt{(t^2-1)(1-k^2t^2)}},$$
$$\operatorname{sn}=F^{-1},\quad\text{периоды }4K,\ 2iK',\qquad(\operatorname{sn}')^2=(1-\operatorname{sn}^2)(1-k^2\operatorname{sn}^2).$$
- Модулярная функция ([Б23](ticket_23.html)): $\lambda:T\to H$, $T=\{0<\operatorname{Re}\tau<1,\ \lvert\tau-\frac12\rvert>\frac12\}$, $\lambda(\infty)=0$, $\lambda(0)=1$, $\lambda(1)=\infty$; $\lambda:H\to\mathbb C\setminus\{0,1\}$, инвариантна относительно
$$\tau\mapsto\tau+2,\qquad\tau\mapsto\frac\tau{2\tau+1}.$$
- Малая теорема Пикара ([Б23](ticket_23.html)): целая функция, пропускающая два значения, постоянна. Ключ: $h=\lambda^{-1}\circ f$ целая со значениями в $H$, $\lvert e^{ih}\rvert<1$.

## 7. Обозначения и соглашения {#f-notation}

| Обозначение | Смысл | Где |
|---|---|---|
| $O(D)$ | голоморфные в $D$ функции | везде |
| $\Delta(a,r)$, $\operatorname{Sk}\Delta$ | полидиск и его остов | Б1–Б7 |
| $\Delta$ | ⚠️ ещё: оператор Лапласа (С6 §1), дискриминант (Б9, Б19) — по контексту | |
| $[f]_a$ | росток в точке $a$ | Б9–Б14, Б23 |
| $\sum'$ | сумма по $\omega\in G$, $\omega\ne0$ | Б18, Б19 |
| $G$ | группа (решётка) периодов, $\operatorname{Im}(\omega_2/\omega_1)>0$ (соглашение, в С6 не зафиксировано) | Б17–Б20 |
| $\Pi$ | параллелограмм периодов; ⚠️ в Б16 $\Pi_n$ — частичное произведение (обозначение С6) | Б16–Б19 |
| $H$ | верхняя полуплоскость; ⚠️ в Б7 $H$ — фигура Хартогса (в Б19 добавка обозначена $h(z)$) | Б21–Б23 |
| $m$ | число листов алгебраической функции; в Б10 и теореме 6.6 С5 это $n=\deg_wP$ | Б10–Б14 |
| $e_p$ | порядок ветвления точки $p$ поверхности (в С5 — $k_j$); ⚠️ не путать с $e_i=\wp(z_i)$ | Б12, Б14 (в Б13 — $e_q$) |
| $g$ | род; ⚠️ не путать с $g_2$, $g_3$ (инварианты решётки, константы) | Б12, Б13, Б19, Б20 |

⚠️ «Теорема Вейерштрасса» в курсе — три разных утверждения: о пределе голоморфных функций (С5 4.7), о существовании целой функции с заданными нулями (С6 3.4, [Б16](ticket_16.html)) и признак равномерной сходимости рядов.
