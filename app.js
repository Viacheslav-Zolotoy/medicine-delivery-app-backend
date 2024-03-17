const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const shoppingCartRouter = require("./routes/shoppingCart");
const getAllMedicationsRouter = require("./routes/medications");
const shop = require("./routes/shop");
const getAllOrder = require("./routes/history");

app.use(cors());
app.use(express.json());

app.use("/api/shop", shop);
app.use("/api/medications", getAllMedicationsRouter);
app.use("/api/shoppingcart", shoppingCartRouter);
app.use("/api/history", getAllOrder);
app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

module.exports = app;
