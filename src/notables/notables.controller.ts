import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Crud, CrudController } from "@nestjsx/crud";
import { NotablesService } from './notables.service';
import { Notable } from "./entities/notable.entity";

@Crud({
  model: {
    type: Notable,
  },
})

@UseGuards(AuthGuard())
@Controller('api/notables')
export class NotablesController implements CrudController<Notable> {
  constructor(public service: NotablesService) {}
}
