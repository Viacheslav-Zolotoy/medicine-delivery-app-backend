const HttpError = require("../../helpers/HttpError");
const ctrlWrapper = require("../../helpers/ctrlWrapper");
const { Order } = require("../../models/order");

const getAll = async (req, res) => {
  const { email = null, phone = null } = req.query;
  const filter = {};
  email && (filter.email = email);
  phone && (filter.phone = phone);
  const data = await Order.find(filter);
  if (!data) {
    throw HttpError(404, "Not found");
  }
  res.status(200).json({ code: 200, message: "ok", data });
};

module.exports = ctrlWrapper(getAll);
