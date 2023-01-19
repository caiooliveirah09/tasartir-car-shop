import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import CarsService from '../../../src/Services/CarsService';
import mocks from '../CarMocks';
import StatusHTTP from '../../../src/utils/StatusHTTP';

describe('testing CarsService', function () {
  const service = new CarsService();

  afterEach(function () {
    sinon.restore();
  });

  it('testing createCarDomain() with null car', async function () {
    const result = await service.createCarDomain(null);
    expect(result).to.be.equal(null);
  });

  it('testing CarService.create() with status', async function () {
    sinon.stub(Model, 'create').resolves(mocks.oneCarInDB);
    const result = await service.create(mocks.createCarInputWithStatus);
    expect(result.message).to.be.deep.equal(mocks.oneCarInDB);
    expect(result.status).to.be.equal(StatusHTTP.CREATED);
  });

  it('testing CarService.create() without status', async function () {
    sinon.stub(Model, 'create').resolves(mocks.oneCarInDB);
    const result = await service.create(mocks.createCarInput);
    expect(result.message).to.be.deep.equal(mocks.oneCarInDB);
    expect(result.status).to.be.equal(StatusHTTP.CREATED);
  });

  it('testing CarServices.find()', async function () {
    sinon.stub(Model, 'find').resolves(mocks.allCarsInDB);
    const result = await service.find();
    expect(result.message).to.be.deep.equal(mocks.allCarsInDB);
    expect(result.status).to.be.equal(StatusHTTP.OK);
  });

  it('testing CarService.findById() with correct id', async function () {
    sinon.stub(Model, 'findById').resolves(mocks.oneCarInDB);
    const result = await service.findById(mocks.correctCarId);
    expect(result.message).to.be.deep.equal(mocks.oneCarInDB);
    expect(result.status).to.be.equal(StatusHTTP.OK);
  });

  it('testing CarService.findById() with incorrect id', async function () {
    sinon.stub(Model, 'findById').resolves();
    const result = await service.findById(mocks.incorrectCarId);
    expect(result.message).to.be.equal('Car not found');
    expect(result.status).to.be.equal(StatusHTTP.NOT_FOUND);
  });

  it('testing CarService.findById() with invalid id', async function () {
    const result = await service.findById(mocks.invalidCarId);
    expect(result.message).to.be.equal('Invalid mongo id');
    expect(result.status).to.be.equal(StatusHTTP.UNPROCESSABLE_ENTITY);
  });

  it('testing CarService.findByIdAndUpdate() with correct id', async function () {
    sinon.stub(Model, 'findByIdAndUpdate').resolves(mocks.alteredCarInDB);
    const result = await service.findByIdAndUpdate(mocks.correctCarId, mocks.bodyForUpdateCarById);
    expect(result.message).to.be.deep.equal(mocks.alteredCarInDB);
    expect(result.status).to.be.equal(StatusHTTP.OK);
  });

  it('testing CarService.findByIdAndUpdate() with incorrect id', async function () {
    sinon.stub(Model, 'findByIdAndUpdate').resolves();
    const result = await service
      .findByIdAndUpdate(mocks.incorrectCarId, mocks.bodyForUpdateCarById);
    expect(result.message).to.be.equal('Car not found');
    expect(result.status).to.be.equal(StatusHTTP.NOT_FOUND);
  });

  it('testing CarService.findByIdAndUpdate() with invalid id', async function () {
    const result = await service.findByIdAndUpdate(mocks.invalidCarId, mocks.bodyForUpdateCarById);
    expect(result.message).to.be.equal('Invalid mongo id');
    expect(result.status).to.be.equal(StatusHTTP.UNPROCESSABLE_ENTITY);
  });
});