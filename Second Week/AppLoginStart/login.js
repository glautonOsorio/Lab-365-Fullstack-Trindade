function logar() {
  let user = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  if (user == "admin" && password == "admin") {
    alert("logado");
  } else {
    alert(`User or password are wrong, please try again`);
  }
}
