import { Table, Column, Model, HasMany, BelongsTo, ForeignKey } from 'sequelize-typescript';
import Weight from './Weight';
import User from './User';

@Table({timestamps: true})
class Lift extends Model<Lift> {
  @Column
  name: string;

  @HasMany(() => Weight)
  weights: Weight[];

  @ForeignKey(() => User)
  @Column
  userId: number;

  @BelongsTo(() => User)
  user: User;
}

export default Lift;