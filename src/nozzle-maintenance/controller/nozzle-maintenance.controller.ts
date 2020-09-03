import {
  Controller,
  Get,
  Post,
  Body,
  Inject,
  LoggerService,
  UseGuards,
} from '@nestjs/common';

import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';

import { iNozzleMaintenance } from '../model/nozzle-maintenance.model';
import { CreateNozzleMaintenanceDto } from '../dto/create-nozzle-maintenance.dto';

import { NozzleMaintenanceService } from '../service/nozzle-maintenance.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';

@Controller('nozzle-maintenance')
export class NozzleMaintenanceController {
  constructor(
    private nozzleMaintenanceService: NozzleMaintenanceService,
    @Inject(WINSTON_MODULE_NEST_PROVIDER)
    private readonly logger: LoggerService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Get('details')
  async findAll(): Promise<iNozzleMaintenance[]> {
    this.logger.debug(
      `[NozzleMaintenanceController] - Start to get all nozzle maintenance mechanic details`,
      'NozzleMaintenanceController',
    );
    return this.nozzleMaintenanceService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  create(
    @Body() createNozzleMaintenanceDto: CreateNozzleMaintenanceDto,
  ): Promise<iNozzleMaintenance> {
    this.logger.debug(
      `[NozzleMaintenanceController] - Start to create new nozzle maintenance for mechanic id ${createNozzleMaintenanceDto.mechanic_id}`,
      'NozzleMaintenanceController',
    );
    return this.nozzleMaintenanceService.create(createNozzleMaintenanceDto);
  }
}
