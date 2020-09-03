import { Test, TestingModule } from '@nestjs/testing';
import { NozzleSleevesService } from './nozzle-sleeves.service';

describe('NozzleSleevesService', () => {
  let service: NozzleSleevesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NozzleSleevesService],
    }).compile();

    service = module.get<NozzleSleevesService>(NozzleSleevesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
