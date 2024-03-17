const express = require("express");
const router = express.Router();
const getAllMedications = require("../controllers/medicationGetAll");

router.get("/", getAllMedications);

module.exports = router;
