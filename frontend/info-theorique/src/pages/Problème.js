import Enoncé from "../components/Enoncé";
import Question from "../components/Question";

export default function Problème() {

  return (
      <div className="px-6 max-w-5xl mx-auto py-10 w-full bg-green">
        <h1 className="text-2xl">Résolution du problème 3-SAT</h1>
        <h2>ENS - Oral Informatique 2024</h2>
        <div>
          <Enoncé text="Soit X un ensemble de variables qui seront notées avec des lettres minuscules : c, y, etc. Un littéral
est une variable x ou sa négation¬x. Une formule booléenne est en forme normale conjonctive (CNF)
si elle s’écrit sous la forme d’une conjonction de clauses, qui sont des disjonctions de littéraux. On
l’appellera alors « une CNF » par abus de langage, et de plus, une « 3-CNF » lorsque chaque clause
contient au plus trois littéraux. Une valuation est une fonction de X dans {0, 1}.
On considère le problème 3-SAT :
— Entrée : une 3-CNF contenant n littéraux et m clauses. On supposera m =O (n).
— Sortie : Vrai si la formule est satisfiable, Faux sinon.
On s’intéresse à des algorithmes eﬃcaces pour résoudre ce problème, en temps O (2αn)où α est une
constante et la notation O omet les facteurs polynomiaux en n." />
          <Question text="Donner un algorithme en temps O (2n)pour résoudre 3-SAT."/>
        </div>
      </div>
  );
}