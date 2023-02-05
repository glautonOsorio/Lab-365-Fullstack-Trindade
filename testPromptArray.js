// criando uma variavel de array para botar os nomes e depois fazendo um for loop com o prompt para saber os nomes dos alunos
let name = Array();
for (x = 0; x < 5; x++) {
  name[x] = prompt(`Qual o Nome do Aluno(a)?: `, "");
}

alert("Agora sera as Notas");
// A mesma coisa que o primeiro loop so que com os numeros
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
// Fui obrigado a botar o parseInt pois não estava contando como numero, talvez tenha outra maneira de fazer isso sem o parseInt
function uni(score, name) {
  if (score >= 1 && score <= 4) {
    return `${name} foi reprovado(a)`;
  } else if (score >= 5 && score <= 6) {
    return `${name} está de recuperação`;
  } else if (score >= 7 && score <= 10) {
    return `${name}  passou`;
  }
}
//Uma function que me deixa saber qual e a nota e nome do aluno pra saber se passou

alert(`A media dos alunos(a) em Ciência ${averageStudents} `);

alert(`O aluno(a) ${uni(number[0], name[0])}`);
alert(`O aluno(a) ${uni(number[1], name[1])}`);
alert(`O aluno(a) ${uni(number[2], name[2])}`);
alert(`O aluno(a) ${uni(number[3], name[3])}`);
alert(`O aluno(a) ${uni(number[4], name[4])}`);

alert(
  "Eu quebrei muito a cabeça pra fazer isso mas consegui de alguma forma yay"
);
// alert da felicidade
