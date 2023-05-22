function organizeList() {
  let list = [
    "Pedro",
    "José",
    "Aderbal",
    "Danilo",
    "Luisa",
    "Vitoria",
    "Luis",
    "Danilo",
    "José",
  ];
  let newList = [...new Set(list)];

  let names = list.filter((name, names) => {
    return list.indexOf(name) !== names;
  });
  console.log(names, newList.sort());
}
organizeList();
