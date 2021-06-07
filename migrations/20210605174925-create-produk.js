'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('produks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nama_produk: {
        type: Sequelize.STRING
      },
      deskripsi_produk: {
        type: Sequelize.STRING
      },
      gambar_produk: {
        type: Sequelize.STRING
      },
      link_tokopedia: {
        type: Sequelize.STRING
      },
      link_shoppe: {
        type: Sequelize.STRING
      },
      kategori: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('produks');
  }
};