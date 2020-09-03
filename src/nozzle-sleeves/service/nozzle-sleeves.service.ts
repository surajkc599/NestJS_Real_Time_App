import { Injectable, Inject, LoggerService } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';

import { iNozzle } from '../model/nozzle-sleeve.model';

import { NozzleSleeveDto } from '../dto/nozzle-sleeve.dto';

@Injectable()
export class NozzleSleevesService {
  constructor(
    @InjectModel(iNozzle)
    private iNozzleModel: typeof iNozzle,
    @Inject(WINSTON_MODULE_NEST_PROVIDER)
    private readonly logger: LoggerService,
  ) {}

  async findAll(): Promise<iNozzle[]> {
    this.logger.log(`[NozzleSleevesService] - About to return all nozzles`);
    return this.iNozzleModel.findAll();
  }

  async create(createNozzelSleeveDto: NozzleSleeveDto): Promise<iNozzle> {
    const createNozzleSleeve = this.transformDtoToModel(
      new iNozzle(),
      createNozzelSleeveDto,
    );
    this.logger.log(`[NozzleSleevesService] - About to create new nozzle`);

    return createNozzleSleeve.save();
  }

  async update(
    id: number,
    updateNozzelSleeveDto: NozzleSleeveDto,
  ): Promise<iNozzle> {
    this.logger.log(
      `[NozzleSleevesService] - About to find existing nozzle for id ${id}`,
    );
    const existingNozzleSleeve: iNozzle = await this.findOne(id);

    this.logger.log(
      `[NozzleSleevesService] - About to update nozzle for id ${id}`,
    );

    return await this.transformDtoToModel(
      existingNozzleSleeve,
      updateNozzelSleeveDto,
    ).save();
  }

  async findOne(id: number): Promise<iNozzle> {
    this.logger.log(
      `[NozzleSleevesService] - Finding nozzle with id ${id}`,
    );

    return this.iNozzleModel.findOne({
      where: {
        id,
      },
    });
  }

  transformDtoToModel(
    newNozzleSleeve: iNozzle,
    nozzleSleeveDto: NozzleSleeveDto,
  ) {
    newNozzleSleeve.id = nozzleSleeveDto.id;
    newNozzleSleeve.gas_nozzle_id = nozzleSleeveDto.gas_nozzle_id;
    newNozzleSleeve.pcb_mac = nozzleSleeveDto.pcb_mac;
    newNozzleSleeve.pcb_code = nozzleSleeveDto.pcb_code;
    newNozzleSleeve.serial_number = nozzleSleeveDto.serial_number;
    newNozzleSleeve.coil_LOT = nozzleSleeveDto.coil_LOT;
    newNozzleSleeve.casing_LOT = nozzleSleeveDto.casing_LOT;
    newNozzleSleeve.display_LOT = nozzleSleeveDto.display_LOT;
    newNozzleSleeve.capacitor = nozzleSleeveDto.capacitor;
    newNozzleSleeve.production_date = nozzleSleeveDto.production_date;
    newNozzleSleeve.approval_date = nozzleSleeveDto.approval_date;
    newNozzleSleeve.install_date = nozzleSleeveDto.install_date;
    newNozzleSleeve.removal_date = nozzleSleeveDto.removal_date;
    newNozzleSleeve.logo_id = nozzleSleeveDto.logo_id;

    return newNozzleSleeve;
  }
}
