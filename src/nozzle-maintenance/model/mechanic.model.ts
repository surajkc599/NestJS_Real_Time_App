import { Column, Model, Table, PrimaryKey } from 'sequelize-typescript';

@Table
export class Mechanic extends Model<Mechanic> {
  @PrimaryKey
  @Column
  id: number;

  @Column
  name: string;

  @Column
  phone: string;

  @Column
  address: string;

  @Column
  main: string;

  @Column
  active: boolean;
}
