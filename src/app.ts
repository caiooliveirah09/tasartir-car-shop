import express from 'express';
import carsRoute from './Routes/cars.route';

const app = express();

app.use(express.json());

app.use('/cars', carsRoute);

export default app;
