'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Spp extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Spp.hasMany(models.Siswa, {
        foreignKey: 'id_spp',
      });
      Spp.hasMany(models.Pembayaran, {
        foreignKey: 'id_spp',
      });
    }
  }
  Spp.init(
    {
      tahun: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      nominal: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Spp',
      tableName: 'spp',
    }
  );
  return Spp;
};
