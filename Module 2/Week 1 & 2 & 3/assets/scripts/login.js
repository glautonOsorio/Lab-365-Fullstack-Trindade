function register() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  localStorage.setItem("User", username);
  localStorage.setItem("Password", password);

  window.location.href = "./Login.html";
}
function login() {
  let usuario = document.getElementById("username").value;
  let senha = document.getElementById("password").value;
  let user = localStorage.getItem("User");
  let userPassword = localStorage.getItem("Password");

  const dataUser = user;
  const dataUserPassword = userPassword;
  if (usuario == dataUser && senha == dataUserPassword) {
    window.location.href = "./Userinterface.html";
  } else {
    alert(`User or Password are wrong `);
  }
}

function remove() {
  localStorage.removeItem("User");
  localStorage.removeItem("Password");
}
