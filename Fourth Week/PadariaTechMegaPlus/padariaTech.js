class caixaRegistradora {
  constructor() {
    this.cliente = [];
    this.estoque = [];
    this.quantidade = [];
  }
  adicionarEstoque(codigo, nome, preço) {
    this.estoque.push(codigo);
    this.estoque.push(nome);
    this.estoque.push(preço);
    return this.estoque;
  }
  addNome(nome, dinheiro) {
    this.cliente.push(nome);
    this.cliente.push(dinheiro);

    return this.cliente;
  }
  iniciarAtendimento(nome) {
    if (nome == this.cliente[0]) {
      return console.log(`Bem vindo ${this.cliente[0]}`);
    } else {
      return console.log(`Nome do cliente está errado`);
    }
  }
  caixaRegistrador(codigo, quantidade) {
    if (codigo == this.estoque[0]) {
      console.log(`Você comprou ${this.quantidade[0]} de ${this.estoque[1]} `);
      return parseInt(this.quantidade.push(quantidade));
    } else {
      return console.log(`Seu codigo esta errado`);
    }
  }
  clienteDinheiro() {
    return this.cliente[1];
  }
  fecharConta() {
    return console.log(
      `Sua compra deu R$${
        this.estoque[2] * this.quantidade[0]
      }, seu troco é de R$${
        parseInt(this.cliente[1]) - this.estoque[2] * this.quantidade[0]
      }`
    );
  }
}

const manoel = new caixaRegistradora();

console.log(manoel.adicionarEstoque(542613, "Pão Doce", 4.59));
console.log(manoel.addNome("Roberto", 100));
console.log(manoel.iniciarAtendimento("Roberto"));
console.log(manoel.caixaRegistrador(542613, 3));
console.log(manoel.fecharConta());
