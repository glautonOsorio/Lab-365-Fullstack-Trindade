class Conta {
  saldo;
  #senha;
  constructor(money, senha) {
    this.money = money;
    this.#senha = senha;
    this.value = 100;
  }
  get pass() {
    return this.#senha;
  }
  set senha(senha) {
    this.#senha = senha;
  }

  deposito() {
    if (this.#senha === "arroz") {
      return console.log(
        `Você acaba de depositar R$${this.money} e agora esta com R$${
          this.value + this.money
        } na sua conta`
      );
    } else {
      return console.log(`sua senha não esta correta `);
    }
  }

  retirar() {
    if (this.#senha === "arroz") {
      if (this.money <= this.value) {
        return console.log(
          `Você sacou R$${this.money} e soubrou na sua conta R$${
            this.value - this.money
          }`
        );
      } else {
        return console.log(`Você não tem como retirar essa quantidade`);
      }
    } else {
      return console.log(`sua senha não esta correta `);
    }
  }
}
/*let contaCorrente = new Conta(58, "arroz");
console.log(contaCorrente.deposito());
console.log(contaCorrente.retirar());*/

class contaPoupança extends Conta {
  constructor(value) {
    super(value);
  }

  aualizarJuros() {
    return console.log(
      `Agora você tem R$${
        this.value * 0.7
      } em sua conta no total foi addicionado R$${
        this.value * 0.7 - this.value
      } por conta dos juros`
    );
  }
}

let newConta = new contaPoupança();

console.log(newConta.aualizarJuros());
