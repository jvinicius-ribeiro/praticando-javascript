//utilizando: igual (a == b), idêntico (a === b), diferente (a != b) e não-idêntico (a !=== b).

{
  const a = 10;
  const b = 10;

  console.log(a == b); //true (conteúdo é igual)
  console.log(a === b); //true (idêntico, pois conteúdo e tipo são iguais)
}

{
  const x = '14';
  const y = 14;

  console.log(x == y); //true (igual, pois possuem o mesmo valor apesar de tipos diferentes)
  console.log(x === y); //false (o conteúdo até é igual, porém a tipagem do dado é diferente)
  console.log(x != y); //false, pois o conteúdo de X e Y é igual sim.
  console.log(x !== y); //true, pois de fato não são identicos, uma vez que o tipo é diferente.
}

//utilizando menor que (<), maior que (>), menor-ou-igual (<=) e maior-ou-igual(>=).

{
  const m = 9;
  const n = 12;

  console.log(m < n); //true, pois 9 é menor do que 12.
  console.log(m > n); //false, pois 9 NÃO é menor do que 12.
  console.log(m >= n); //false, pois 9 NÃO é menor e nem igual à 12.
}

{
  const r = 15;
  const s = 10;

  console.log(r > s); //true, pois 15 é maior do que 10;
  console.log(r < s); //false, pois 15 NÃO é menor do que 10;
  console.log(r <= s); //false, pois 15 é menor ou igual do que 10, nesse caso, é menor.
}

//
