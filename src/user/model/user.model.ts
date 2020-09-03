import { Column, Model, Table, PrimaryKey } from 'sequelize-typescript';

@Table
export class User extends Model<User> {
  @PrimaryKey
  @Column
  id: number;

  @Column
  username: string;

  @Column
  salted_pw: string;

  @Column
  salt: string;

  @Column
  name: string;

  @Column
  mail: string;

  @Column
  access_level_id: number;

  @Column
  language_id: number;
}
