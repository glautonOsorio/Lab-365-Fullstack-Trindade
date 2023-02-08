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

console.log(
  `A media das aulas de História da Classe 101 é ${classHistoryScore}`
);
