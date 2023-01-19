import { Model, Schema, model, models } from 'mongoose';
import ICar from '../Interfaces/ICar';

export default class CarODM {
  private schema: Schema;
  private model: Model<ICar>;

  constructor() {
    this.schema = new Schema<ICar>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: false },
      buyValue: { type: Number, required: true },
      doorsQty: { type: Number, required: true },
      seatsQty: { type: Number, required: true },
    });
    this.model = models.cars || model<ICar>('cars', this.schema);
  }

  public async create(car: ICar): Promise<ICar> {
    const newCar = await this.model.create({ ...car });
    return newCar;
  }

  public async find(): Promise<ICar[]> {
    const cars = await this.model.find();
    return cars;
  }

  public async findById(id: string): Promise<ICar | null > {
    const car = await this.model.findById(id);
    return car;
  }

  public async findByIdAndUpdate(id: string, update: ICar) : Promise<ICar | null> {
    const carUpdated = await this.model
      .findByIdAndUpdate({ _id: id }, { ...update }, { new: true });
    return carUpdated;
  } 
}