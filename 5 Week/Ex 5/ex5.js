function countingVowels(text) {
  if (typeof text !== "string") return console.warn(`Use uma String amigo`);

  let result = text.toLowerCase();

  let numberV = result.match(/[aeiou]/gi);
  if (!numberV) return console.warn(`Não tinha vogais nessas palavras`);
  let countV = numberV.length;
  console.log(`Vogais:${numberV}, Numero de Vogais:${countV}`);
}

countingVowels("Hello eu amo a minha pika");
