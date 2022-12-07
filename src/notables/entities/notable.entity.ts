import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
} from 'typeorm';
import { User } from '../../users/entities/user.entity';

@Entity('notable')
export class Notable {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  date: string;

  @Column()
  title: string;

  @Column()
  content: string;

  @Column()
  author: string;

  @ManyToOne(() => User, (users) => users.id)
  userId: number;
}
