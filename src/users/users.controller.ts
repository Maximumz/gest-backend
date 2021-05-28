import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Crud, CrudController } from "@nestjsx/crud";
import { UsersService } from './users.service';
import { User } from './entities/user.entity';

@Crud({
  model: {
    type: User,
  },
})

@UseGuards(AuthGuard())
@Controller('api/users')
export class UsersController implements CrudController<User> {
  constructor(public service: UsersService) {}
}
