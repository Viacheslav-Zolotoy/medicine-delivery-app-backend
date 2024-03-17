const express = require("express");
const router = express.Router();
const getAllStore = require("../controllers/storeGetAll");

router.get("/", getAllStore);

module.exports = router;
