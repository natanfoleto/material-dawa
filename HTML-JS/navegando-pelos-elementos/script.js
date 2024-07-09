// Navegando pelos elementos

// parentNode parentElement

const body = document.querySelector('body')

console.log(body.parentNode);
console.log(body.parentElement);

// childesNodes children

console.log(body.childNodes);

// firstChild firstElementChild

console.log(body.firstChild); // leva em consideração o espaço vazio
console.log(body.firstElementChild); // não considera o espaço, mas o primeiro filho

// lastChild lastElementChild

console.log(body.lastChild);  // leva em consideração o espaço vazio
console.log(body.lastElementChild); // não considera o espaço, mas o primeiro filho


// nextSibling nextElementSibling

console.log(body.nextSibling); // leva em consideração o espaço vazio
console.log(body.nextElementSibling); // não considera o espaço, mas o primeiro filho

// previousSibling previousElementSibling

console.log(body.previousSibling); // leva em consideração o espaço vazio
console.log(body.previousElementSibling); // não considera o espaço, mas o primeiro filho