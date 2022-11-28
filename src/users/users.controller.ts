import { Controller, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import {
  Crud,
  CrudController,
} from '@nestjsx/crud';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';

@Crud({
  model: {
    type: User,
  },
})

@UseGuards(JwtAuthGuard)
@Controller('api/users')
export class UsersController implements CrudController<User> {
  constructor(public service: UsersService) {}
}
