/*
Aprendendo o uso de cada tipo de variável e exemplos de caso:

- var e let permitem que novos valores seram re-atribuídos à variável, enquanto const (constante) não permite;
- sempre que possível, opte em usar const, em seguida let;
- apenas no pior dos casos, utilize o var, por não ser mais uma prática recomendada na programação em JS.
*/

//Como escrever variáveis (camelCase):

const nomePessoa = "José";
const emailCliente = "nome@email.com";
let valor = 0.99;
let idadeUsuario = 23;
var presencaAluno = true;

/*
Exemplo 1.
- let possui escopo LOCAL, portanto, a variável A PODE lida pelo console (já que estão no mesmo escopo);
- porém, a variável B não será lida, já que o console dirá que B não está definida;
- isso acontece por que B não está no mesmo escopo que o console.log(b).
*/

if (true) {
   let a = 10;
   console.log(a);
}

if (true) {
   let b = 20;
}

console.log(b);

/*
Ex. 2
- console.log(c) pode ser lida, já que a variável var é possível de ser acessada mesmo fora do escopo que foi declarada. Apesar de que o uso do var é o menos recomendado entre as três opções.
*/

if (true) {
   var c = 30;
}

console.log(c);

/*
Ex. 3
- valor de uma variável sendo re-atribuido com let;
*/

let nomePersonagem = "Pateta";
nomePersonagem = "Mickey";

console.log(nomePersonagem);
