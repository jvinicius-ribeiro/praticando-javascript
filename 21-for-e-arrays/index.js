let frutas = ['banana', 'maçã', 'laranja', 'pêra', 'uva'];
let tamanhoFrutas = frutas.length;


// Exemplo 1, utilizando o for
/*
for (let i = 0; i < tamanhoFrutas; i++) {
    console.log(frutas[i] + ' é uma fruta!');
}
*/


//Exemplo 2, utilizando o forEach

frutas.forEach(function (item, indice, array) {        // nesse exemplo, poderia apagar 'indice' e 'array'.
    console.log( item + ' é uma fruta!');
})
