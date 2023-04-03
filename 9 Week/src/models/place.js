const Sequelize = require("sequelize");
const connection = require("../database/database");

const Place = connection.define("place", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  contact: {
    type: Sequelize.STRING,
  },
  opening_hours: {
    type: Sequelize.STRING,
  },
  description: {
    type: Sequelize.STRING,
  },
  latitude: {
    type: Sequelize.DECIMAL,
  },
  longitude: {
    type: Sequelize.DECIMAL,
  },
});

module.exports = Place;
