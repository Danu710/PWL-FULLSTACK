import { Request, Response } from 'express';
const { User } = require('../db/models');

class AuthController {
  register = async (req: Request, res: Response): Promise<Response> => {
    let { username, password } = req.body;

    if (!User) {
      console.error('Users model is undefined');
      return res.status(500).json({
        message: 'Users model is not defined',
      });
    }

    try {
      const createdUser = await User.create({ username, password });
      return res.status(201).json(createdUser);
    } catch (error: any) {
      return res
        .status(500)
        .json({ message: 'Error creating user', error: error.message });
    }
  };

  login(req: Request, res: Response): Response {
    return res.send('');
  }
}

export default new AuthController();
