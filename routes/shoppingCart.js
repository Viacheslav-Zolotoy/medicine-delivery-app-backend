const express = require("express");
const router = express.Router();
const createOrder = require("../controllers/order/create");
const { createOrderSchema } = require("../models/order");
const validateBody = require("../middlewares/validateBody");

router.post("/", validateBody(createOrderSchema), createOrder);

module.exports = router;
