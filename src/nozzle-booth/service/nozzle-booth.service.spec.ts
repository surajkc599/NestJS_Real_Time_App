import { Test, TestingModule } from '@nestjs/testing';
import { NozzleBoothService } from './nozzle-booth.service';

describe('NozzleBoothService', () => {
  let service: NozzleBoothService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NozzleBoothService],
    }).compile();

    service = module.get<NozzleBoothService>(NozzleBoothService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
