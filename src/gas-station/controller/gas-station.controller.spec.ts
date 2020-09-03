import { Test, TestingModule } from '@nestjs/testing';
import { GasStationController } from './gas-station.controller';

describe('GasStationController', () => {
  let controller: GasStationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GasStationController],
    }).compile();

    controller = module.get<GasStationController>(GasStationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
