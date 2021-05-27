import { Test, TestingModule } from '@nestjs/testing';
import { NotablesService } from './notables.service';

describe('NotablesService', () => {
  let service: NotablesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NotablesService],
    }).compile();

    service = module.get<NotablesService>(NotablesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
