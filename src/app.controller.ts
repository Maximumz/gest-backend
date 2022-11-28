import { Controller, Request, Body, Get, Post, UseGuards } from '@nestjs/common';
import {
  Crud,
  CrudController,
  CrudRequest,
  ParsedRequest,
} from '@nestjsx/crud';
import { AppService } from './app.service';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService } from './auth/auth.service';
import { User } from './users/entities/user.entity';
import { UsersService } from './users/users.service';
import { CreateUserDto } from './users/dto/user.create.dto';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private authService: AuthService,
    private usersService: UsersService
  ) {}

  @UseGuards(LocalAuthGuard)
  @Post('preauth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @Post('preauth/create')
  async createOne(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.usersService.create(createUserDto);
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
