const Sequelize = require("sequelize");

const connection = new Sequelize({
  dialect: "postgres",
  host: "localhost",
  username: "postgres",
  password: "senai",
  port: "5432",
  database: "places",
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
});

module.exports = connection;
