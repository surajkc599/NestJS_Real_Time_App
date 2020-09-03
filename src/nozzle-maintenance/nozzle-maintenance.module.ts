import { Module } from '@nestjs/common';
import { NozzleMaintenanceController } from './controller/nozzle-maintenance.controller';
import { NozzleMaintenanceService } from './service/nozzle-maintenance.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { iNozzleMaintenance } from './model/nozzle-maintenance.model';

@Module({
  imports: [SequelizeModule.forFeature([iNozzleMaintenance])],
  controllers: [NozzleMaintenanceController],
  providers: [NozzleMaintenanceService],
})
export class NozzleMaintenanceModule {}
