const Sequelize = require("sequelize");
const connection = require("../database/database");

const Place = connection.define("place", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING, // varchar(255)
    allowNull: false,
  },
  contact: {
    type: Sequelize.STRING, // varchar(255)
  },
  opening_hours: {
    type: Sequelize.STRING, // varchar(255)
  },
  description: {
    type: Sequelize.STRING, // varchar(255)
  },
  latitude: {
    type: Sequelize.DECIMAL,
  },
  longitude: {
    type: Sequelize.DECIMAL,
  },
});

module.exports = Place;
