import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import { Connection } from 'typeorm';
import { Repository } from 'typeorm';
import { Notable } from "./entities/notable.entity";

@Injectable()
export class NotablesService extends TypeOrmCrudService<Notable> {
  constructor(
    @InjectRepository(Notable) repo,
    private connection: Connection
  ) {
    super(repo);
  }
}
