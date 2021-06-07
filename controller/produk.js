const { createProduk, getAllData, updateProduk } = require("../service/produk");

exports.createProduk = async (req, res, next) => {
  try {
    const namaProduk = req.body.nama_produk;
    const deskripsiProduk = req.body.deskripsi_produk;
    const gambarProduk = req.body.gambar_produk;
    const linkTokopedia = req.body.link_tokopedia;
    const linkShoppe = req.body.link_shoppe;
    const kategori = req.body.kategori;

    const data = {
      nama_produk: namaProduk,
      deskripsi_produk: deskripsiProduk,
      gambar_produk: gambarProduk,
      link_tokopedia: linkTokopedia,
      link_shoppe: linkShoppe,
      kategori: kategori,
    };
    const produkData = await createProduk(data);
    res.status(200).json({
      success: true,
      message: "express testing success",
      data: produkData,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "express testing failed",
      data: "failed",
      error: err,
    });
  }
};

exports.getAllData = async (req, res, next) => {
  try {
    const produkData = await getAllData();
    res.status(200).json({
      success: true,
      message: "express testing success",
      data: produkData,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "express testing failed",
      data: "failed",
      error: err,
    });
  }
};

exports.updateData = async (req, res, next) => {
  try {
    const { id } = req.params;
    const namaProduk = req.body.nama_produk;

    const data = {
      nama_produk: namaProduk,
    };
    const produkData = await updateProduk(data, id);
    console.log(data, id);
    res.status(200).json({
      success: true,
      message: "express testing success",
      data: produkData,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "express testing failed",
      data: "failed",
      error: err,
    });
  }
};
