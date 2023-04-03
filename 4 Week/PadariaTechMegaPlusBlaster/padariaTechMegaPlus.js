class Padaria {
  constructor() {}
  addEstoque(newEstoque, produto) {
    localStorage.setItem(newEstoque, produto);
  }
  Compra(item, nome) {
    if (item == localStorage.getItem(nome)) {
      localStorage.removeItem(nome);
    } else {
      return console.log(`Nome do item não existe`);
    }
  }
}

const Tsuda = new Padaria();

console.log(Tsuda.addEstoque("Pão", "Focaccia"));
console.log(Tsuda.addEstoque("Bread", "Doce"));
console.log(Tsuda.Compra("Focaccia", "Pão"));
