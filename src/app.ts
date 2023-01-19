import express from 'express';
import carsRoute from './Routes/cars.route';
import motorcyclesRoute from './Routes/motorcycles.route';

const app = express();

app.use(express.json());

app.use('/cars', carsRoute);
app.use('/motorcycles', motorcyclesRoute);

export default app;
