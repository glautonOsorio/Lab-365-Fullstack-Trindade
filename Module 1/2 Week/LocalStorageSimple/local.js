function addName() {
  const user = document.querySelector("#user").value;
  localStorage.setItem("nome1", user);
  console.log(user);
}

function removeName() {
  localStorage.removeItem("nome1");
}
