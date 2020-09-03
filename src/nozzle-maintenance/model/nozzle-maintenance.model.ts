import { Column, Model, Table, PrimaryKey, ForeignKey } from 'sequelize-typescript';

import { Mechanic } from './mechanic.model';
import { iNozzle } from 'src/nozzle-sleeves/model/nozzle-sleeve.model';

@Table
export class iNozzleMaintenance extends Model<iNozzleMaintenance> {
  @PrimaryKey
  @Column
  id: number;

  @Column
  date: Date;

  @ForeignKey(() => Mechanic)
  @Column
  mechanic_id: number;

  @Column
  description: string;

  @ForeignKey(() => iNozzle)
  @Column
  nozzle_id: number;
}
