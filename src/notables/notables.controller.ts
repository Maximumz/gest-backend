import { Controller, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Crud, CrudController } from "@nestjsx/crud";
import { NotablesService } from './notables.service';
import { Notable } from "./entities/notable.entity";

@Crud({
  model: {
    type: Notable,
  },
})

@UseGuards(JwtAuthGuard)
@Controller('api/notables')
export class NotablesController implements CrudController<Notable> {
  constructor(public service: NotablesService) {}
}
