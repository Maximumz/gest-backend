import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Notable } from './entities/notable.entity';
import { CreateNotableDto } from './dto/notable.create.dto';

@Injectable()
export class NotablesService extends TypeOrmCrudService<Notable> {
  constructor(@InjectRepository(Notable) repo) {
    super(repo);
  }

  async create(createNotableDto: CreateNotableDto): Promise<Notable> {
    const newNotable = createNotableDto;

    /* istanbul ignore if */
    if (!newNotable) {
      // TODO: add exception error handling
      console.log(`Empty data. Nothing to save.`);
    }

    return this.repo.save<Notable>(newNotable);
  }

  async fetchAll(createNotableDto: CreateNotableDto): Promise<Notable[]> {
    return await this.repo.find({ where: <Notable>createNotableDto });
  }
}
