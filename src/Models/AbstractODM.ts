import { Model, Schema, model, models } from 'mongoose';

export default abstract class AbstractODM<T> {
  private model: Model<T>;
  private modelName: string;
  private schema: Schema;

  constructor(modelName: string, schema: Schema) {
    this.modelName = modelName;
    this.schema = schema;
    this.model = models[this.modelName] || model(this.modelName, this.schema);
  }

  public async create(vehicle: T): Promise<T> {
    const newVehicle = await this.model.create({ ...vehicle });
    return newVehicle;
  }

  public async find(): Promise<T[]> {
    const vehicles = await this.model.find();
    return vehicles;
  }

  public async findById(id: string): Promise<T | null > {
    const vehicle = await this.model.findById(id);
    return vehicle;
  }

  public async findByIdAndUpdate(id: string, update: Partial<T>) : Promise<T | null> {
    const vehicleUpdated = await this.model
      .findByIdAndUpdate({ _id: id }, { ...update }, { new: true });
    return vehicleUpdated;
  } 
}