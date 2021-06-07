const { produk } = require("../models");

exports.createProduk = async (data) => {
  try {
    await produk.create(data);

    // let produkData = await produk.findAll({});
    // return (produkData = JSON.parse(JSON.stringify(produkData)));
  } catch (err) {
    throw err;
  }
};

exports.getAllData = async () => {
  try {
    let produkData = await produk.findAll();
    return (produkData = JSON.parse(JSON.stringify(produkData)));
  } catch (err) {
    throw err;
  }
};

exports.updateProduk = async (data, id) => {
  try {
    await produk.update(data, { where: { id: id } });
    console.log(data, id);
    // let produkData = await produk.findAll({});
    // return (produkData = JSON.parse(JSON.stringify(produkData)));
  } catch (err) {
    throw err;
  }
};
