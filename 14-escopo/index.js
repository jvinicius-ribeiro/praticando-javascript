//Exemplo 1: Escopo de bloco
if (true) {
  const mensagem = 'Olá';
  console.log(mensagem);
}


//Exemplo 2: Escopo de bloco autônomo
{
  const mensagem = 'Olá';
  console.log(mensagem);
}
// caso tivesse um var, ele poderia ser lido, mas não é preferível utilizar const e let no código.


//Exemplo 3: Escopo de função
function falar() {
  var mensagem = 'Olá, mundo!';
  console.log(mensagem);   // será lido. 
}

falar();
// console.log(mensagem);     // não será lido


//Exemplo 4: Escopo Global

const nome = "Vinicius Ribeiro";

{
    console.log(nome);    //será lida, por que a variável nome está fora de qualquer escopo
}