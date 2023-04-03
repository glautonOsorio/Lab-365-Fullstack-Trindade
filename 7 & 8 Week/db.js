const Sequelize = require("sequelize");
const sequelize = new Sequelize("exercicio", "postgres", /*Senha*/, {
  dialect: "postgres",
  host: "localhost",
  port: "5432",
});

module.exports = sequelize;
