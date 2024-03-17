const { Schema, model } = require("mongoose");

const storeSchema = new Schema(
  {
    store: {
      type: String,
      required: true,
    },
  },
  { versionKey: false }
);

const Store = model("store", storeSchema);

module.exports = { Store };
