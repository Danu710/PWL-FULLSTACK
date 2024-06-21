'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pembayaran extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Pembayaran.belongsTo(models.Siswa, {
        foreignKey: 'id_siswa',
      });
      Pembayaran.belongsTo(models.Spp, {
        foreignKey: 'id_spp',
      });
    }
  }
  Pembayaran.init(
    {
      id_siswa: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Siswa',
          key: 'id_siswa',
        },
      },
      nipd: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      tgl_bayar: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      bulan_bayar: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      id_spp: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Spp',
          key: 'id_spp',
        },
      },
      jumlah_bayar: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Pembayaran',
      tableName: 'pembayaran',
    }
  );
  return Pembayaran;
};
