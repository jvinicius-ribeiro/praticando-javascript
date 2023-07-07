let playstation = {
    nome: 'Playstation',
    valor: 4000,
    disponibilidade: true,
};

let xbox = {
    nome: 'Xbox',
    valor: 3000,
    disponibilidade: true,
};

let nintendo = {
    nome: 'Nintendo DS',
    valor: 500,
    disponibilidade: false,
}

let videogames = [playstation, xbox, nintendo];

playstation.valor = 3500;
console.table(videogames);