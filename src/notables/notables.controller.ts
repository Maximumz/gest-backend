import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Crud, CrudController } from "@nestjsx/crud";
import { NotablesService } from './notables.service';
import { Notable } from "./entities/notable.entity";

@Crud({
  model: {
    type: Notable,
  },
})

@Controller('api/notables')
export class NotablesController implements CrudController<Notable> {
  constructor(public service: NotablesService) {}
}
