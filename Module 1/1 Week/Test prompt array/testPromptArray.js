let name = Array();
for (x = 0; x < 5; x++) {
  name[x] = prompt(`Qual o Nome do Aluno(a)?: `, "");
}
alert("Agora sera as Notas");
let number = Array();
for (y = 0; y < 5; y++) {
  number[y] = prompt(`Qual a nota de cada aluno(a) em Ciência?: `, "");
}

let averageStudents =
  (parseInt(number[0]) +
    parseInt(number[1]) +
    parseInt(number[2]) +
    parseInt(number[3]) +
    parseInt(number[4])) /
  5;

function uni(score, name) {
  if (score >= 1 && score <= 4) {
    return `${name} foi reprovado(a)`;
  } else if (score >= 5 && score <= 6) {
    return `${name} está de recuperação`;
  } else if (score >= 7 && score <= 10) {
    return `${name}  passou`;
  }
}

alert(`A media dos alunos(a) em Ciência ${averageStudents} `);

alert(`O aluno(a) ${uni(number[0], name[0])}`);
alert(`O aluno(a) ${uni(number[1], name[1])}`);
alert(`O aluno(a) ${uni(number[2], name[2])}`);
alert(`O aluno(a) ${uni(number[3], name[3])}`);
alert(`O aluno(a) ${uni(number[4], name[4])}`);

alert(
  "Eu quebrei muito a cabeça pra fazer isso mas consegui de alguma forma yay"
);
