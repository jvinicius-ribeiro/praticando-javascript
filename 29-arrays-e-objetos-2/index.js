// Exemplo 1:

let jogo1 = {
    nome: 'Final Fantasy',
};

let jogo2 = {
    nome: 'Fallout',
};

let jogo3 = {
    nome: 'FIFA 23',
};

let videogame = {
    nome: 'Xbox',
    valor: 3000,
    jogos: [jogo1, jogo2, jogo3],
};

//console.log(videogame);

//

//Exemplo 2:

let cliente = {
    nome: 'Vinicius',
    ultimoPedido: {
        produto: 'Xbox',
        valor: 3000,
        jogos: ['FIFA 23'],
    },
};

console.log(cliente.ultimoPedido.jogos);