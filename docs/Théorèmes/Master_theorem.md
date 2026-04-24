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

??? note "Démonstration"
    Montrons le résultat vrai pour tout $n\in\mathbb{N}$ de la forme $n=b^p$ avec $p\in\mathbb{N}$. La généralisation est ensuite immédiate.

    Le premier objectif est d'abord de montrer par récurrence sur $p$ que :

    $$
    T(b^p) = da^p+cb^{pk}\sum_{i=0}^{p-1}(\frac{a}{b^k})^i
    $$

    Cela nous permettra d'étudier la somme géométrique en fonction de la valeur de $\frac{a}{b^k}$.

    - Initialisation : 
    
        On a $T(b^0)=T(1)=d$ et $da^0+cb^{0\times k}\sum_{i=0}^{0-1}(\frac{a}{b^k})^i=d$.

    - Hérédité : 
        
        Supposons $T(b^p)=da^p+cb^{pk}\sum_{i=0}^{p-1}(\frac{a}{b^k})^i$ pour un certain rang $p\ge1$. On a :

        $$
        \begin{align}
        T(b^{p+1}) & = aT(b^p)+cb^{(p+1)k}\\
        & = a(da^p+cb^{pk}\sum_{i=0}^{p-1}(\frac{a}{b^k})^i)+cb^{(p+1)k}\\
        & = da^{p+1}+cab^{pk}\sum_{i=0}^{p-1}(\frac{a}{b^k})^i+cb^{(p+1)k}\\
        & = da^{p+1}+cb^{(p+1)k}(\frac{a}{b^k}\sum_{i=0}^{p-1}(\frac{a}{b^k})^i+1)\\
        & = da^{p+1}+cb^{(p+1)k}(\sum_{i=0}^{p-1}(\frac{a}{b^k})^{i+1}+1)\\
        & = da^{p+1}+cb^{(p+1)k}(\sum_{i=1}^{p}(\frac{a}{b^k})^i+1)\\
        & = da^{p+1}+cb^{(p+1)k}\sum_{i=0}^{p}(\frac{a}{b^k})^i\\
        \end{align}
        $$

    Par récurrence, l'égalité est vérifiée pour tout $p\in\mathbb{N}$.

    Soit $p\in\mathbb{N}$, comme démontré précédemment on a 

    $$
    T(b^p) = \delta(b^p)+cb^{pk}\gamma(b^p)
    $$

    avec $\delta(b^p)=da^p$ et $\gamma(b^p)=da^{p+1}+cb^{pk}\sum_{i=0}^{p-1}(\frac{a}{b^k})^i$.

    En particulier, $\delta(b^p)=da^p=db^{log_b(a^p)}=db^{plog_b(a)}=d(b^p)^{log_b(a)}=\Theta((b^p)^{log_b(a)})$.
    
    Nous pouvons commencer la disjonction de cas :

    - Si $a<b^k$, $\gamma(b^p)$ est bornée car c'est une somme géométrique de raison $\frac{a}{b^k}<1$. On a :

    $$
    T(b^p)=\delta(b^p)+cb^{pk}\gamma(b^p)=\Theta((b^p)^{log_b(a)})+\Theta((b^p)^{k})=\Theta((b^p)^{k})
    $$

    - Si $a=b^k$, $\gamma(b^p)=\sum_{i=0}^{p-1}1=p=log_b(b^p)$. On a :

    $$
    T(b^p)=\delta(b^p)+cb^{pk}\gamma(b^p)=\Theta((b^p)^{log_b(a)})+\Theta((b^p)^{k})log_b(b^p)=\Theta((b^p)^{k}log_b(b^p))
    $$

    - Si $a>b^k$, alors $\gamma(b^p)=\Theta(\frac{a^{p-1}}{b^{(p-1)k}})=\Theta(\frac{b^k}{a}\frac{a^p}{b^{pk}})=\Theta(\frac{a^p}{b^{pk}})$. Ainsi :
    
    $$
    \begin{align}
    cb^{pk}\gamma(b^p) & = \Theta(cb^{pk}\frac{a^p}{b^{pk}})\\
    & = \Theta(ca^p)\\
    & = \Theta(cb^{plog_b(a)})\\
    & = \Theta((b^p)^{log_b(a)})\\
    \end{align}
    $$

    On a alors :

    $$
    T(b^p)=\Theta((b^p)^{log_b(a)})+\Theta((b^p)^{log_b(a)})=\Theta((b^p)^{log_b(a)})
    $$


    Passons maintenant à la généralisation. 
    
    Soit $n\in\mathbb{N}$. Prenons $p\in\mathbb{N}$ tel que $b^p\leq n < b^{p+1}$. Par croissance de $T$ on a :

    $$
    T(b^p) \leq T(n) < T(b^{p+1})
    $$

    Or pour $f\in\{n\mapsto n^k,n\mapsto n^klog_b(n),n\mapsto n^{log_b(a)} \}$, $f(bn)=\Theta(f(n))$.
    Par encadrement suivant le cas,

    $$
    T(n)=\Theta(f(n))
    $$

    Ce qui conclut la démonstration.

Par exemple, l'algorithme de **Karatsuba** a un temps d'éxecution $T_K$ exprimé par la formule de récurrence suivante :

$$
T_K(n) = 3T_K(\frac{n}{2})+\Theta(n)
$$

On est dans le cas où $a=3$, $b=2$ et $k=1$. Comme $3>2^1$ (cas 3), on a :

$$
T_K(n)=\Theta(n^{log_2(3)})\simeq\Theta(n^{1,58})
$$

Autre exemple, le **tri fusion** a un temps d'éxecution $T_F$ exprimé par la formule de récurrence suivante :

$$
T_F(n) = 2T_F(\frac{n}{2})+\Theta(n)
$$

On est dans le cas où $a=2$, $b=2$ et $k=1$. Comme $2=2^1$ (cas 2), on a :

$$
T_F(n)=\Theta(nlog_2(n))
$$
