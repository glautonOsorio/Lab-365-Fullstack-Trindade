let list = [
  { nome: "luis", idade: 26 },

  { nome: "norma", idade: 16 },

  { nome: "daiana", idade: 26 },

  { nome: "jorge", idade: 16 },

  { nome: "kauan", idade: 16 },

  { nome: "charles", idade: 26 },

  { nome: "marco", idade: 16 },

  { nome: "bruno", idade: 16 },
];

let adult = list.filter((grownUp) => grownUp.idade >= 18);
let minor = list.filter((notGrownUp) => notGrownUp.idade <= 18);

console.log(adult, minor);
