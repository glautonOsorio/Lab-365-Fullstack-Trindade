const express = require("express");
const { json } = require("express");
const app = express();
app.use(express.json());

let ryuGa = [
  { name: "Yakuza 0" },
  { name: "Yakuza Kiwami" },
  { name: "Yakuza Kiwami 2" },
  { name: "Yakuza 3" },
];

app.get("/:nome", (req, res) => {
  res.send(`Rota de API criada pelo(a) ${req.params.nome}`);
});

app.get("/ryuGa", (req, res) => {
  return res.json(ryuGa);
});

app.listen(3333, () => {
  console.log("Servidor online!!!");
});
