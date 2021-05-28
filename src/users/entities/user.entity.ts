import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinTable
} from 'typeorm';
import { Notable } from '../../notables/entities/notable.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name?: string;

  @Column({ unique: true })
  email?: string;

  @Column()
  username: string;

  @Column()
  passhash?: string;

  @OneToMany(() => Notable, notables => notables.userId)
  @JoinTable()
  notables?: Notable[];
}
