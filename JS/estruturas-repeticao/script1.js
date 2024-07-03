// Estrutura repetição
// for

// for(inicialização de uma variável; condição de continuação para o loop; expressão final)

for (let i = 0; i < 10; i++) {
  // posso parar a execução do for
  if (i === 5) {
    break;
  }

  // posso ignorar a execução dessa rodada
  if (i === 5) {
    continue;
  }

  console.log(i);
}
