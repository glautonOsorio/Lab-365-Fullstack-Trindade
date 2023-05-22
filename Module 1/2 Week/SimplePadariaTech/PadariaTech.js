alert(
  `Ola bem vindo a Pane-de-Garcia,escolha a quantidade de pão que iras comprar, temos Pão Frances,Pão Doce,Foccacia`
);
const breadNormal = prompt(
  "Quantos Pães-Franceses você ira comprar? (Cada unidade tem o preço de R$0,40)."
);

const breadSweet = prompt(
  "Quantos Pães-Doces você ira comprar? (Cada unidade tem o preço de R$0,90)."
);

const breadFocca = prompt(
  "Quantas Foccacias você ira comprar? (Cada unidade tem o preço de R$15.00)."
);

let breadNprice = 0.4 * breadNormal;

let breadSprice = 0.9 * breadSweet;

let breadFprice = 15.0 * breadFocca;

const totalPrice = breadFprice + breadNprice + breadSprice;

document.write(
  `<h1>Você comprou ${breadNormal} unidades de pão-frances,${breadSweet} unidades de Pão Doce e ${breadFocca} Foccacia,no total sua compra deu R$${totalPrice}</h1>`
);
