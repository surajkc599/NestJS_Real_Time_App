import { Controller, Get, LoggerService, Inject, UseGuards } from '@nestjs/common';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';

import { GasStationAddress } from '../model/gas-station-address.model';

import { GasStationService } from '../service/gas-station.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';

@Controller('gas-station')
export class GasStationController {
  constructor(
    private gasStationService: GasStationService,
    @Inject(WINSTON_MODULE_NEST_PROVIDER)
    private readonly logger: LoggerService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Get('addresses')
  async findAll(): Promise<GasStationAddress[]> {
    this.logger.debug(
      `[GasStationController] - Start to get all Gas stations addresses`,
      'GasStationController',
    );
    return this.gasStationService.findAll();
  }
}
