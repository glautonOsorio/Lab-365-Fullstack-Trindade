require("dotenv").config();
const express = require("express");

const connection = require("./src/database/database");

const validateNewUser = require("./src/middlewares/validate-new-user");
const validateToken = require("./src/middlewares/validate-token");

const createPlace = require("./src/controllers/Places/createPlace");
const getPlace = require("./src/controllers/Places/getPlace");
const deletePlace = require("./src/controllers/Places/deletePlace");
const updatePlace = require("./src/controllers/Places/updatePlace");

const createUser = require("./src/controllers/User/createUser");
const createLogin = require("./src/controllers/User/createLogin");

const app = express();
app.use(express.json());

connection.authenticate();
connection.sync({ alter: true });

app.post("/places", validateToken, createPlace);
app.get("/places", validateToken, getPlace);
app.delete("/places/:id", validateToken, deletePlace);
app.put("/places/:id", validateToken, updatePlace);

app.post("/users", createUser);
app.post("/users/login", createLogin);

app.listen(3333, () => console.log("Aplicação online"));
