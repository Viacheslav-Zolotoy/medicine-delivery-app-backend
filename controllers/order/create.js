const { Order } = require("../../models/order");
const ctrlWrapper = require("../../helpers/ctrlWrapper");
const createOrder = async (req, res) => {
  const data = await Order.create({ ...req.body });
  res.status(201).json({ code: 201, message: "ok", data });
};

module.exports = ctrlWrapper(createOrder);
