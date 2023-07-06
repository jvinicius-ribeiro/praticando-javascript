const frutas = ['uva', 'banana', 'maçã', 'laranja'];

// Adiciona elementos ao final um array
frutas.push('manga');

// Retira o último elemento de um array
frutas.pop();

// Retira o primeiro elemento de um array
frutas.shift();

// Adiciona um elemento no início de um array
frutas.unshift('morango');

console.log(frutas);

// Buscar a posição de um array:
let posicaoFruta = frutas.indexOf('laranja');

console.log(posicaoFruta);