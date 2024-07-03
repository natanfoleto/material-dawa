/*
  (nós) explicitamente             (JS) implicitamente
  Type conversion (typecasting) vs Type coersion

  * Alteração de um tipo de dado para outro tipo
*/

console.log('9' + 5); // soma ou concatenação?

// Como temos no console dois valores um sendo string e o outro number
// o JS converteu através do coersion o 5 do tipo number para string
// para conseguir concatenar os dois valores

// agora vamos usar a conversion

console.log(Number('9') + 5)
