import { NextFunction, Request, Response } from 'express';

export default class CarsController {
  private req: Request;
  private res: Response;
  private next: NextFunction;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
  }
  
  registerACar() {
    return this.res.status(200).json('salve');
  }
}