const { Sequelize, Model } = require("sequelize");

const database = new Sequelize({
  dialect: "postgres",
  host: "localhost",
  username: "postgres",
  password: "senai",
  port: "5432",
  database: "exercicio",
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
});

module.exports = database;
