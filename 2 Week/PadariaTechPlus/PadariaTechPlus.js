function money() {
  let money = prompt(`Quanto dinheiro voce ira usar?`);
  let cash = money;
  return cash;
}

function foccaPrompt() {
  const foccacia = 18.0;
  let totalFocca = prompt(
    `Quantas Foccacias iras comprar? 
        (Digite em numeros)`
  );
  let totalFoccaPrice = `${totalFocca * foccacia}`;
  return totalFoccaPrice;
}

function coffeePrompt() {
  const coffee1kg = 5.0;
  let totalCoffee = prompt(
    `Quantos Kilos de Café iras comprar? 
          (Digite em numeros)`
  );
  let totalCoffeePrice = `${totalCoffee * coffee1kg}`;
  return totalCoffeePrice;
}
function sugarPrompt() {
  const sugar1kg = 6.45;
  let totalSugar = prompt(
    `Quantos Kilos de Açucar iras comprar? 
          (Digite em numeros)`
  );
  let totalSugarPrice = `${totalSugar * sugar1kg}`;
  return totalSugarPrice;
}
function eggPrompt() {
  const egg = 19.69;
  let totalEgg = prompt(
    `Quantas caixas de ovo iras comprar? 
          (Digite em numeros)`
  );
  let totalEggPrice = `${totalEgg * egg}`;
  return totalEggPrice;
}

function totalPurchase() {
  const totalPurchase =
    parseInt(foccaPrompt()).value +
    parseInt(eggPrompt()).value +
    parseInt(coffeePrompt()).value +
    parseInt(sugarPrompt()).value;
  return totalPurchase;
}

function endPurchase() {
  let result = document.getElementById("totalPurchase");
  const cash = money();
  const total = totalPurchase();

  if (cash > total) {
    result.innerText = `O total da sua compra deu R$${total}
    e o seu troco e R$${cash - total}.`;
  } else if (cash < total) {
    result.innerText = `Você não tem dinheiro o suficiente`;
  }
}
