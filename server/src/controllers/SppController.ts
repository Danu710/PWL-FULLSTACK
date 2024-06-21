import { Request, Response } from 'express';
const { Spp } = require('../db/models');

class SPPController {
  index = async (req: Request, res: Response): Promise<Response> => {
    try {
      const spp = await Spp.findAll();
      return res.status(200).json(spp);
    } catch (error: any) {
      return res
        .status(500)
        .json({ message: 'Error fetching spp', error: error.message });
    }
  };

  create = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { tahun, nominal } = req.body;
      const spp = await Spp.create({ tahun, nominal });
      return res.status(201).json(spp);
    } catch (error: any) {
      return res
        .status(500)
        .json({ message: 'Error creating spp', error: error.message });
    }
  };
}

export default new SPPController();
