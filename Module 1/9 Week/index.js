const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const connection = require("./src/database/database");
const Place = require("./src/models/place");
const User = require("./src/models/user");

const app = express();
app.use(express.json());
connection.authenticate();
connection.sync({ alter: true });

app.post("/places", async (req, res) => {
  try {
    const data = {
      name: req.body.name,
      contact: req.body.contact,
      opening_hours: req.body.opening_hours,
      description: req.body.description,
      latitude: req.body.latitude,
      longitude: req.body.longitude,
    };

    const place = await Place.create(data);

    res.status(201).json(place);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "There was a error" });
  }
});

app.get("/places", async (req, res) => {
  try {
    const places = await Place.findAll();
    return res.json(places);
  } catch (error) {
    res.status(500).json({ message: "There was a error" });
  }
});

app.delete("/places/:id", async (req, res) => {
  try {
    await Place.destroy({ where: { id: parseInt(req.params.id) } });
    return res.status(200).json({ Message: "The place was deleted" });
  } catch (error) {
    return res.status(500).json({ message: "There was a error" });
  }
});

app.put("/places/:id", async (req, res) => {
  try {
    const placeData = await Place.findByPk(req.params.id);
    if (!placeData) {
      return res.status(404).json({ message: "Place not found" });
    }
    placeData.name = req.body.name;
    placeData.contact = req.body.contact;
    placeData.opening_hours = req.body.opening_hours;
    placeData.description = req.body.description;
    placeData.latitude = req.body.latitude;
    placeData.longitude = req.body.longitude;
    await placeData.save();
    res.json(placeData);
  } catch (error) {
    return res.status(500).json({ message: "There was a error" });
  }

  app.post("/places/users", async (req, res) => {
    try {
      const userInDatabase = await User.findOne({
        where: { email: req.body.email, username: req.body.username },
      });
      if (userInDatabase) {
        return res
          .status(403)
          .json({ message: "The Email or username is alredy in use" });
      }
      const hash = await bcrypt.hash(req.body.password, 10);

      const newUser = {
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: hash,
      };

      const user = await User.create(newUser);

      res.status(201).json(user);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Não conseguimos processar sua solicitação." });
    }
  });
});

app.listen(3333, () => console.log("Aplicação online"));
