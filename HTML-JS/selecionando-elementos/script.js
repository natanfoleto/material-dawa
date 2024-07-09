// getElementById

const elementById = document.getElementById("logo") // Retorna um elemento

// getElementByClassName

const elementByClass = document.getElementsByClassName('one') // Retorna um HTMLCollection

// getElementByTagName

const elementByTagName = document.getElementsByTagName('h1') // Retorna um HTMLCollection

// querySelector - Retorna um elemento

const elementByQuerySelector = document.querySelector("p") // Retorna um elemento

// querySelectorAll

const elementByQuerySelectorAll = document.querySelectorAll('meta') // Retorna um NodeList

console.log(elementByQuerySelectorAll);

// Qual usar?

/* 
  Sabendo que o getElementsByClassName retorna um HTMLColletion
  e o querySelectorAll retorna um NodeList, no HTMLCollection
  não conseguimos usar um forEach, mas apaenas no NodeList que é
  retornado pelo querySelectorAll
*/
