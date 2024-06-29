// callback function

function forno(bolo, callback) {
  console.log(`Assando o bolo de ${bolo}`);
  console.log("Bolo assado");

  callback()
}

forno(
  "cenoura",
  () => {
    console.log("Tirando o bolo pronto do forno.")
    console.log("Bolo pronto.");
  }
)
