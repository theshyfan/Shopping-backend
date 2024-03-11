const Product = require("../models/Products");

module.exports = {
  createProduct: async (req, res) => {
    const newProduct = new Product(req.body);
    console.log(newProduct);
    try {
      await newProduct.save();

      res.status(200).json("product created successfully");
    } catch (err) {
      res.status(500).json("failed to create the product");
    }
  },

  getAllProducts: async (req, res) => {
    console.log("getALLproducts");
    try {
      const products = await Product.find().sort({ createdAt: -1 });
      console.log(products);
      res.status(200).json(products);
    } catch (err) {
      res.status(500).json("failed to get the products");
    }
  },

  getProduct: async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
      res.status(200).json(product);
    } catch (err) {
      res.status(500).json("failed to get the product");
    }
  },

  searchProduct: async (req, res) => {
    try {
      const result = await Product.aggregate([
        {
          $search: {
            index: "furniture",
            text: {
              query: req.params.key,
              path: {
                wildcard: "*",
              },
            },
          },
        },
      ]);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json("failed to get the products");
    }
  },
};
