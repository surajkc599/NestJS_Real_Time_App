import { Test, TestingModule } from '@nestjs/testing';
import { NozzleMaintenanceController } from './nozzle-maintenance.controller';

describe('NozzleMaintenanceController', () => {
  let controller: NozzleMaintenanceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NozzleMaintenanceController],
    }).compile();

    controller = module.get<NozzleMaintenanceController>(NozzleMaintenanceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
