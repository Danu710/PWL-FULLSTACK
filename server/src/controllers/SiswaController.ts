import { Request, Response } from 'express';
const { Siswa, Spp, Pembayaran } = require('../db/models');

class SiswaController {
  index = async (req: Request, res: Response): Promise<Response> => {
    try {
      const siswa = await Siswa.findAll({
        include: [
          {
            model: Spp,
          },
          {
            model: Pembayaran,
          },
        ],
      });
      return res.status(200).json(siswa);
    } catch (error: any) {
      return res
        .status(500)
        .json({ message: 'Error fetching siswa', error: error.message });
    }
  };

  create = async (req: Request, res: Response): Promise<Response> => {
    try {
      const {
        nipd,
        nama_siswa,
        kelas,
        kelamin,
        tempat_lahir,
        tanggal_lahir,
        id_spp,
      } = req.body;

      const siswa = await Siswa.create({
        nipd,
        nama_siswa,
        kelas,
        kelamin,
        tempat_lahir,
        tanggal_lahir,
        id_spp,
      });
      return res.status(201).json(siswa);
    } catch (error: any) {
      return res
        .status(500)
        .json({ message: 'Error creating siswa', error: error.message });
    }
  };

  show = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { id } = req.params;
      const siswa = await Siswa.findByPk(id, {
        include: [
          {
            model: Spp,
          },
          {
            model: Pembayaran,
          },
        ],
      });
      return res.status(200).json(siswa);
    } catch (error: any) {
      return res
        .status(500)
        .json({ message: 'Error fetching siswa', error: error.message });
    }
  };

  update = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { id } = req.params;
      const {
        nipd,
        nama_siswa,
        kelas,
        kelamin,
        tempat_lahir,
        tanggal_lahir,
        id_spp,
      } = req.body;
      const siswa = await Siswa.findByPk(id);
      if (!siswa) {
        return res.status(404).json({ message: 'Siswa not found' });
      }

      await siswa.update({
        nipd,
        nama_siswa,
        kelas,
        kelamin,
        tempat_lahir,
        tanggal_lahir,
        id_spp,
      });

      return res.status(200).json(siswa);
    } catch (error: any) {
      return res
        .status(500)
        .json({ message: 'Error updating siswa', error: error.message });
    }
  };

  destroy = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { id } = req.params;
      const siswa = await Siswa.findByPk(id);
      if (!siswa) {
        return res.status(404).json({ message: 'Siswa not found' });
      }
      await siswa.destroy();
      return res.status(200).json({ message: 'Siswa deleted successfully' });
    } catch (error: any) {
      return res
        .status(500)
        .json({ message: 'Error deleting siswa', error: error.message });
    }
  };
}

export default new SiswaController();
