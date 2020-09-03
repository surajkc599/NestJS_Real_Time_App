import { Column, Model, Table, PrimaryKey } from 'sequelize-typescript';

@Table
export class Logo extends Model<Logo> {
  @PrimaryKey
  @Column
  id: number;

  @Column
  name: string;

  @Column
  extension: string;

  @Column
  active: boolean;
}
