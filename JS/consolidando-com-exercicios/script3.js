/*
  ### Sistema de gastos familia

  Crie um objeto que possuirá 2 propriedades, ambas do tipo array
    * receitas: []
    * despesas: []
  
  Agora, crie uma função que irá calcular o total de receitas e despesas
  e irá mostrar uma mensagem se a família está com saldo positivo ou
  negativo, seguido do valor do saldo
*/

// Seu saldo é positivo: 100R$

/*
  ### Sistema de gastos familia

  Crie um objeto que possuirá 2 propriedades, ambas do tipo array
    * receitas: []
    * despesas: []
  
  Agora, crie uma função que irá calcular o total de receitas e despesas
  e irá mostrar uma mensagem se a família está com saldo positivo ou
  negativo, seguido do valor do saldo
*/

let family = {
  receitas: [4000, 700, 300, 2000],
  despesas: [1000, 100, 3000, 500]
}

function sum(array) {
  let total = 0
  
  for (let number of array) {
    total += number
  }

  return total
}

function calculateBalance() {
  let totalReceitas = sum(family.receitas)
  let totalDespesas = sum(family.despesas)

  const total = totalReceitas - totalDespesas

  const itsOk = total >= 0

  let balanceText = "negativo"

  if (itsOk) balanceText = "positivo"

  return `Seu saldo é ${balanceText}: ${total.toFixed(2)}R$`
}

console.log(calculateBalance())
