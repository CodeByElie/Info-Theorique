# Polynôme

Plusieurs algorithmes et théorèmes se basent sur l'étude des polynômes. Nous allons donc construire une structure propre des polynômes, à la fois mathématiquement et informatiquement afin des les étudier correctement. 

!!! abstract "Définition"
    Un polynôme à coefficients dans $\mathbb{K}$ est une application $P : \mathbb{K}\mapsto\mathbb{K}$ telle que 

    $$
        \forall x \in\mathbb{K}, P(x)=\sum_{k=0}^n a_kx^k
    $$

    Avec $n\in\mathbb{N}$ et $(a_0,...,a_{n})\in\mathbb{K}^{n+1}$.

Nous observons assez simplement qu'un polynôme n'est en fait caractérisé que par ses coefficients et que sa fonction première est de s'évaluer pour différentes valeurs. Nous proposons donc une implémentation des polynômes en `Ocaml` :

=== "Ocaml"

    ```ocaml
    type 'a polynomial = 'a list

    let eval p x = 
        let rec eval_rec a pow acc =
            match a with
            | [] -> acc
            | c :: cs -> 
                eval_rec cs (pow*x) (acc + c*pow)
        in
        eval_rec p 1 0
    ```

C'est cette implémentation des polynômes qui sera utilisée dans les différents algorithmes.
