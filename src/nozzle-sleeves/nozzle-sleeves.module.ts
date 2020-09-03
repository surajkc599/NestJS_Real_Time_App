import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { NozzleSleevesController } from './controller/nozzle-sleeves.controller';
import { NozzleSleevesService } from './service/nozzle-sleeves.service';

import { iNozzle } from './model/nozzle-sleeve.model';

@Module({
  imports: [SequelizeModule.forFeature([iNozzle])],
  controllers: [NozzleSleevesController],
  providers: [NozzleSleevesService]
})
export class NozzleSleevesModule {}
