# Résolution du problème 3-SAT (Oraux)
[Lien vers le sujet](https://diplome.di.ens.fr/informatique-ens/annales/2024_Info-rapport.pdf)

## Notions
- Algorithmique
- 3-SAT
- Combinatoire
- Probabilité

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
    Afin de déterminer si une 3-CNF est valide ou non, nous pouvons simplement tester toutes les valuations possibles. À chaque valuation, nous évaluons la formule booléenne : si le résultat est $1$, la formule et satisfiable, si le résultat est $0$, nous testons une autre valuation. Si nous avons testé toutes les valuations sans résultat positif, la formule n'est pas satisfiable.

    L'évaluation de la formule se fait en $\mathcal{O}(m)$ opérations binaires (car il y a $m$ clauses) et il existe $\mathcal{O}(2^n)$ valuations différentes ($n$ littéraux donc moins de $n$ variables différentes). La complexité de l'algorithme est donc en $\widetilde{\mathcal{O}}(2^n)$.

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
    1. Si $\Phi$ est satisfiable, alors il existe une valuation $f:X\mapsto \{0,1\}^n$ qui satisfait $\Phi$. Lorsque l'on applique cette valuation à $x$, $\Phi_{|f(x)}$ reste satisfiable grâce à cette même valuation. Soit $f(x)=0$, auquel cas $\Phi_{|\neg x}$ reste satisfiable, soit $f(x)=1$, auquel cas $\Phi_{|x}$ reste satisfiable. Réciproquement si $\Phi_{|x}$ (ou $\Phi_{|\neg x}$) est satisfiable, alors il existe une valuation $f':X\backslash \{x\} \mapsto \{0,1\}^n$ qui satisfait $\Phi_{|x}$ (ou $\Phi_{|\neg x}$). On peut étendre $f'$ à tout $X$ en posant $f(x)=1$ (ou $f(x)=0$) et comme  $\Phi$ est satisfiable en évaluant $x$ à $1$ (ou à $0$) alors $\Phi$ est satisfiable par $f$.  

    2. Si $\Phi$ est satisfiable, alors il existe une valuation $f:X\mapsto \{0,1\}^n$ qui satisfait $\Phi$. Comme il n'existe pas de $\neg x$ dans $\Phi$, on en déduit que l'évaluation $f'$ qui renvoie $1$ sur $x$ et $f$ sinon satisfait $\Phi$. En effet, comme $\neg x$ n'est pas dans $\Phi$, appliquer $1$ à $x$ ne fait qu'ajouter un élément neutre ou plus à la conjonction de clauses de $\Phi$. $Phi_{|x}$ est donc satisfiable. La réciproque est vérifiée en 1.

### Question 3
1. Soit $(x \vee y \vee z)$ une clause de $\Phi$. Montrer que $\Phi$ est satisfiable si et seulement si $\Phi_{|x}$ ou $\Phi_{|\neg xy}$
ou $\Phi_{|\neg x \neg y z}$ l’est.

2. En déduire un algorithme pour résoudre 3-SAT. Soit $T(n)$ sa complexité, en fonction du nombre de variables
$n$. Montrer que $T(n) = \widetilde{\mathcal{O}}(1.84^n)$.

??? note "Solution"
    1. Par la question 3. nous savons que 

        $$
        \Phi\text{ SAT}\Leftrightarrow\Phi_x\text{ SAT}\vee\Phi_{|\neg x}\text{ SAT}
        $$

        Et de même,

        $$
        \Phi_{|\neg x}\text{ SAT}\Leftrightarrow\Phi_{|\neg xy}\text{ SAT}\vee\Phi_{|\neg x\neg y}\text{ SAT}
        $$

        Or comme $(x \vee y \vee z)$ est une clause de $\Phi$, $\Phi_{|\neg x\neg y}$ est satisfiable si et seulement si $\Phi_{|\neg x\neg yz}$ l'est. On a finalement :

        $$
        \begin{align}
        \Phi\text{ SAT} & \Leftrightarrow\Phi_x\text{ SAT}\vee\Phi_{|\neg x}\text{ SAT}\\
                        & \Leftrightarrow\Phi_x\text{ SAT}\vee\Phi_{|\neg xy}\text{ SAT}\vee\Phi_{|\neg x\neg y}\text{ SAT}\\
                        & \Leftrightarrow\Phi_x\text{ SAT}\vee\Phi_{|\neg xy}\text{ SAT}\vee\Phi_{|\neg x\neg yz}\text{ SAT}
        \end{align}
        $$

    2. Avec le résultat que nous venons de démontrer nous pouvons déduire un algorithme permettant de déterminer la satisfiabilité de $\Phi$. En particulier, on peut extraire la première clause de $\Phi$ est utiliser la disjonction de cas que nous venons de déterminer. Pour chaque cas nous retirons un certain nombre de variables de $\Phi$ et nous nous retrouvons avec la relation de récurrence suivante :

        $$
        T(n)\leq T(n-1)+T(n-2)+T(n-3)
        $$

        On veut trouver la forme explicite de la majoration de $T(n)$. Pour parvenir à cela, on extrait le polynôme caractéristique de la suite : $X^3 − X^2 − X − 1$.  Comme indiqué dans l'énoncé, ce polynôme admet une seule racine réelle $\alpha < 1.84$. On a alors $T(n) = \widetilde{\mathcal{O}}(1.84^n)$.

### Question 4
Soit $x$ une variable telle que le littéral $x$ et sa négation apparaissent tous les deux dans $\Phi$. En
considérant une nouvelle disjonction de cas, donner un algorithme plus efficace pour 3-SAT.

??? note "Solution"
    Soit $x$ une variable telle que les littéraux $x$ et $\neg x$ apparaissent dans $\Phi$. On peut alors prendre les deux clauses $(x\vee a\vee b)$ et $(\neg x\vee c\vee d)$ de $\Phi$ telle que $x$ et $\neg x$ apparaissent. Si on évalue $x$ à $1$, la clause contenant $x$ vaut $1$ et il ne reste plus qu'à vérifier l'autre clause. On a la relation de récurrence suivante : 

    $$
    \begin{align}
    \Phi\text{ SAT} & \Leftrightarrow \Phi_{x}\text{ SAT}\vee\Phi_{\neg x}\text{ SAT}\\
                    & \Leftrightarrow \Phi_{xc}\text{ SAT}\vee\Phi_{x\neg cd}\text{ SAT}\vee\Phi_{\neg xa}\text{ SAT}\vee\Phi_{\neg x\neg ac}\text{ SAT}
    \end{align}
    $$

    Pour chaque cas nous retirons un certain nombre de variables de $\Phi$ et nous nous retrouvons avec la relation de récurrence suivante :

    $$
    T(n)\leq 2T(n-2)+2T(n-3)
    $$

    On veut trouver la forme explicite de la majoration de $T(n)$. Pour parvenir à cela, on extrait le polynôme caractéristique de la suite : $X^3 − 2X − 2$.  Comme indiqué dans l'énoncé, ce polynôme admet une seule racine réelle $\beta < 1.77$. On a alors $T(n) = \widetilde{\mathcal{O}}(1.77^n)$.


!!! quote "Énoncé"
    La *distance de Hamming $h$* entre deux $n$-uplets de $\{0, 1\}^n$ est le nombre de positions où ils diffèrent.

    On considère un nouvel algorithme récursif pour 3-SAT qui ne modifie pas la formule $\Phi$, mais une
    valuation $f$ :

    $\text{Local}(\Phi,f,r)$

    1 : Si $f$ satisfait $\Phi$ renvoyer Vrai

    2 : Si $r = 0$ renvoyer Faux

    3 : Soient $x$, $y$, $z$ les variables de la première clause de $\Phi$ non satisfaite par $f$ (on aura pris un ordre arbitraire des clauses de $\Phi$)

    4 : Définir $f_x$ par : $\forall t \neq x, f_x(t) = f(t)$ et $f_x(x) = 1 − f(x)$

    5 : Définir $f_y$ par : $\forall t \neq y, f_y(t) = f(t)$ et $f_y(y) = 1 − f(y)$

    6 : Définir $f_z$ par : $\forall t \neq z, f_z(t) = f(t)$ et $f_z(z) = 1 − f(z)$

    7 : Si $\text{Local}(\Phi,f_x,r-1)=$Vrai renvoyer Vrai

    8 : Si $\text{Local}(\Phi,f_y,r-1)=$Vrai renvoyer Vrai

    9 : Renvoyer $\text{Local}(\Phi,f_z,r-1)$

### Question 5
1. Montrer que s’il existe une valuation qui satisfait $\Phi$ et qui est à distance de Hamming $\leq r$ de $f$ , $\text{Local}(\Phi,f,r)$ renvoie Vrai.

2. Donner un algorithme de complexité $\widetilde{\mathcal{O}}(3^{n/2})$ pour 3-SAT.

??? note "Solution"
    1. Posons $g$ une valuation qui satisfait $\Phi$ et notons $r$ la distance de Hamming de $f$ à $g$. Nous allons montrer cette assertion par récurrence sur $r$.

        - Initialisation :

            Si $r=0$, alors $f=g$. Nécessairement $\text{Local}(\Phi,f,r)$ renvoie Vrai.

        - Hérédité :

            Supposons que si la distance de Hamming de $f$ à $g$ est $\leq r$ alors $\text{Local}(\Phi,f,r)$ renvoie Vrai, avec $r\geq 0$.
            Montrons que c'est encore le cas pour $r+1$.

            Soit $f$ une valuation à distance de Hamming $\leq r+1$ de $g$. Si $f$ satisfait $\Phi$ alors $\text{Local}(\Phi,f,r+1)$ renvoie Vrai et c'est terminé. Cependant si $f$ ne satisfait pas $\Phi$ alors $\text{Local}(\Phi,f,r+1)$ crée trois nouvelles valuations $f_1$, $f_2$ et $f_3$ issues de $f$ dont il change une valeur. En changeant une valeur de $f$, une des valuations $f'$ s'est rapprochée de la solution $g$ et en est à une distance de Hamming $\leq r$. Par notre hypothèse de récurrence, $\text{Local}(\Phi,f',r)$ renvoie vrai.

    2. N'importe quelle valuation $f$ est à distance de Hamming $r\leq n/2$ soit de $f_0:(0,...,0)$ soit de $f_1:(1,..,1)$. Ainsi en appelant $\text{Local}(\Phi,f_0,r)$ et $\text{Local}(\Phi,f_1,r)$ nous sommes garantis de trouver une solution si elle existe. Chacun de ces appels est en $\widetilde{\mathcal{O}}(3^{n/2})$. La complexité globale de l'algorithme est donc en $\widetilde{\mathcal{O}}(3^{n/2})$.
 
### Question 6
1. Soit $V(r)$ le nombre de $n$-uplets de $\{0, 1\}^n$ à distance au plus $r$ d’un $n$-uplet donné. Soit $t \in \{0, 1\}^n$ fixé. Montrer qu’en choisissant $n2^n/V(r)$ $n$-uplets uniformément au hasard dans $\{0, 1\}^n$, la probabilité qu’aucun ne soit à distance au plus $r$ de $t$ (i.e., proche de $t$ d’une distance $r$) est bornée par $e^{−n}$.

2. En déduire un meilleur algorithme pour 3-SAT (avec une faible probabilité d’erreur).

!!! note "Solution"
    1. Soit $f$ un $n$-uplet aléatoire. On cherche $P(h(f,t)\leq r)$ avec $h(f,t)$ la distance de Hamming entre $f$ et $t$. Il existe $V(r)$ $n$-uplet différents à distance $\leq r$ de $t$ et il existe en tout $2^n$ $n$-uplet différents, ainsi,

        $$
        P(h(f,t)\leq r)=\frac{V(r)}{2^n}
        $$

        En choisissant $n2^n/V(r)$ $n$-uplets $f_1,...f_{n2^n/V(r)}$ uniformément au hasard dans ${0, 1}^n$, la probabilité qu’aucun ne soit à distance au plus $r$ de $t$ est :

        $$
        \begin{align}
        P(h(f_1,t)> r,...,h(f_{n2^n/V(r)},t)> r) & = (1-\frac{V(r)}{2^n})^{n2^n/V(r)}\\
                                                 & = (\frac{2^n-V(r)}{2^n})^{n2^n/V(r)}\\
                                                 & = (\frac{2^n}{2^n-V(r)})^{-n2^n/V(r)}\\
                                                 & = e^{-nlog ((\frac{2^n}{2^n-V(r)})^{2^n/V(r)}) }\\
                                                 & \leq e^{-n}
        \end{align}
        $$

    2. Avec ce résultat nous pouvons appliquer l'algorithme $\text{Local}$ avec une distance $r$ sur $n2^n/V(r)$ $n$-uplets différents pour presque garantir d'obtenir le résultat. Avec cette idée nous aurons une complexité de $\widetilde{\mathcal{O}}(\frac{2^n3^{r}}{V(r)})$. L'objectif étant maintenant de trouver une valeur optimale de $r$ pour minimiser la complexité.

        Commençons d'abord par évaluer $V(r)$. $V(r)$ compte le nombre de valuations différentes à distance $\leq r$ de n'importe quel $n$-uplet. En particulier pour un nombre $0\leq i\leq r$ de différences, il existe $\binom{n}{i}$ valuations possibles. Ainsi $V(r)=\sum_{i=0}^{n}\binom{n}{i}$.

        Asymptotiquement, comme $V(r)\geq\binom{n}{r}$ et en posant $r=\alpha n$ on a :

        $$
        V(\alpha n)\geq\frac{n!}{(\alpha n)!((1-\alpha)n)!}\sim \frac{n^n}{(\alpha n)^{\alpha n}((1-\alpha)n)^{(1-\alpha)n}}\sim \frac{1}{(\alpha^\alpha (1-\alpha)^{1-\alpha})^n}
        $$

        Or $\frac{1}{(\alpha^\alpha (1-\alpha)^{1-\alpha})^n}$ est maximal pour $\alpha=1/4$ et la complexité finale est :

        $$
        \widetilde{\mathcal{O}}(\frac{2^n3^{r}}{V(n/4)}) = \widetilde{\mathcal{O}}((\frac{3}{2})^n)
        $$