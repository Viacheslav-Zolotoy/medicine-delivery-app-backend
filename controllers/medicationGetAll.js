const HttpError = require("../helpers/HttpError");
const ctrlWrapper = require("../helpers/ctrlWrapper");
const Medications = require("../models/medication");

const getAllMedications = async (req, res) => {
  const { store } = req.body;
  const { page = 1, limit = 5 } = req.query;
  const skip = (page - 1) * limit;
  const idStore = { store };
  const data = await Medications.find(idStore).skip(skip).limit(limit);
  const count = await Medications.countDocuments(idStore);

  if (!data) {
    throw HttpError(404, "Not found");
  }
  res.status(200).json({ code: 200, message: "ok", data, count });
};

module.exports = ctrlWrapper(getAllMedications);
