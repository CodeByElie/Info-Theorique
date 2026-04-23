# Karatsuba

L'algorithme de <strong>Karatsuba</strong> est un algorithme de type "diviser pour régner" initialement conçu pour multiplier rapidement deux grands nombres entiers. Cependant, son principe s'étend bien au-delà : il permet aussi de multiplier efficacement des polynômes et des matrices, en adaptant simplement la décomposition des objets à multiplier.

## Principe

Nous disposons de deux nombres entiers $x\geq0$ et $y\geq0$ codés sur $n\geq0$ bits. En particulier $x=\sum_{k=0}^{n-1}x_k2^k$ et $y=\sum_{k=0}^{n-1}y_k2^k$ avec $\forall k\in\{0,...,n-1\}, x_k,y_k\in\{0,1\}$.

Nous souhaitons effectuer la multiplication des deux entiers $x$ et $y$. Avec leur expression en somme de puissances de $2$ on obtient :

$$
\begin{align}
xy & = (\sum_{k=0}^{n-1}x_k2^k)(\sum_{k=0}^{n-1}y_k2^k) \\
& = (\sum_{k=0}^{n-1}\sum_{k'=0}^{n-1}y_{k'}2^{k'}x_k2^k) \\
& = (\sum_{k=0}^{n-1}\sum_{k'=0}^{n-1}x_{k}y_{k'}2^{k+k'}) \\
\end{align}
$$

L'évaluation naïve de cette somme requiert d'effectuer $n^2$ fois la multiplication de bits centrale. La complexité de l'algorithme naïf est donc en $\theta(n^2)$.

La décomposition de Karatsuba apparaît alors lorsque l'on cherche à réduire cette complexité. En posant $x=a2^{\lceil\frac{n}{2}\rceil}+b$ et $y=c2^{\lceil\frac{n}{2}\rceil}+d$. On obtient 

$$
\begin{align}
xy & = (a2^{\lceil\frac{n}{2}\rceil}+b)(c2^{\lceil\frac{n}{2}\rceil}+d) \\
& = 
\end{align}
$$