# Master theorem

Le master theorem est un théorème essentiel permettant de donner efficacement la complexité d'un algorithme du type "diviser pour régner". Il est utile dans de nombreux cas mais ne permet pas de couvrir l'intégralité de ces algorithmes.

### Théorème
Soit $T : \mathbb{N}\mapsto\mathbb{R}_+$

```ocaml
let rec f n = f (n-1)
```

=== "C"

    ``` c
    #include <stdio.h>

    int main(void) {
      printf("Hello world!\n");
      return 0;
    }
    ```

=== "C++"

    ``` c++
    #include <iostream>

    int main(void) {
      std::cout << "Hello world!" << std::endl;
      return 0;
    }
    ```