//Estrutura de um switch:

/*
switch (key) {
    case value:
        declaração;
        break;
    case value2:
        declaração;
        break;
    default:
        break;
}
*/

//Exemplo:

let nomeFilme = 'Jogos Mortais';

switch (nomeFilme) {
  case 'Vingadores':
    console.log('É o filme dos Vingadores');
    break;
  case 'Shrek':
    console.log('É o filme do Shrek');
    break;
  case 'Chaves':
    console.log('É o filme do Chaves');
    break;
  default:
    console.log('Filme não encontrado');
    break;
}

// o default é responsável em ter uma saída padrão para caso nenhum dos cases ditos seja "encontrado", funcionando de maneira similiar ao "else".

//Exemplo 2, utilizando multicases:

let avaliacao = 6;

switch (avaliacao) {
  case 1:
  case 2:
    console.log('Não assista esse filme!');
    break;
  case 3:
  case 4:
    console.log('Pode assistir, mas não é tão bom');
    break;
  case 5:
    console.log('Simplesmente a ELITE!!');
    break;
  default:
    console.log('Nota inválida');
    break;
}
