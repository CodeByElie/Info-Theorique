# Master theorem

Le **master theorem** est un théorème essentiel en vue d'établir la complexité d'algorithmes du type **"diviser pour régner"** (ou "divide and conqueer"). Ce théorème est très puissant mais ne permet tout de même pas de couvrir la totalité des algorithmes de ce type. 

En particulier ce théorème permet d'établir une comparaison asymptotique de la complexité d'un algorithme lorsque le nombre d'opérations $T$ de ce dernier est défini par une formule de récurrence de la forme :

$$
    T(n)=aT(\frac{n}{b})+f(n)
$$

avec $a\geq1$, $b\geq2$ des entiers et $f$ une fonction positive.

Pour mieux comprendre, on peut voir cette formule de récurrence de la manière qui suit : Nous sommes face à un problème de taille $n$ et par le paradigme "diviser pour régner", nous divisons ce problème en $a$ problèmes de taille $\frac{n}{b}$. Une fois ces sous-problèmes traités, nous combinons les informations en un temps $f(n)$. Des exemples seront présentés plus bas dans la page.

Pour l'instant, considérons le cas où $f$ est une fonction polynomiale de la forme $f(n)=cn^k$ avec $c>0$ et $k\geq0$ et où $T$ est une fonction croissante. Lorsque $f$ est simplement asymptotiquement polynomiale, nous pouvons nous en sortir avec des majorations que nous traiterons plus tard. La croissance de $T$ est, quant à elle, une supposition qui implique que plus la taille du problème est grande, plus le nombre d'opérations à effectuer l'est aussi. 

!!! abstract "Théorème"
    Soit $T:\mathbb{N^*}\mapsto\mathbb{R}_+$ une fonction croissante. On suppose qu'il existe des entiers $a\ge1$, $b\ge2$, $k\ge0$ et des réels $c,d>0$ tels que l'on ait :

    $$
    \left\{ 
        \begin{array}{lcl}
        T(1) = d \\ 
        T(n) = aT(\frac{n}{b})+cn^k\text{ pour $n=b^p$ avec $p\ge1$ un entier} \\
        \end{array}
    \right.
    $$

    Alors on la disjonction de cas suivante :

    - Si $a<b^k$ alors $T(n)=\Theta(n^k)$
    - Si $a=b^k$ alors $T(n)=\Theta(n^klog_b(n))$
    - Si $a>b^k$ alors $T(n)=\Theta(n^{log_b(a)})$

!!! note "Démonstration"
    Montrons le résultat vrai pour tout $n\in\mathbb{N}$ de la forme $n=b^p$ avec $p\in\mathbb{N}$. La généralisation est ensuite immédiate.

    Le premier objectif est d'abord de montrer par récurrence sur $p$ que :

    $$
    T(b^p) = da^p+cb^{pk}\sum_{i=0}^{p-1}(\frac{a}{b^k})^i
    $$

    Cela nous permettra d'étudier la somme géométrique en fonction de la valeur de $\frac{a}{b^k}$.

    - Initialisation : 
    
        On a $T(b^0)=T(1)=d$ et $da^0+cb^{0\times k}\sum_{i=0}^{0-1}(\frac{a}{b^k})^i=d$.

    - Hérédité : 
        
        Supposons $T(b^p)=da^p+cb^{pk}\sum_{i=0}^{p-1}(\frac{a}{b^k})^i$ pour un certain rang $p\ge1$.\\
        