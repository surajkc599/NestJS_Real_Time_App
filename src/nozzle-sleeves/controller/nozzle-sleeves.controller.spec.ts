import { Test, TestingModule } from '@nestjs/testing';
import { NozzleSleevesController } from './nozzle-sleeves.controller';

describe('NozzleSleevesController', () => {
  let controller: NozzleSleevesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NozzleSleevesController],
    }).compile();

    controller = module.get<NozzleSleevesController>(NozzleSleevesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
