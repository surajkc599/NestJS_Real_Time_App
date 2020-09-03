import { Column, Model, Table, PrimaryKey } from 'sequelize-typescript';

@Table
export class iNozzleBooth extends Model<iNozzleBooth> {
  @PrimaryKey
  @Column({
    autoIncrement: true,
  })
  id: number;

  @Column({
    allowNull: true,
  })
  gas_nozzle_id: number;

  @Column
  pcb_code: string;

  @Column
  serial_number: string;

  @Column
  coil_LOT: string;

  @Column
  casing_LOT: string;

  @Column
  resin_code: string;

  @Column
  production_date: Date;

  @Column
  approval_date: Date;

  @Column
  install_date: Date;

  @Column
  removal_date: Date;
}
