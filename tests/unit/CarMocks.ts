const createCarInput = {
  model: 'Marea',
  year: 2002,
  color: 'Black',
  buyValue: 15.990,
  doorsQty: 4,
  seatsQty: 5,
};

const createCarInputWithStatus = {
  model: 'Marea',
  year: 2002,
  color: 'Black',
  status: true,
  buyValue: 15.990,
  doorsQty: 4,
  seatsQty: 5,
};

const oneCarInDB = {
  id: '63c8532f8f32e6aec4d1bb7b',
  model: 'Marea',
  year: 2002,
  color: 'Black',
  status: true,
  buyValue: 15.99,
  doorsQty: 4,
  seatsQty: 5,
};

const allCarsInDB = [
  { 
    id: '63c8532f8f32e6aec4d1bb7c',
    model: 'Marea',
    year: 2002,
    color: 'Black',
    status: true,
    buyValue: 15.990,
    doorsQty: 4,
    seatsQty: 5,
  },
  {
    id: '63c8532f8f32e6aec4d1bb7d',
    model: 'Tempra',
    year: 1995,
    color: 'Black',
    status: false,
    buyValue: 39.000,
    doorsQty: 2,
    seatsQty: 5,
  },
];

const correctCarId = '63c8532f8f32e6aec4d1bb7b';

const invalidCarId = 'INVALID_MONGO_ID';

const incorrectCarId = '1111222233330000ffffcccc';

export default { createCarInput, 
  createCarInputWithStatus, 
  oneCarInDB,
  allCarsInDB,
  correctCarId,
  invalidCarId,
  incorrectCarId };