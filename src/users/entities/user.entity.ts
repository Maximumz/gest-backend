import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Notable } from '../../notables/entities/notable.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  username: string;

  @Column()
  passhash: string;

  @Column()
  salt: string;

  @OneToMany(() => Notable, notables => notables.usersId)
  notables: Notable[];
}
