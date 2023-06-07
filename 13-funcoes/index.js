//Estrutura de uma função:

/*
1) Declarar a função:

function nomeDaFunção() {
    bloco de execução;
}

2) Chamar a função:

nomeDaFunção();

*/

//Exemplo:
function incentivarAluno() {
  console.log('Parabéns, vc está progredindo!');
}

incentivarAluno();


//Exemplo 2:
function incentivarAluno(nomeAluno = 'Aluno') {  //default
  console.log('Parabéns, ' + nomeAluno + ' você está progredindo!');
}

incentivarAluno();
//incentivarAluno("Vinicius");


//Exemplo 3:
function subtrair(valorX, valorY) {
  console.log(valorX - valorY);
}

subtrair(10, 2);


//Exemplo 4:
function somar(valorA, valorB) {
  return valorA + valorB;
}

let resultadoSoma = somar(5, 2);
console.log(resultadoSoma);
