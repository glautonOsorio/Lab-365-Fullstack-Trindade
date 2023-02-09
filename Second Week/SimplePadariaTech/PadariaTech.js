const breadQuantity = prompt(
  "Quantos Pães-Franceses você ira comprar? (Cada unidade tem o preço de R$0,40)."
);
let breadPrice = 0.4;

let quantity = breadQuantity;

for (i = 1; i < quantity; i++) {
  breadPrice[i];
}
document.write(
  `<h1>Você comprou ${quantity} unidades de pão-frances, no total sua compra deu R$${
    breadPrice * quantity
  }</h1>`
);
