import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import MotorcyclesService from '../../../src/Services/MotorcyclesService';
import mocks from '../MotorcycleMock';
import StatusHTTP from '../../../src/utils/StatusHTTP';

describe('testing MotorcyclesService', function () {
  const service = new MotorcyclesService();

  afterEach(function () {
    sinon.restore();
  });

  it('testing createMotorcycleDomain() with null car', async function () {
    const result = await service.createMotorcycleDomain(null);
    expect(result).to.be.equal(null);
  });

  it('testing MotorcycleService.create() with status', async function () {
    sinon.stub(Model, 'create').resolves(mocks.oneMotorcycleInDB);
    const result = await service.create(mocks.createMotorcycleInputWithStatus);
    expect(result.message).to.be.deep.equal(mocks.oneMotorcycleInDB);
    expect(result.status).to.be.equal(StatusHTTP.CREATED);
  });

  it('testing MotorcycleService.create() without status', async function () {
    sinon.stub(Model, 'create').resolves(mocks.oneMotorcycleInDB);
    const result = await service.create(mocks.createMotorcycleInput);
    expect(result.message).to.be.deep.equal(mocks.oneMotorcycleInDB);
    expect(result.status).to.be.equal(StatusHTTP.CREATED);
  });

  it('testing MotorcycleServices.find()', async function () {
    sinon.stub(Model, 'find').resolves(mocks.allMotorcyclesInDB);
    const result = await service.find();
    expect(result.message).to.be.deep.equal(mocks.allMotorcyclesInDB);
    expect(result.status).to.be.equal(StatusHTTP.OK);
  });

  it('testing MotorcycleService.findById() with correct id', async function () {
    sinon.stub(Model, 'findById').resolves(mocks.oneMotorcycleInDB);
    const result = await service.findById(mocks.correctMotorcycleId);
    expect(result.message).to.be.deep.equal(mocks.oneMotorcycleInDB);
    expect(result.status).to.be.equal(StatusHTTP.OK);
  });

  it('testing MotorcycleService.findById() with incorrect id', async function () {
    sinon.stub(Model, 'findById').resolves();
    const result = await service.findById(mocks.incorrectMotorcycleId);
    expect(result.message).to.be.equal('Motorcycle not found');
    expect(result.status).to.be.equal(StatusHTTP.NOT_FOUND);
  });

  it('testing MotorcycleService.findById() with invalid id', async function () {
    const result = await service.findById(mocks.invalidMotorcycleId);
    expect(result.message).to.be.equal('Invalid mongo id');
    expect(result.status).to.be.equal(StatusHTTP.UNPROCESSABLE_ENTITY);
  });

  it('testing MotorcycleService.findByIdAndUpdate() with correct id', async function () {
    sinon.stub(Model, 'findByIdAndUpdate').resolves(mocks.alteredMotorcycleInDB);
    const result = await service
      .findByIdAndUpdate(mocks.correctMotorcycleId, mocks.bodyForUpdateMotorcycleById);
    expect(result.message).to.be.deep.equal(mocks.alteredMotorcycleInDB);
    expect(result.status).to.be.equal(StatusHTTP.OK);
  });

  it('testing MotorcycleService.findByIdAndUpdate() with incorrect id', async function () {
    sinon.stub(Model, 'findByIdAndUpdate').resolves();
    const result = await service
      .findByIdAndUpdate(mocks.incorrectMotorcycleId, mocks.bodyForUpdateMotorcycleById);
    expect(result.message).to.be.equal('Motorcycle not found');
    expect(result.status).to.be.equal(StatusHTTP.NOT_FOUND);
  });

  it('testing MotorcycleService.findByIdAndUpdate() with invalid id', async function () {
    const result = await service
      .findByIdAndUpdate(mocks.invalidMotorcycleId, mocks.bodyForUpdateMotorcycleById);
    expect(result.message).to.be.equal('Invalid mongo id');
    expect(result.status).to.be.equal(StatusHTTP.UNPROCESSABLE_ENTITY);
  });
});