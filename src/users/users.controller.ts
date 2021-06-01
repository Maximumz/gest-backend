import { Controller, UseGuards, Post } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import {
  Crud,
  CrudController,
  CrudRequest,
  ParsedRequest,
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
