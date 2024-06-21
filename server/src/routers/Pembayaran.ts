import BaseRoutes from './BaseRouter';
import PembayaranController from '../controllers/PembayaranController';

class SppRoutes extends BaseRoutes {
  public routes(): void {
    this.router.get('/', PembayaranController.index);
    this.router.post('/', PembayaranController.create);
  }
}

export default new SppRoutes().router;
