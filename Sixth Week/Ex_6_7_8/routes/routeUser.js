const express = require("express");
const router = express.Router();
const control = require("../controller/control");

router.get("/getUsers", control.getUsers);
router.get("/getUsersID/:id", control.getId);
router.post("/addUser/", control.leader, control.addUser);
router.post("/deleteUser/:id", control.killUser);

module.exports = { router };
