import { Injectable, LoggerService, Inject } from '@nestjs/common';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';

import { Sequelize } from 'sequelize-typescript';

import { GasStationAddress } from '../model/gas-station-address.model';

const query = `SELECT * FROM GasStationAddress`;

@Injectable()
export class GasStationService {
  constructor(
    private sequelize: Sequelize,
    @Inject(WINSTON_MODULE_NEST_PROVIDER)
    private readonly logger: LoggerService,
  ) {
  }

  // We cannot make use of Sequelize Power here -> Because it does not support Reading from View
  // Otherwise this.gasStationModel.findAll() should have done the magic
  // So write the RAW Query and map to model GasStation
  async findAll(): Promise<GasStationAddress[]> {
    this.logger.log(`[GasStationService] - About to return all Gas stations addresses`);
    return this.sequelize.query(query, {
      mapToModel: true,
      model: GasStationAddress,
    });
  }
}
