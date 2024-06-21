import { Router } from 'express';
import Irouter from './RouteInterface';

abstract class BaseRoutes implements Irouter {
  public router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  abstract routes(): void;
}

export default BaseRoutes;
