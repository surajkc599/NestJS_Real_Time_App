import { Test, TestingModule } from '@nestjs/testing';
import { NozzleMaintenanceService } from './nozzle-maintenance.service';

describe('NozzleMaintenanceService', () => {
  let service: NozzleMaintenanceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NozzleMaintenanceService],
    }).compile();

    service = module.get<NozzleMaintenanceService>(NozzleMaintenanceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
