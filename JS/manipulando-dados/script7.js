// Manipulando Strings e Números

// Separe um texto que contém espaços, em um novo array onde cada texto é uma posição do array. 
// Depois disso, transforme o array em um texto e onde eram espaços, coloque _

let phrase = "Programação é a arte de criar o que quiser"

let myArray = phrase.split(" ")

console.log(myArray);

let phraseWithUnderscore = myArray.join("_")

console.log(phraseWithUnderscore)

// posso fazer mais isso também
console.log(phraseWithUnderscore.toLocaleUpperCase());
