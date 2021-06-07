'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class produk extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  produk.init({
    nama_produk: DataTypes.STRING,
    deskripsi_produk: DataTypes.STRING,
    gambar_produk: DataTypes.STRING,
    link_tokopedia: DataTypes.STRING,
    link_shoppe: DataTypes.STRING,
    kategori: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'produk',
  });
  return produk;
};