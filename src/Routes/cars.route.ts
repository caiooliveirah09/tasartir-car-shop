import { Router } from 'express';
import CarsController from '../Controllers/CarsController';

const router = Router();

router.post('/', (req, res, next) => new CarsController(req, res, next).create());
router.get('/', (req, res, next) => new CarsController(req, res, next).find());
router.get('/:id', (req, res, next) => new CarsController(req, res, next).findById());
router.put('/:id', (req, res, next) => new CarsController(req, res, next).findByIdAndUpdate());

export default router;