function coisas() {
  let userData = document.getElementById("userDate").value;
  let bDay = userData;
  let message = document.getElementById("message");

  const diffInMs = new Date(bDay) - new Date();
  const diffInDays = diffInMs / (1000 * 60 * 60 * 24);
  if (new Date(bDay) > new Date()) {
    message.innerHTML = `Falta ${parseInt(
      diffInDays
    )} dias para o seu aniversario`;
  } else {
    message.innerHTML = `Feliz Aniversario, você esta mais perto da sua morte :)`;
  }
}
