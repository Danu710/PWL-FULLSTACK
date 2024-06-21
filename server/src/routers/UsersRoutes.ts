import BaseRoutes from './BaseRouter';
import UsersControllers from '../controllers/UsersControllers';
import { auth } from '../middlewares/AuthMiddleware';

class UserRoutes extends BaseRoutes {
  public routes(): void {
    this.router.get('/', auth, UsersControllers.index);
    this.router.get('/:id', UsersControllers.show);
    this.router.post('/', UsersControllers.create);
    this.router.put('/:id', UsersControllers.update);
    this.router.delete('/:id', UsersControllers.destroy);
  }
}

export default new UserRoutes().router;
