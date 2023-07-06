// Estrutura de um Splice:

// arr.splice(inicio, delete_count);

let frutas = ['Banana', 'Maçã', 'Uva','Manga'];

// let frutasExtraidas = frutas.splice(1, 2);
// console.log(frutasExtraidas);

console.log(frutas);

let trocarFrutas = frutas.splice(1, 2, 'Goiaba', 'Abacaxi');

console.log(frutas);