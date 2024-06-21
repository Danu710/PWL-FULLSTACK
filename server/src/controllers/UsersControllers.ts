import { Request, Response } from 'express';
import Icontroller from './ControllersInterface';

let data: any[] = [
  {
    id: 1,
    name: 'John',
  },
  {
    id: 2,
    name: 'Doe',
  },
];

class UsersControllers implements Icontroller {
  index(req: Request, res: Response): Response {
    console.log('ini adalah index users');
    return res.send(data);
  }

  create(req: Request, res: Response): Response {
    const { id, name } = req.body;

    data.push({ id, name });

    return res.send('create success');
  }

  show(req: Request, res: Response): Response {
    const { id } = req.params;

    let result = data.find((item) => item.id == id);

    return res.send(result);
  }

  update(req: Request, res: Response): Response {
    const { id } = req.params;
    const { name } = req.body;

    let result = data.find((item) => item.id == id);
    result.name = name;

    return res.send('update success');
  }

  destroy(req: Request, res: Response): Response {
    const { id } = req.params;

    data = data.filter((item) => item.id != id);

    return res.send('destroy success');
  }
}

export default new UsersControllers();
