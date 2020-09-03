import { Test, TestingModule } from '@nestjs/testing';
import { NozzleBoothController } from './nozzle-booth.controller';

describe('NozzleBoothController', () => {
  let controller: NozzleBoothController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NozzleBoothController],
    }).compile();

    controller = module.get<NozzleBoothController>(NozzleBoothController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
