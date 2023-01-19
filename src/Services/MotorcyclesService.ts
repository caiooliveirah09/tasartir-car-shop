import IMotorcycle from '../Interfaces/IMotorcycle';
import IController from '../Interfaces/IController';
import MotorcycleODM from '../Models/MotorcycleODM';
import StatusHTTP from '../utils/StatusHTTP';
import Motorcycles from '../Domains/Motorcycle';

export default class MotorcyclesService {
  public createMotorcycleDomain(motorcycle: IMotorcycle | null) : Motorcycles | null {
    if (motorcycle) return new Motorcycles(motorcycle);
    return null;
  }

  public async create(motorcycle: IMotorcycle): Promise<IController> {
    const motorcycleODM = new MotorcycleODM();
    const newCar = await motorcycleODM.create(motorcycle);
    return { status: StatusHTTP.CREATED, message: this.createMotorcycleDomain(newCar) };
  }

  public async find(): Promise<IController> {
    const motorcycleODM = new MotorcycleODM();
    const allCars = await motorcycleODM.find();
    return { status: StatusHTTP.OK,
      message: allCars.map((motorcycle) => this.createMotorcycleDomain(motorcycle)) };
  }

  public async findById(id: string): Promise<IController> {
    try {
      const motorcycleODM = new MotorcycleODM();
      const oneCar = await motorcycleODM.findById(id);
      if (!oneCar) return { status: StatusHTTP.NOT_FOUND, message: 'Motorcycle not found' };
      return { status: StatusHTTP.OK, message: this.createMotorcycleDomain(oneCar) };
    } catch (error) {
      return { status: StatusHTTP.UNPROCESSABLE_ENTITY, message: 'Invalid mongo id' };
    }
  }

  public async findByIdAndUpdate(id: string, update: IMotorcycle): Promise<IController> {
    try {
      const motorcycleODM = new MotorcycleODM();
      const carUpdated = await motorcycleODM.findByIdAndUpdate(id, update);
      if (!carUpdated) return { status: StatusHTTP.NOT_FOUND, message: 'Motorcycle not found' };
      return { status: StatusHTTP.OK, message: this.createMotorcycleDomain(carUpdated) };
    } catch (error) {
      return { status: StatusHTTP.UNPROCESSABLE_ENTITY, message: 'Invalid mongo id' };
    }
  }
}