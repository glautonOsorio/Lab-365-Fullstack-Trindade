(async () => {
  const database = require("./db");
  const Equipamento = require("./equip");
  await database.sync();

  /*const newJogo = await Equipamento.create({
    nome: "Resident Evil 4",
    franquia: "Resident Evil/Biohazard",
    empresa: "CAPCOM",
  });
  console.log(newJogo);*/
  const games = await Equipamento.findByPk(3);
  console.log(games);
  await games.destroy();
})();
