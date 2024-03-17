const express = require("express");
const router = express.Router();
const getAllOrder = require("../controllers/order/getAll");

router.get("/", getAllOrder);

module.exports = router;
