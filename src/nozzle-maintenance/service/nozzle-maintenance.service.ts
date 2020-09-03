import { Injectable, Inject, LoggerService } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';

import { iNozzleMaintenance } from '../model/nozzle-maintenance.model';
import { CreateNozzleMaintenanceDto } from '../dto/create-nozzle-maintenance.dto';

@Injectable()
export class NozzleMaintenanceService {
  constructor(
    @InjectModel(iNozzleMaintenance)
    private iNozzleMaintenanceModel: typeof iNozzleMaintenance,
    @Inject(WINSTON_MODULE_NEST_PROVIDER)
    private readonly logger: LoggerService,
  ) {}

  async findAll(): Promise<iNozzleMaintenance[]> {
    this.logger.log(
      `[NozzleMaintenanceService] - About to return all nozzle maintenances`,
    );
    return this.iNozzleMaintenanceModel.findAll();
  }

  async create(
    createNozzleMaintenanceDto: CreateNozzleMaintenanceDto,
  ): Promise<iNozzleMaintenance> {
    const nozzleMaintenance = new iNozzleMaintenance();

    nozzleMaintenance.id = createNozzleMaintenanceDto.id;
    nozzleMaintenance.mechanic_id = createNozzleMaintenanceDto.mechanic_id;
    nozzleMaintenance.nozzle_id = createNozzleMaintenanceDto.nozzle_id;
    nozzleMaintenance.description = createNozzleMaintenanceDto.description;
    nozzleMaintenance.date = createNozzleMaintenanceDto.date;

    this.logger.log(
      `[NozzleMaintenanceService] - About to create new maintenance with mechanic id ${nozzleMaintenance.mechanic_id}`,
    );

    return nozzleMaintenance.save();
  }
}
