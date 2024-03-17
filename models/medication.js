const { Schema, model } = require("mongoose");

const medicationSchema = new Schema(
  {
    store: {
      type: String,
      require: true,
    },
    name: {
      type: String,
      require: true,
    },
    title: {
      type: String,
      require: true,
    },
    manufacturer: {
      type: String,
      require: true,
    },
    price: {
      type: Number,
      require: true,
    },
    quantity: {
      type: Number,
      require: true,
    },
  },
  { versionKey: false }
);

const Medications = model("medications", medicationSchema);

module.exports = Medications;
