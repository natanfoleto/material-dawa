// Crie uma estrutura pra somar apenas números pares de 0 a 10

let soma = 0

for (let i = 0; i <= 10; i++) {
  const resto = i % 2

  if (!resto) {
    soma += i
  }
}

console.log(soma);
