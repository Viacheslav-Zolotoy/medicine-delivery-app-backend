const { Store } = require("../models/store");
const { HttpError } = require("../helpers/HttpError");
const ctrlWrapper = require("../helpers/ctrlWrapper");

const getAllStore = async (req, res) => {
  const data = await Store.find({});
  if (!data) {
    throw HttpError(404, "Not found");
  }
  res.status(200).json({ code: 200, message: "ok", data });
};

module.exports = ctrlWrapper(getAllStore);
