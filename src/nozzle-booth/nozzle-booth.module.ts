import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { NozzleBoothController } from './controller/nozzle-booth.controller';
import { NozzleBoothService } from './service/nozzle-booth.service';

import { iNozzleBooth } from './model/inozzle.model';

@Module({
  imports: [SequelizeModule.forFeature([iNozzleBooth])],
  controllers: [NozzleBoothController],
  providers: [NozzleBoothService],
})
export class NozzleBoothModule {}
