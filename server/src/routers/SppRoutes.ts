import BaseRoutes from './BaseRouter';
import SppController from '../controllers/SppController';

class SppRoutes extends BaseRoutes {
  public routes(): void {
    this.router.get('/', SppController.index);
    this.router.post('/', SppController.create);
  }
}

export default new SppRoutes().router;
