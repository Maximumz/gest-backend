import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import { Connection, Repository } from 'typeorm';
import { AuthService } from '../auth/auth.service';
import { User } from "./entities/user.entity";
import { CreateUserDto } from './dto/user.create.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService extends TypeOrmCrudService<User> {
  constructor(
    @InjectRepository(User) repo,
    private connection: Connection
  ) {
    super(repo);
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    const newUser = createUserDto;
    let password: string = newUser.passhash;
    console.log(password);

    /* istanbul ignore if */
    if (!newUser) {
      console.log(`Empty data. Nothing to save.`);
    }

    const result = await this.findOne(<any>newUser);
    if (result) {
      console.log('Attempt to save duplicate entity');
    }

    newUser.passhash = await this.hashPassword(newUser.passhash);

    return this.repo.save<any>(newUser);
  }

  async hashPassword(password: string) {
    return await bcrypt.hash(password, 10);
  }
}
