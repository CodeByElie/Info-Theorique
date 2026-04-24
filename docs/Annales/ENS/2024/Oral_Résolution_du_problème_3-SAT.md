# Résolution du problème 3-SAT (Oraux)
[Lien vers le sujet](https://diplome.di.ens.fr/informatique-ens/annales/2024_Info-rapport.pdf)

## Notions
- Algorithmique
- 3-SAT

## Sujet

!!! quote "Énoncé"
    Soit $X$ un ensemble de variables qui seront notées avec des lettres minuscules : $x$, $y$, etc. Un littéral
    est une variable $x$ ou sa négation $\neg x$. Une formule booléenne est en forme normale conjonctive (CNF)
    si elle s’écrit sous la forme d’une conjonction de clauses, qui sont des disjonctions de littéraux. On
    l’appellera alors "une CNF" par abus de langage, et de plus, une "3-CNF" lorsque chaque clause
    contient au plus trois littéraux. Une valuation est une fonction de $X$ dans $\{0, 1\}$.

    On considère le problème 3-SAT :

    - Entrée : une 3-CNF contenant $n$ littéraux et $m$ clauses. On supposera $m = \mathcal{O}(n)$.
    - Sortie : Vrai si la formule est satisfiable, Faux sinon.

    On s’intéresse à des algorithmes efficaces pour résoudre ce problème, en temps $\widetilde{\mathcal{O}} (2^{\alpha n})$ où $\alpha$ est une
    constante et la notation $\widetilde{\mathcal{O}}$ omet les facteurs polynomiaux en $n$.

### Question 1
Donner un algorithme en temps $\widetilde{\mathcal{O}}(2^n)$ pour résoudre 3-SAT.

??? note "Solution"


!!! quote "Énoncé"
    Pour toute 3-CNF $\Phi$ et toute variable $x \in X$, on note $\Phi_{|x}$ la 3-CNF obtenue en évaluant $x$ à $1$
    (« Vrai ») dans $\Phi$ (respectivement, $\Phi_{|\neg x}$ en évaluant $x$ à $0$). On étend cette notation à un ensemble
    de variables : par exemple $\Phi_{|xy}$ évalue $x$ et $y$ à $1$.

    On admet que le polynôme $X^3 − X^2 − X − 1$ admet une seule racine réelle $\alpha$ et que $\alpha < 1.84$. On
    admet que la plus grande racine $\beta$ du polynôme $X^3 − 2X − 2$ vérifie $\beta < 1.77$.

### Question 2
1. Soit $x$ une variable apparaissant dans $\Phi$. Montrer que $\Phi$ est satisfiable si et seulement si $\Phi_{|x}$
est satisfiable ou $\Phi_{|\neg x}$ l’est.

2. Soit $x$ une variable telle que le littéral $\neg x$ n’apparaît pas dans $\Phi$. Montrer que $\Phi$ est satisfiable si et seulement
si $\Phi_{|x}$ est satisfiable.

??? note "Solution"

### Question 3
1. Soit $(x \vee y \vee z)$ une clause de $\Phi$. Montrer que $\Phi$ est satisfiable si et seulement si $\Phi_{|x}$ ou $\Phi_{|\neg xy}$
ou $\Phi_{|\neg x \neg y z}$ l’est.

2. En déduire un algorithme pour résoudre 3-SAT. Soit $T(n)$ sa complexité, en fonction du nombre de variables
$n$. Montrer que $T(n) = \widetilde{\mathcal{O}}(1.84n)$.

??? note "Solution"

### Question 4
Soit $x$ une variable telle que le littéral $x$ et sa négation apparaissent tous les deux dans $\Phi$. En
considérant une nouvelle disjonction de cas, donner un algorithme plus efficace pour 3-SAT.

??? note "Solution"

!!! quote "Énoncé"
    La *distance de Hamming $h$* entre deux $n$-uplets de $\{0, 1\}^n$ est le nombre de positions où ils diffèrent.

    On considère un nouvel algorithme récursif pour 3-SAT qui ne modifie pas la formule $\Phi$, mais une
    valuation $f$ :

    $\text{Local}(\Phi,f,r)$

    1 : Si $f$ satisfait $\Phi$ renvoyer Vrai

    2 : Si $r = 0$ renvoyer Faux

    3 : Soient $x$, $y$, $z$ les variables de la première clause de $\Phi$ non satisfaite par $f$ (on aura pris un ordre arbitraire des clauses de $\Phi$)

    4 : Définir $f_x$ par : $\forall t \neq x, f_x(t) = f(t) et f_x(x) = 1 − f(x)$

    5 : Définir $f_y$ par : $\forall t \neq y, f_y(t) = f(t) et f_y(y) = 1 − f(y)$

    6 : Définir $f_z$ par : $\forall t \neq z, f_z(t) = f(t) et f_z(z) = 1 − f(z)$

    7 : Si $\text{Local}(\Phi,f_x,r-1)=$Vrai renvoyer Vrai

    8 : Si $\text{Local}(\Phi,f_y,r-1)=$Vrai renvoyer Vrai

    9 : Renvoyer $\text{Local}(\Phi,f_z,r-1)$

### Question 5
1. Montrer que s’il existe une valuation qui satisfait $\Phi$ et qui est à distance de Hamming $\leq r$ de $f$ , $\text{Local}(\Phi,f,r)$ renvoie Vrai.

2. Donner un algorithme de complexité $\widetilde{\mathcal{O}}(3^{n/2})$ pour 3-SAT.

??? note "Solution"

### Question 6
1. Soit $V(r)$ le nombre de $n$-uplets de $\{0, 1\}^n$ à distance au plus $r$ d’un $n$-uplet donné. Soit $t \in \{0, 1\}^n$ fixé. Montrer qu’en choisissant $n2^n/V(r)$ $n$-uplets uniformément au hasard dans $\{0, 1\}^n$, la probabilité qu’aucun ne soit à distance au plus $r$ de $t$ (i.e., proche de $t$ d’une distance $r$) est bornée par $e^{−n}$.

2. En déduire un meilleur algorithme pour 3-SAT (avec une faible probabilité d’erreur).

??? note "Solution"