const Place = require("../../models/place");

async function updatePlace(req, res) {
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
}

module.exports = updatePlace;
