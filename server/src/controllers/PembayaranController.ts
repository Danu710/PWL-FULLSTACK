import { Request, Response } from 'express';
const { Siswa, Spp, Pembayaran } = require('../db/models');

class PembayaranController {
  index = async (req: Request, res: Response): Promise<Response> => {
    try {
      const pembayaran = await Pembayaran.findAll();
      return res.status(200).json(pembayaran);
    } catch (error: any) {
      return res
        .status(500)
        .json({ message: 'Error fetching pembayaran', error: error.message });
    }
  };

  create = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { id_siswa, nipd, tgl_bayar, bulan_bayar, id_spp, jumlah_bayar } =
        req.body;
      const pembayaran = await Pembayaran.create({
        id_siswa,
        nipd,
        tgl_bayar,
        bulan_bayar,
        id_spp,
        jumlah_bayar,
      });
      return res.status(201).json(pembayaran);
    } catch (error: any) {
      return res
        .status(500)
        .json({ message: 'Error creating pembayaran', error: error.message });
    }
  };
}

export default new PembayaranController();
