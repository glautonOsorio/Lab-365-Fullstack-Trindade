const Place = require("../../models/place");

async function getPlace(req, res) {
  try {
    const places = await Place.findAll();
    return res.json(places);
  } catch (error) {
    res.status(500).json({ message: "There was a error" });
  }
}

module.exports = getPlace;
