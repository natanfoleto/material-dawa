// criar um aplicativo de frases motivacionais

console.log("Estudar é muito bom");
console.log("Paciência e persistencia");
console.log("Revisão é a mãe do aprendizado");

// poderia repetir as frases

console.log("Estudar é muito bom");
console.log("Paciência e persistencia");
console.log("Revisão é a mãe do aprendizado");


/* 
  A função explica o código, e faz com que podemos 
  reutiliza-los quando quiser
*/

// declaration - declaração da função
// function statement
function createPhrases() { // a função cria um novo escopo
  console.log("Estudar é muito bom");
  console.log("Paciência e persistencia");
  console.log("Revisão é a mãe do aprendizado");
}

// executar a função | rodar | execute | run | call | invoke

createPhrases()

console.log("Fim do programa");
