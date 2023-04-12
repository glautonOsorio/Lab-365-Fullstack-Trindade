const Place = require("../../models/place");

async function deletePlace(req, res) {
  try {
    await Place.destroy({ where: { id: parseInt(req.params.id) } });
    return res.status(200).json({ Message: "The place was deleted" });
  } catch (error) {
    return res.status(500).json({ message: "There was a error" });
  }
}

module.exports = deletePlace;
