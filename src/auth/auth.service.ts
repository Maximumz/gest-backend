import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { User } from '../users/entities/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {

  constructor(private usersService: UsersService) {}

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




  /* {
    const hash = await bcrypt.hash(password, process.env.SALT);

    return await bcrypt.compare(password, hash);
  } */
}
