import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import IController from '../Interfaces/IController';
import CarODM from '../Models/CarODM';
import StatusHTTP from '../utils/StatusHTTP';

export default class CarsService {
  public createCarDomain(car: ICar | null) : Car | null {
    if (car) return new Car(car);
    return null;
  }

  public async create(car: ICar): Promise<IController> {
    const carODM = new CarODM();
    const newCar = await carODM.create(car);
    return { status: StatusHTTP.CREATED, message: this.createCarDomain(newCar) };
  }

  public async find(): Promise<IController> {
    const carODM = new CarODM();
    const allCars = await carODM.find();
    return { status: StatusHTTP.OK, message: allCars.map((car) => this.createCarDomain(car)) };
  }

  public async findById(id: string): Promise<IController> {
    try {
      const carODM = new CarODM();
      const oneCar = await carODM.findById(id);
      if (!oneCar) return { status: StatusHTTP.NOT_FOUND, message: 'Car not found' };
      return { status: StatusHTTP.OK, message: this.createCarDomain(oneCar) };
    } catch (error) {
      return { status: StatusHTTP.UNPROCESSABLE_ENTITY, message: 'Invalid mongo id' };
    }
  }

  public async findByIdAndUpdate(id: string, update: ICar): Promise<IController> {
    try {
      const carODM = new CarODM();
      const carUpdated = await carODM.findByIdAndUpdate(id, update);
      if (!carUpdated) return { status: StatusHTTP.NOT_FOUND, message: 'Car not found' };
      return { status: StatusHTTP.OK, message: this.createCarDomain(carUpdated) };
    } catch (error) {
      return { status: StatusHTTP.UNPROCESSABLE_ENTITY, message: 'Invalid mongo id' };
    }
  }
}