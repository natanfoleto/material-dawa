// if...else

if (true) {
} else {
}

// Vamos fazer um programa pra medir febre

let temperatura = 36.5;

if (temperatura >= 37) {
  console.log("Está com febre");
} else {
  console.log("Está saudável");
}

// Poderia ou não usar o else

// Multi-condicionais

if (temperatura >= 37.5) {
  console.log("Febre alta");
} else if (temperatura > 36.5 && temperatura <= 37.5) {
  console.log("Febre moderada");
} else {
  console.log("Saudável");
}

// Podemos usar o if sem a parte do blooo { }

// Podemos também criar variáveis com as condicionais

let highTemperature = temperatura >= 37.5;
let mediumTemperature = temperatura >= 37 && temperatura < 37.5;

if (highTemperature) console.log("Febre alta");
else if (mediumTemperature) console.log("Febre moderada");
else console.log("Saudável");
