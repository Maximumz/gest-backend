import { Test, TestingModule } from '@nestjs/testing';
import { NotablesController } from './notables.controller';
import { NotablesService } from './notables.service';

describe('NotablesController', () => {
  let controller: NotablesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NotablesController],
      providers: [NotablesService],
    }).compile();

    controller = module.get<NotablesController>(NotablesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
