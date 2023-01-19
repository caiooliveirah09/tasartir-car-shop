import { NextFunction, Request, Response } from 'express';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcyclesService from '../Services/MotorcyclesService';
import StatusHTTP from '../utils/StatusHTTP';

export default class MotorcyclesController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: MotorcyclesService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new MotorcyclesService();
  }

  public async create() {
    const { status, message } = await this.service.create(this.req.body as IMotorcycle);
    return this.res.status(status).json(message);
  }
  
  public async find() {
    const { status, message } = await this.service.find();
    return this.res.status(status).json(message);
  }

  public async findById() {
    const { status, message } = await this.service.findById(this.req.params.id as string);
    if (status === StatusHTTP.OK) return this.res.status(status).json(message);
    return this.res.status(status).json({ message });
  }

  public async findByIdAndUpdate() {
    const { status, message } = await this.service
      .findByIdAndUpdate(this.req.params.id as string, this.req.body as IMotorcycle);
    if (status === StatusHTTP.OK) return this.res.status(status).json(message);
    return this.res.status(status).json({ message });
  }
}