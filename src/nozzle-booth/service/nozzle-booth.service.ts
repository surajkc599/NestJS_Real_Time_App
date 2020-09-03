import { Injectable, Inject, LoggerService } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';

import { iNozzleBooth } from '../model/inozzle.model';
import { NozzleBoothDto } from '../dto/nozzle-booth.dto';

@Injectable()
export class NozzleBoothService {
  constructor(
    @InjectModel(iNozzleBooth)
    private iNozzleBoothModel: typeof iNozzleBooth,
    @Inject(WINSTON_MODULE_NEST_PROVIDER)
    private readonly logger: LoggerService,
  ) {}

  async findAll(): Promise<iNozzleBooth[]> {
    this.logger.log(
      `[NozzleBoothService] - About to return all nozzle booths`,
    );
    return this.iNozzleBoothModel.findAll();
  }

  async create(createNozzleBoothDto: NozzleBoothDto): Promise<iNozzleBooth> {
    const createNozzleBooth = this.transformDtoToModel(
      new iNozzleBooth(),
      createNozzleBoothDto,
    );
    this.logger.log(
      `[NozzleBoothService] - About to create new nozzle booth for casing lot is ${createNozzleBoothDto.casing_LOT}`,
    );
    return createNozzleBooth.save();
  }

  async update(
    id: number,
    updatedNozzelBoothDto: NozzleBoothDto,
  ): Promise<iNozzleBooth> {
    this.logger.log(`[NozzleBoothService] - About to get if existing nozzle booth available for id ${id}`);
    const existingNozzleBooth: iNozzleBooth = await this.findOne(id);

    this.logger.log(`[NozzleBoothService] - About to update nozzle booth for id ${id}`);
    return await this.transformDtoToModel(
      existingNozzleBooth,
      updatedNozzelBoothDto,
    ).save();
  }

  async findOne(id: number): Promise<iNozzleBooth> {
    return this.iNozzleBoothModel.findOne({
      where: {
        id,
      },
    });
  }

  transformDtoToModel(
    newNozzleBooth: iNozzleBooth,
    nozzleBoothDto: NozzleBoothDto,
  ) {
    newNozzleBooth.id = nozzleBoothDto.id;
    newNozzleBooth.gas_nozzle_id = nozzleBoothDto.gas_nozzle_id;
    newNozzleBooth.pcb_code = nozzleBoothDto.pcb_code;
    newNozzleBooth.serial_number = nozzleBoothDto.serial_number;
    newNozzleBooth.coil_LOT = nozzleBoothDto.coil_LOT;
    newNozzleBooth.casing_LOT = nozzleBoothDto.casing_LOT;
    newNozzleBooth.production_date = nozzleBoothDto.production_date;
    newNozzleBooth.approval_date = nozzleBoothDto.approval_date;
    newNozzleBooth.install_date = nozzleBoothDto.install_date;
    newNozzleBooth.removal_date = nozzleBoothDto.removal_date;
    newNozzleBooth.resin_code = nozzleBoothDto.resin_code;

    return newNozzleBooth;
  }
}
