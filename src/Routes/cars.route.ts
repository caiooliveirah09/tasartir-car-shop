import { Router } from 'express';
import CarsController from '../Controllers/CarsController';

const router = Router();

router.post('/', (req, res, next) => new CarsController(req, res, next).registerACar());

export default router;