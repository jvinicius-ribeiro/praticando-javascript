// Exemplo 1:
/*
let soma = function (a, b) {
  return a + b;
};

console.log(soma(2, 5));
*/
let soma = (a, b) => a + b;
console.log(soma(2, 5));


// Exemplo 2:
/*
const incentivarEstudante = (nomeEstudante) => {
   console.log('Parabéns, ' + nomeEstudante + '!!');
 };
*/

const incentivarEstudante = (nomeEstudante) => console.log('Parabéns, ' + nomeEstudante + '!!');
incentivarEstudante('Vinicius');