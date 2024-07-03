/*
  Function() constructor

  * expressão new
  * criar um novo objeto
  * this keyword
*/

function Person(name) {
  this.name = name
  this.walk = function() {
    return this.name + 'andando'
  }
}

const natan = new Person("Natan")
const joao = new Person("João")

console.log(natan);
console.log(joao);

// poderia ter criado o objeto assim
const person = { name: 'Fulano' }

// mas toda vez que eu quiser adc uma propriedade nova
// vou ter que alterar todos os objetos

// com a function constructor é só eu adicionar uma vez dentro da função

console.log(natan.walk());


// quando não for uma função construtora usamos inicial minúscula
// se for construtora será maiúsculo
// porque no JS já temos diversas funções construtoras
// exemplo

const name = new String("Natan")
const date = new Date();

console.log(name);
console.log(date);

