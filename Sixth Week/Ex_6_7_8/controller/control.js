const fs = require("fs");
const { parse } = require("path");
const usersJson = require("../routes/users.json");

let usersId = usersJson.map((userID) => userID.id);
let idMax = Math.max(...usersId);

const getUsers = (_, res) => {
  res.status(200).json(usersJson);
};

const getId = (req, res) => {
  let requestId = parseInt(req.params.id);
  let findUser = usersJson.find((user) => user.id === requestId);

  if (findUser == undefined) {
    res.status(400).send("O id do usuário não foi encontrado");
  } else {
    res.status(200).json(findUser);
  }
};

let leader = (req, res, next) => {
  if (req.body.position.toLowerCase() !== "leader") {
    res.status(400).send("Apenas o lider pode adicionar usuários");
  } else {
    next();
  }
};

let addUser = (req, res) => {
  let newUser = req.body;

  if (
    newUser.name.lenght > 0 &&
    newUser.carrer.lenght > 0 &&
    newUser.pass.lenght > 0
  )
    if (newUser.age >= 21) {
      let newId = idMax + 1;
      usersJson.push({
        name: newUser.name,
        carrer: newUser.carrer,
        id: newId,
        pass: newUser.pass,
      });
      res
        .status(200)
        .send(`${newUser.name} foi adicionado ao Json com sucesso`);

      idMax = newId;
    } else {
      req
        .status(400)
        .send(
          "Você e menor de idade please volte quando for adulto amiguinho!"
        );
    }
  else {
    req.status(400).send("Dados insuficientes amiguinho");
  }
};

const killUser = (req, res) => {
  let requestId = parseInt(req.params.id) || null;

  if (requestId > 0 || requestId != null) {
    let findUser = usersJson.find((userID) => userID.id === requestId);

    let deleteUser = usersJson.indexOf(findUser);

    if (deleteUser > -1) {
      const nameDelete = usersJson.name;
      usersJson.splice(deleteUser, 1);
      res.status(200).send(`O ${nameDelete} foi deletado`);
    } else if (requestId !== findUser) {
      res.status(400).send("ID do usuário não encontrado");
    } else {
      res.status(406).send("Coloque um ID amiguinho");
    }
  }
};

module.exports = {
  getUsers,
  getId,
  leader,
  addUser,
  killUser,
};
