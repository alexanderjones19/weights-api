import { Table, Column, Model, IsEmail, HasMany } from 'sequelize-typescript';
import Lift from './Lift';

@Table({timestamps: true})
class User extends Model<User> {
  @IsEmail
  @Column
  email: string;

  @Column
  password: string;

  @HasMany(() => Lift)
  lifts: Lift[];
}

export default User;