//Exemplo 1: higher-order function

const calcularAnoDeNascimento = function (idade, mesDeNascimento, imprimir) {
  const mesAtual = 7;
  let anoDeNascimento = 2023 - idade;
  if (mesDeNascimento > mesAtual) anoDeNascimento--;

  imprimir(anoDeNascimento);
};

let imprimirAnoNascimento = anoDeNascimento => console.log('Você nasceu em ' + anoDeNascimento);

calcularAnoDeNascimento(25, 11, imprimirAnoNascimento);


//Exemplo 2: 

function multiplicar(multiplicador) {
    return function(numero) {
        return numero * multiplicador;
    };
}

let dobrar = multiplicar(2);
let triplicar = multiplicar(3);
let quadruplicar = multiplicar(4);

console.log(triplicar(4));