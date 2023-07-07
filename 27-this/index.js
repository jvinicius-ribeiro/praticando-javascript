'use strict';

console.log(this);
console.log(window);

this.name = 'Vinicius';

function saudar() {
    console.log('this no contexto da função', this);
    console.log('Olá, ' + this.name);
}

saudar();
