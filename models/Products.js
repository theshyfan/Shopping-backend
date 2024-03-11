const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    title: { type: String, reuqired: true },
    supplier: { type: String, reuqired: true },
    price: { type: String, reuqired: true },
    imageUrl: { type: String, reuqired: true },
    description: { type: String, reuqired: true },
    product_location: { type: String, reuqired: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
