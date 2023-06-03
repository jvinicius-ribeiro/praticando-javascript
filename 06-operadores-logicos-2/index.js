/* 
- && (and) -> sendo duas condições verdadeiras, a afirmação toda é  verdadeira.
- || (or) -> sendo uma das condições verdadeiras, a afirmação também é verdadeira.
- ! (not) -> sendo todas as condições falsas, a afirmação toda é falsa.
ps: ver tabela-verdade no notion.   
*/

// Usando o && (and)
{
  const a = 2;
  const b = 2;

  console.log(a === b && a <= b);
  // V e V = V

  console.log(a === b && a < b);
  // V e F = F, pois A não é menor que B, são iguais.

  console.log(a > b && a === b);
  // F e V = F, pois A não é maior que B, são iguais.

  console.log(a > b && a < b);
  // F e F = F, pois nem A é maior que B, nem B é maior que A. São iguais.
}

// Usando o || (or)
{
  const x = -5;
  const y = 12;

  if (x > 0 || y > 0) {
    console.log('Um dos componentes é maior ou igual à 1');
  } // F e V = V. Já que pelo menos um dos componentes é verdadeiro.
}

// Usando o ! (not)
{
  const p = 11;
  const q = 11;

  console.log(p === q); //true, pois de fato P e Q são idênticos.
  console.log(!(p === q)); //false, pois apesar de ser verdadeira a afirmação, estaremos invertendo o valor de true => false.
}
