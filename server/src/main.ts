import express, { Application, Request, Response } from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import compressions from 'compression';
import cors from 'cors';
import helmet from 'helmet';
import UserRoutes from './routers/UsersRoutes';
import AuthRoutes from './routers/AuthRoutes';
import SiswaRoutes from './routers/SiswaRoutes';
import PembayaranRoutes from './routers/Pembayaran';
import SppRoutes from './routers/SppRoutes';
import { config as dotenv } from 'dotenv';

class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.plugins();
    this.routes();
    dotenv();
  }

  protected plugins(): void {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(morgan('dev'));
    this.app.use(compressions());
    this.app.use(helmet());
    this.app.use(cors());
  }

  protected routes(): void {
    this.app.get('/', (req: Request, res: Response) => {
      res.send('Hello, TypeScript with Express!');
    });

    this.app.use('/api/v1/users', UserRoutes);
    this.app.use('/api/v1/siswa', SiswaRoutes);
    this.app.use('/api/v1/spp', SppRoutes);
    this.app.use('/api/v1/pembayaran', PembayaranRoutes);
    this.app.use('/api/v1/auth', AuthRoutes);
  }
}

const port: number = 8000;
const app = new App().app;

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);

  console.log(process.env.DB_NAME);
});
