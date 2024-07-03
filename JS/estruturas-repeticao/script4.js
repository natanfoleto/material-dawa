// Estrutura repetição
// for...in

let person = {
  name: "Natan",
  age: 23,
  weight: 70.5,
};

for (let property in person) {
  console.log(property);
  console.log(person[property]);
}
