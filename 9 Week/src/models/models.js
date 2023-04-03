const { Sequelize } = require("sequelize");
const database = require("../database/database");

const Place = database.define("places", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  phoneNumber: {
    type: Sequelize.NUMBER,
    allowNull: false,
  },
});
