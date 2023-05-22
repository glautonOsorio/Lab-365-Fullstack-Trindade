let students = {
  arc: {
    name: "Arcueid Brunestud",
    height: 1.67,
    age: 17,
    sex: "Feminino",
    history: 3,
    class: 101,
  },

  shi: {
    name: "Shiki Ryougi",
    height: 1.6,
    age: 19,
    sex: "Feminino",
    history: 8,
    class: 101,
  },

  aok: {
    name: "Aoko Aozaki",
    height: 1.63,
    age: 17,
    sex: "Feminino",
    history: 6,
    class: 101,
  },

  art: {
    name: "Artoria Pendragon",
    height: 1.54,
    age: 35,
    sex: "Feminino",
    history: 5,
    class: 101,
  },

  tsu: {
    name: "Kenjiro Tsuda",
    height: 1.7,
    age: 51,
    sex: "Masculino",
    history: 10,
    class: 101,
  },
};

let classHistoryScore =
  (students.arc.history +
    students.aok.history +
    students.art.history +
    students.shi.history +
    students.tsu.history) /
  5;

function nota(score, name) {
  if (score >= 1 && score <= 4) {
    return `${name} foi reprovado(a)`;
  } else if (score >= 5 && score <= 6) {
    return `${name} está de recuperação`;
  } else if (score >= 7 && score <= 10) {
    return `${name}  passou`;
  }
}

console.log(
  `A media das aulas de História da Classe 101 é ${classHistoryScore}`
);
console.log(`O aluno(a) ${nota(students.arc.history, students.arc.name)}`);
console.log(`O aluno(a) ${nota(students.aok.history, students.aok.name)}`);
console.log(`O aluno(a) ${nota(students.art.history, students.art.name)}`);
console.log(`O aluno(a) ${nota(students.shi.history, students.shi.name)}`);
console.log(`O aluno(a) ${nota(students.tsu.history, students.tsu.name)}`);
