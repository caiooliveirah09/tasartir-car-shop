const model = 'Honda Cb 600f Hornet';
const secondModel = 'Kawasaki Ninja H2R';

const createMotorcycleInput = {
  model,
  year: 2005,
  color: 'Yellow',
  buyValue: 30.000,
  category: 'Street',
  engineCapacity: 600,
};

const createMotorcycleInputWithStatus = {
  model,
  year: 2005,
  color: 'Yellow',
  status: true,
  buyValue: 30.000,
  category: 'Street',
  engineCapacity: 600,
};

const oneMotorcycleInDB = {
  id: '6348513f34c397abcad040b2',
  model,
  year: 2005,
  color: 'Yellow',
  status: true,
  buyValue: 30.000,
  category: 'Street',
  engineCapacity: 600,
};

const alteredMotorcycleInDB = {
  id: '6348513f34c397abcad040b2',
  model: secondModel,
  year: 2005,
  color: 'Yellow',
  status: true,
  buyValue: 30.000,
  category: 'Street',
  engineCapacity: 600,
};

const allMotorcyclesInDB = [
  { 
    id: '6348513f34c397abcad040b2',
    model,
    year: 2005,
    color: 'Yellow',
    status: true,
    buyValue: 30.000,
    category: 'Street',
    engineCapacity: 600,
  },
  {
    id: '63c8532f8f32e6aec4d1bb7d',
    model: secondModel,
    year: 2005,
    color: 'Yellow',
    status: true,
    buyValue: 30.000,
    category: 'Street',
    engineCapacity: 600,
  },
];

const correctMotorcycleId = '6348513f34c397abcad040b2';

const invalidMotorcycleId = 'INVALID_MONGO_ID';

const incorrectMotorcycleId = '1111222233330000ffffcccc';

const bodyForUpdateMotorcycleById = {
  model: secondModel,
  year: 2005,
  color: 'Black',
  status: true,
  buyValue: 30.000,
  category: 'Street',
  engineCapacity: 600,
};

export default { createMotorcycleInput, 
  createMotorcycleInputWithStatus, 
  oneMotorcycleInDB,
  allMotorcyclesInDB,
  correctMotorcycleId,
  invalidMotorcycleId,
  incorrectMotorcycleId,
  alteredMotorcycleInDB,
  bodyForUpdateMotorcycleById };