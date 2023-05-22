const express = require("express");
const addUser = require("./routes/routeUser");
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Bem vindo sir");
});

app.use(addUser);

app.listen(3333, () => {
  console.log("Servidor online!!!");
});
