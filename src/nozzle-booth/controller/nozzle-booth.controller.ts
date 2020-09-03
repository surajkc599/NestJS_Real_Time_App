import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Inject,
  LoggerService,
  UseGuards,
} from '@nestjs/common';

import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';

import { iNozzleBooth } from '../model/inozzle.model';
import { NozzleBoothDto } from '../dto/nozzle-booth.dto';

import { NozzleBoothService } from '../service/nozzle-booth.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';

@Controller('nozzle-booth')
export class NozzleBoothController {
  constructor(
    private nozzleBoothService: NozzleBoothService,
    @Inject(WINSTON_MODULE_NEST_PROVIDER)
    private readonly logger: LoggerService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Get('details')
  async findAll(): Promise<iNozzleBooth[]> {
    this.logger.debug(
      `[NozzleBoothController] - Start to get all Nozzle booth details`,
      'NozzleBoothController',
    );
    return this.nozzleBoothService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(
    @Body() createNozzleBoothDto: NozzleBoothDto,
  ): Promise<iNozzleBooth> {
    this.logger.debug(
      `[NozzleBoothController] - Start to create new nozzle booth for casing code ${createNozzleBoothDto.casing_LOT}`,
      'NozzleBoothController',
    );
    return this.nozzleBoothService.create(createNozzleBoothDto);
  }
  
  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async update(
    @Param('id') id,
    @Body() updateNozzleBoothDto: NozzleBoothDto,
  ): Promise<iNozzleBooth> {
    this.logger.debug(
      `[NozzleBoothController] - Start to update nozzle booth for id ${id}`,
      'NozzleBoothController',
    );
    return this.nozzleBoothService.update(id, updateNozzleBoothDto);
  }
}
