import {
  AllowNull,
  Column,
  DataType,
  HasMany,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';


@Table({
  timestamps: true,
})
export default class User extends Model<User> {
  @PrimaryKey
  @AllowNull(false)
  @Column(DataType.UUID)
  public pk: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  public id: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  public password: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  public name: string;

  @AllowNull(false)
  @Column(DataType.BOOLEAN)
  public admin: boolean;
}