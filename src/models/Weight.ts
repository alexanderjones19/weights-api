import { Table, Column, Model, HasMany, DataType, BelongsTo, ForeignKey } from 'sequelize-typescript';
import Lift from './Lift';

@Table({timestamps: true})
class Weight extends Model<Weight> {
  @Column({
    type: DataType.DECIMAL(4, 1)
  })
  value: number;

  @ForeignKey(() => Lift)
  @Column
  liftId: number;

  @BelongsTo(() => Lift)
  lift: Lift;
}

export default Weight;