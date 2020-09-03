import {
  Controller,
  Get,
  Post,
  Put,
  Body,
  Param,
  Inject,
  LoggerService,
  UseGuards,
} from '@nestjs/common';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';

import { iNozzle } from '../model/nozzle-sleeve.model';
import { NozzleSleeveDto } from '../dto/nozzle-sleeve.dto';

import { NozzleSleevesService } from '../service/nozzle-sleeves.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';

@Controller('nozzle-sleeves')
export class NozzleSleevesController {
  constructor(
    private nozzleSleevesService: NozzleSleevesService,
    @Inject(WINSTON_MODULE_NEST_PROVIDER)
    private readonly logger: LoggerService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Get('nozzles')
  async findAll(): Promise<iNozzle[]> {
    this.logger.debug(
      `[NozzleSleevesController] - Start to get all available nozzles`,
      'NozzleSleevesController',
    );
    return this.nozzleSleevesService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(
    @Body() createNozzleSleeveDto: NozzleSleeveDto,
  ): Promise<iNozzle> {
    this.logger.debug(
      `[NozzleSleevesController] - Start to create new nozzle with initial gas_nozzle_id to null`,
      'NozzleSleevesController',
    );
    return this.nozzleSleevesService.create(createNozzleSleeveDto);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async update(
    @Param('id') id,
    @Body() updateNozzleSleeveDto: NozzleSleeveDto,
  ): Promise<iNozzle> {
    this.logger.debug(
      `[NozzleSleevesController] - Start to update nozzle with gas_nozzle_id updated as ${updateNozzleSleeveDto.gas_nozzle_id} for id ${id}`,
      'NozzleSleevesController',
    );
    return this.nozzleSleevesService.update(id, updateNozzleSleeveDto);
  }
}
