function humanFruits() {
  let fruits = ["Banana", "Morango", "Maçã", "Uva", "Pêra", "Laranja"];
  let human = ["Pedro", "José", "Aderbal", "Danilo", "Luisa", "Vitoria"];
  fruits.reverse();

  let humanFruits = [];

  for (i = 0; i < human.length; i++) {
    humanFruits.push(human[i] + "-" + fruits[i]);
  }
  console.log(humanFruits);
}
humanFruits();
