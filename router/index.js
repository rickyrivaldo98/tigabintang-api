const express = require("express");
const router = express.Router();

const produkRouter = require("./produk");

router.use("/produk", produkRouter);

module.exports = router;
