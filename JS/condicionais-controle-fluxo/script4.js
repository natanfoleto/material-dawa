// throw

// try...catch

// Exemplo throw
function sayMyName(name = "") {
  if (name === "") {
    // throw new Error("Nome é obrigatório");
    throw "Nome é obrigatório";
  }

  // caso der erro, esse console não será executado
  console.log(name);
}

// Exemplo try...catch
try {
  sayMyName();
} catch (e) {
  console.log(e);
}

console.log("após ao try/catch");

