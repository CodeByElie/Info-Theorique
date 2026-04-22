# Master theorem

Le **master theorem** est un théorème essentiel en vue d'établir la complexité d'algorithmes du type **"diviser pour régner"** (ou "divide and conqueer"). Ce théorème est très puissant mais ne permet tout de même pas de couvrir la totalité des algorithmes de ce type. 

En particulier ce théorème permet d'établir une comparaison asymptotique de la complexité d'un algorithme lorsque le nombre d'opérations $T$ de ce dernier est défini par une formule de récurrence de la forme :

$$
    T(n)=aT(\frac{n}{b})+f(n)
$$

avec $a\geq1$, $b\geq1$ et $f$ une fonction positive.

Pour mieux comprendre, on peut voir cette formule de récurrence de la manière qui suit : Nous sommes face à un problème de taille $n$ et par le paradigme "diviser pour régner", nous divisons ce problème en $a$ problèmes de taille $\frac{n}{b}$. Une fois ces sous-problèmes traités, nous combinons les informations en un temps $f(n)$. Des exemples seront présentés plus bas dans la page.

Pour l'instant, considérons le cas où $f$ est une fonction polynomiale de la forme $f(n)=cn^k$ avec $c>0$ et $k\geq0$. Lorsque $f$ est simplement asymptotiquement polynomial, nous pouvons nous en sortir avec des majorations.

!!! abstract "Théorème"
    Soit $T:\mathbb{N}\mapsto\mathbb{R}_+$ une fonction croissante.