import { Column, Model, Table, PrimaryKey } from 'sequelize-typescript';

@Table
export class GasStationAddress extends Model<GasStationAddress> {
  @PrimaryKey
  @Column
  id: number;

  @Column
  name: string;

  @Column
  brand: string;

  @Column
  operator: string;

  @Column
  latitude: number;

  @Column
  longitude: number;

  @Column
  street: string;

  @Column
  house_number: number;

  @Column
  house_number_suffix: number;

  @Column
  postal_code_numeric: number;

  @Column
  postal_code_suffix: string;

  @Column
  city: string;

  @Column
  region: string;

  @Column
  country: string;
}
