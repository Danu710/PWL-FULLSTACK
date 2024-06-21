'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Siswa', [
      {
        nipd: '1234567890',
        nama_siswa: 'John Doe',
        kelas: 'XII IPA',
        kelamin: 'Laki-laki',
        tempat_lahir: 'Jakarta',
        tanggal_lahir: '2005-05-15',
        id_spp: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nipd: '0987654321',
        nama_siswa: 'Jane Doe',
        kelas: 'XI IPS',
        kelamin: 'Perempuan',
        tempat_lahir: 'Bandung',
        tanggal_lahir: '2004-08-20',
        id_spp: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Siswa', null, {});
  },
};
