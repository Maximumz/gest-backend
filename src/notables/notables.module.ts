import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { PassportModule } from '@nestjs/passport';
import { Notable } from './entities/notable.entity';
import { NotablesService } from './notables.service';
import { NotablesController } from './notables.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([Notable]),
    PassportModule.register({
        defaultStrategy: 'jwt',
        property: 'user',
        session: false,
    }),
  ],
  controllers: [NotablesController],
  providers: [NotablesService],
  exports: [NotablesService],
})
export class NotablesModule {}
