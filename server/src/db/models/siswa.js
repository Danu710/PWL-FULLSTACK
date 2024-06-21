'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Siswa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Siswa.belongsTo(models.Spp, {
        foreignKey: 'id_spp',
      });
      Siswa.hasMany(models.Pembayaran, {
        foreignKey: 'id_siswa',
      });
    }
  }
  Siswa.init(
    {
      nipd: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      nama_siswa: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      kelas: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      kelamin: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      tempat_lahir: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      tanggal_lahir: {
        type: DataTypes.DATEONLY,
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
    },
    {
      sequelize,
      modelName: 'Siswa',
      tableName: 'siswa',
    }
  );
  return Siswa;
};
