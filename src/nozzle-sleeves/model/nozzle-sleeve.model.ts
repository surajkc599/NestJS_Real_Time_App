import {
  Column,
  Model,
  Table,
  PrimaryKey,
  ForeignKey,
} from 'sequelize-typescript';

import { Logo } from './logo.model';
import { DataTypes } from 'sequelize';

@Table
export class iNozzle extends Model<iNozzle> {
  @PrimaryKey
  @Column({
    autoIncrement: true,
  })
  id: number;

  @Column({
    allowNull: true,
  })
  gas_nozzle_id: number;

  @Column({
    allowNull: false,
  })
  pcb_mac: string;

  @Column({
    defaultValue: DataTypes.UUIDV4,
  })
  pcb_code: string;

  @Column({
    defaultValue: DataTypes.UUIDV4,
  })
  serial_number: string;

  @Column({
    defaultValue: DataTypes.UUIDV4,
  })
  coil_LOT: string;

  @Column({})
  casing_LOT: string;

  @Column({
    defaultValue: DataTypes.UUIDV4,
  })
  display_LOT: string;

  @Column({
    defaultValue: DataTypes.UUIDV4,
  })
  capacitor: string;

  @Column({
    defaultValue: DataTypes.NOW,
  })
  production_date: Date;

  @Column({
    defaultValue: DataTypes.NOW,
  })
  approval_date: Date;

  @Column({
    defaultValue: DataTypes.NOW,
  })
  install_date: Date;

  @Column({
    defaultValue: DataTypes.NOW,
  })
  removal_date: Date;

  @ForeignKey(() => Logo)
  @Column
  logo_id: number;
}
