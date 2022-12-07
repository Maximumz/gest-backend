import { Body, Controller, Post, UseGuards, Req } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Crud, CrudController } from '@nestjsx/crud';
import { NotablesService } from './notables.service';
import { Notable } from './entities/notable.entity';
import { RolesGuard } from '../users/roles/roles.guard';
import { Roles } from '../users/roles/roles.decorator';
import { Role } from '../users/roles/role.enum';
import { CreateNotableDto } from './dto/notable.create.dto';

@Crud({
  model: {
    type: Notable,
  },
})
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('api/notables')
@Roles(Role.Admin, Role.User)
export class NotablesController implements CrudController<Notable> {
  constructor(public service: NotablesService) {}

  @Post('create')
  async createOne(
    @Body() CreateNotableDto: CreateNotableDto,
    @Req() Request,
  ): Promise<Notable> {
    CreateNotableDto.userId = Request.user.id;
    return this.service.create(CreateNotableDto);
  }

  @Post('fetchAll')
  async fetchAll(
    @Body() CreateNotableDto: CreateNotableDto,
    @Req() Request,
  ): Promise<Notable[]> {
    CreateNotableDto.userId = Request.user.id;
    return this.service.fetchAll(CreateNotableDto);
  }
}
