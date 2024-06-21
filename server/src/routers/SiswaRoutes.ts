import BaseRoutes from './BaseRouter';
import SiswaController from '../controllers/SiswaController';
import { auth } from '../middlewares/AuthMiddleware';

class SiswaRoutes extends BaseRoutes {
  public routes(): void {
    this.router.get('/', SiswaController.index);
    this.router.get('/:id', SiswaController.show);
    this.router.post('/', SiswaController.create);
    this.router.put('/:id', SiswaController.update);
    this.router.delete('/:id', SiswaController.destroy);
  }
}

export default new SiswaRoutes().router;
