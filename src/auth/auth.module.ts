import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { UsersModule} from '../users/users.module';

@Module({
  providers: [AuthService],
  imports: [
    UsersModule,
    PassportModule.register({
        defaultStrategy: 'jwt',
        property: 'user',
        session: false,
    }),
    JwtModule.registerAsync({
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET'),
        signOptions: { expiresIn: 3600 },
      }),
      inject: [ConfigService],
    }),
  ],
  exports: [PassportModule]
})
export class AuthModule {}
