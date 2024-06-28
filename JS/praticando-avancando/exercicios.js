// 1. Declare uma variável com nome weight, sem usar var
let weight

// 2. Que tipo de dado é a variável acima?
console.log(typeof weight)

/*
  3. Declare uma variável e atribua valores para
  cada um dos dados:

    * name: String
    * age: NUmber (integer)
    * stars: Number (float)
    * isSubscribed
*/

let name = "Natan"
let age = 23
let stars = 4.8
let isSubscribed = true

/*
  4. A variável student abaixo é que tipo de dados?

  4.1 Atribua a ela as mesmas propriedades e 
  valores do exercicio 3

  4.2 Mostre no console a seguinte mensagem

    <name> de idade <age> tem <weight> stars.

    Atenção, substitua <name> <age> e <weight> pelos
    valores de cada propriedade doo objeto
*/

let student = {
  name: "Natan",
  age: 23,
  stars: 4.8,
  isSubscribed: true
}

console.log(`
  ${student.name} de idade ${student.age} pesa ${student.stars} stars
`)

/*
  5. Declare uma variável do tipo Array, de nome
  students e atribua a ela nenhum valor, ou seja, 
  somente o Array vazio
*/

let students = []

/*
  6. Reatribua valor para a variável acima, colocando
  dentro dela o objeto student da questão 4. Não copiar
  e colar o objeto, mas usar o objeto criado e inserir ele
  no array
*/

students = [student]

console.log(students)

/*
  7. Coloque no console o valor da posição zero do
  Array acima
*/

console.log(students[0])

/*
  8. Crie um novo student e coloque na posição 1 do 
  Array students
*/

const newStudent = {
  name: "Fulano",
  age: 35,
  stars: 3.0,
  isSubscribed: false
}


students = [
  student,
  newStudent
]

// ou

students[1] = newStudent

console.log(students)

/*
  9. Sem rodar o código responda qual é a resposta do
  código abaixo e por que? Após sua resposta, rode o código
  e veja se você acertou.

  console.log(a)
  var a = 1
*/

console.log(a)
var a = 1




