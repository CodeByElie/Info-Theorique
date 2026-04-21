type 'a polynomial = 'a list

let eval p x = 
    let rec eval_rec a pow acc =
        match a with
        | [] -> acc
        | c :: cs -> 
            eval_rec cs (pow*x) (acc + c*pow)
    in
    eval_rec p 1 0