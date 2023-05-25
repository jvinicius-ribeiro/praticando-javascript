//Aprendendo o uso de cada tipo de variável e exemplos de caso


// var permite que novos valores seram reatribuídos à variável,  enquanto const(constante) não permite.
// let também permite que novos valores possam ser reatribuídos.

if(true) {
    let a = 10;
    console.log(a);
};

if(true) {
    let b = 20;
}

console.log(b);

// o terminal será capaz de ler o valor de A, já que o console.log(a) está dentro do mesmo escopo. 
// porém, não será possível ler o valor de B, já que dessa vez, o console.log está fora, portanto, escopos diferentes.


if(true) {
    var c = 30;
}

console.log(c);

// console.log(c) pode ser lida, já que a variável var é possível de ser acessada mesmo fora do escopo que foi declarada.