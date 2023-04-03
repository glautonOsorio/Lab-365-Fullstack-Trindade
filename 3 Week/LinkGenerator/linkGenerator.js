function linkGenerator() {
  let number = document.getElementById("number").value;
  let message = document.getElementById("message").value;
  let URL = "https://wa.me/";

  let endURL = `${URL}${number}?text=${message}`;
  document.getElementById("endURL").innerText = endURL;
}
console.log("yay");
