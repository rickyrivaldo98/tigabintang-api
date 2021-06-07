const router = require("express").Router();
const {
  createProduk,
  getAllData,
  updateData,
} = require("../controller/produk");

router.post("/", createProduk);
router.get("/", getAllData);
router.put("/:id", updateData);

module.exports = router;
