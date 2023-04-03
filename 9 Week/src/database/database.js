const Sequelize = require("sequelize");

const connection = new Sequelize({
  dialect: "postgres", // qual banco vai se conecta
  host: "localhost", // onde o banco está ?
  username: "postgres", //qual usuario
  password: "senai", // qual senha
  port: "5432", // qual porta
  database: "places", //qual nome de dados
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
});

module.exports = connection;
