function addNames(...names) {
  let originalList = ["Pedro", "José", "Aderbal", "Danilo", "Luisa", "Vitoria"];
  console.log(originalList);

  let newList = ["Pedro", "José", "Aderbal", "Danilo", "Luisa", "Vitoria"];
  try {
    names.forEach((name) => {
      if (typeof name !== "string") {
        console.log(`Tem que ser um nome amiguinho`);
      } else if (newList.includes(name)) {
        console.log(`O nome em questão já exite`);
      } else {
        newList.push(name);
      }
    });
  } catch (error) {
    console.error(`Ocorreu um erro`);
  }
  console.log(newList);
}

addNames("Tsuda", "Yuki", "Kawasumi", "José", 2);
