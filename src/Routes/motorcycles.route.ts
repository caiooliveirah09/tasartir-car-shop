import { Router } from 'express';
import MotorcyclesController from '../Controllers/MotorcyclesController';

const router = Router();

router.post('/', (req, res, next) => new MotorcyclesController(req, res, next).create());
router.get('/', (req, res, next) => new MotorcyclesController(req, res, next).find());
router.get('/:id', (req, res, next) => new MotorcyclesController(req, res, next).findById());
router.put('/:id', (req, res, next) => new MotorcyclesController(req, res, next)
  .findByIdAndUpdate());

export default router;