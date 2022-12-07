import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('logout')
  async logout(@Request() req) {
    const user = JSON.parse(req.body.user);
    return this.authService.logout(user);
  }
}
