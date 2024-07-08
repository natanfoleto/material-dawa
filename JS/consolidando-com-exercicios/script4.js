/*
  ### Celsius em fahrenheit ou o contrário

  Crie uma função que receba uma string em celsius ou
  fahrenheit e faça a transformação de uma unidade para
  outra

  C = (F - 32) * 5/9

  F = C * 9/5 + 32
*/

// transformDegree('30C')

function transformDegree(degree) { // 86F
  const celsiusExists = degree.toUpperCase().includes("C") // false
  const fahrenheitExists = degree.toUpperCase().includes("F") // true

  if ((!celsiusExists && !fahrenheitExists) || (celsiusExists && fahrenheitExists)) {
    throw new Error("Grau não identificado.")
  }

  // fluxo ideal
  const degreeNumber = Number(degree.toUpperCase().replace("F", "")) // 86
  let formula = (fahrenheit) =>  (fahrenheit - 32) * 5/9 // (fahrenheit) =>  (fahrenheit - 32) * 5/9
  let degreeSign = 'C' // C

  // fluxo alternativo
  if (celsiusExists) {
    degreeNumber = Number(degree.toUpperCase().replace("C", ""))
    formula = (celsius) => celsius * 9/5 + 32 
    degreeSign = 'F'
  }

  return `${degree} em ${degreeSign} é ${formula(degreeNumber)}`
}

try {
  console.log(transformDegree('30C'))
} catch (error) {
  console.log(error);
}
