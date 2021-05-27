import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Notable } from './entities/notable.entity';
import { NotablesService } from './notables.service';
import { NotablesController } from './notables.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Notable])],
  controllers: [NotablesController],
  providers: [NotablesService],
  exports: [NotablesService],
})
export class NotablesModule {}
