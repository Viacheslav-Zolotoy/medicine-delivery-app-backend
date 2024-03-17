const { Schema, model } = require("mongoose");
const Joi = require("joi");

const medicineSchema = new Schema({
  medicineId: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    min: 1,
  },
  price: {
    type: Number,
    required: true,
  },
  imageUrl: {
    type: String,
  },
});

const orderSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for order"],
      minlength: 2,
      maxlength: 30,
    },
    email: {
      type: String,
      required: [true, "Set email for order"],
      unique: true,
    },
    phone: {
      type: Number,
      required: [true, "Set phone for order"],
      unique: true,
    },
    address: {
      type: String,
      required: [true, "Set address for delivery"],
    },
    medicines: [medicineSchema],
  },
  { versionKey: false, timestamps: true }
);

const Order = model("order", orderSchema);

const createOrderSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.number().required(),
  address: Joi.string().required(),
  medicines: Joi.array().items({
    medicineId: Joi.string().required(),
    quantity: Joi.number().integer().min(1).required(),
    price: Joi.number().required(),
    imageUrl: Joi.string().optional(),
  }),
});

module.exports = { Order, createOrderSchema };
