import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import { Connection, Repository } from 'typeorm';
import { User } from "./entities/user.entity";
import { CreateUserDto } from './dto/user.create.dto';
import * as bcrypt from 'bcrypt';
import { Role } from './roles/role.enum';

@Injectable()
export class UsersService extends TypeOrmCrudService<User> {
  constructor(@InjectRepository(User) repo, private connection: Connection) {
    super(repo);
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    const newUser = createUserDto;
    let password: string = newUser.passhash;

    /* istanbul ignore if */
    if (!newUser) {
      // TODO: add exception error handling
      console.log(`Empty data. Nothing to save.`);
    }

    const result = await this.repo.findOne(({where: <User>newUser}));
    if (result) {
      // TODO: add exception error handling
      console.log('Attempt to save duplicate entity');
    }

    newUser.passhash = await this.hashPassword(newUser.passhash);
    newUser.role = Role.User;

    return this.repo.save<User>(newUser);
  }

  async hashPassword(password: string) {
    return await bcrypt.hash(password, 10);
  }

  update(user: User) {
    return this.repo.update(user.id, user);
  }
}
