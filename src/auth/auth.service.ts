import { Injectable, ConflictException } from '@nestjs/common';
import {
  Crud,
  CrudController,
  CrudRequest,
  ParsedRequest,
} from '@nestjsx/crud';
import { User } from '../users/entities/user.entity';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import 'dotenv/config'

@Injectable()
export class AuthService {

  constructor(
    private jwtService: JwtService,
    private usersService: UsersService
  ) {}

  async validateUser(
    username: string,
    password: string
  ): Promise<Omit<User, 'password'> | null> {
    const user = await this.usersService.findOne({ username });

    if (user?.passhash == null) {
      return null;
    }

    const isPasswordMatch = await bcrypt.compare(password, user.passhash);
    if (isPasswordMatch) {
      return {
        id: user.id,
        username: user.username,
      };
    }

    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
