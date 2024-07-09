// Eventos

function print() {
  console.log('clicou na função');
}

// Eventos de teclado

const input = document.querySelector('input')

// input.onkeydown = function() {
//   alert("Natan Foleto")
// }

// Eventos via JS

const h1 = document.querySelector('h1')

h1.addEventListener('click', print)

// Outra maneira de executar eventos

h1.onmouseleave = print

h1.onclick = () => {
  console.log('outro momento');
}


// dessa forma uma função sobrescreve a outra
// com addEventListener ele empilha as funções e executa as duas

// argumento event

input.onkeydown = function(event) {
  console.log(event);
  console.log(event.key);
  console.log(event.currentTarget);
  console.log(event.currentTarget.value);
}


