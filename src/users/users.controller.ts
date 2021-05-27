import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Crud, CrudController } from "@nestjsx/crud";
import { UsersService } from './users.service';
import { User } from './entities/user.entity';

@Crud({
  model: {
    type: User,
  },
})

@Controller('api/users')
export class UsersController implements CrudController<User> {
  constructor(public service: UsersService) {}
}
