class Person {
  constructor(name, age, height) {
    this.name = name;
    this.age = age;
    this.height = height;
  }
}

let hayami = new Person("Saori", 31, 1.64);
console.log(
  `Olá meu nome é ${hayami.name} eu tenho ${hayami.age} anos e minha altura é ${hayami.height}`
);

class Job extends Person {
  constructor(name, age, height, job) {
    super(name, age, height);
    this.job = job;
  }
}
let tsuda = new Job("Kenjiro", 51, 1.7, "Dublador");
console.log(
  `Olá meu nome é ${tsuda.name} eu tenho ${tsuda.age} anos e minha altura é ${tsuda.height} e sou um ${tsuda.job}`
);
