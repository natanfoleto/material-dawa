/*
  Crie um algoritmo que transforme as notas do sistema
  numérico para sistema de notas em caracteres tipo A B C

  * de 90 para cima -   A
  * entre 80 - 89   -   B
  * entre 70 - 79   -   C
  * entre 60 - 69   -   D
  * menor que 60    -   F
*/

// Faça primeiro a lógica
// Depois passe para uma função

function scoreFinal(score) {
  if (score > 100 || score < 0) throw `A nota ${score} é invalida.`

  let scoreA = score >= 90
  let scoreB = score >= 80
  let scoreC = score >= 70
  let scoreD = score >= 60
  
  if (scoreA) {
    return "A"
  } else if (scoreB) {
    return "B"
  } else if (scoreC) {
    return "C"
  } else if (scoreD) {
    return "D"
  } else {
    return "F"
  }
}

const score = scoreFinal(75)

console.log(score);
