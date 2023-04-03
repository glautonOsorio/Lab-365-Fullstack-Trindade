const express = require("express");
const database = require("./src/database/database");
const models = require("./src/models/models");

const sequelize = require("sequelize");
const app = express();
app.use(express.json);

database.sync();
console.log("The connection has started brother");

app.listen(3333, () => console.log("Aplicação online"));
