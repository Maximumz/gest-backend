import { Injectable } from '@nestjs/common';
import { User } from '../users/entities/user.entity';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import 'dotenv/config';

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
    const user = await this.usersService.findOne({where: {username: username}})
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

  async login(user: User) {
    const payload = { username: user.username, sub: user.id };
    const access_token = user.access_token = this.jwtService.sign(payload);

    this.usersService.update(user);

    return {
      access_token: access_token,
    };
  }
}
