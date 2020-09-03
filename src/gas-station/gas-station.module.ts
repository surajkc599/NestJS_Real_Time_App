import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { GasStationController } from './controller/gas-station.controller';
import { GasStationService } from './service/gas-station.service';

import { GasStationAddress } from './model/gas-station-address.model';

@Module({
  imports: [SequelizeModule.forFeature([GasStationAddress])],
  controllers: [GasStationController],
  providers: [GasStationService],
})
export class GasStationModule {}
