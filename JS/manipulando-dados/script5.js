// Manipulando Strings e Números

// Transformar um número quebrado com 2 casas decimais e trocar ponto por vírgula

let number = 654.654654

console.log(number.toFixed(2).replace(".", ","))

// ocorreu uma coersion, o JS forçou a troca de tipo desse number
