import { Controller, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Crud, CrudController } from '@nestjsx/crud';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';
import { Roles } from './roles/roles.decorator';
import { Role } from './roles/role.enum';
import { RolesGuard } from './roles/roles.guard';
@Crud({
  model: {
    type: User,
  },
})
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('api/admin/users')
@Roles(Role.Admin)
export class UsersController implements CrudController<User> {
  constructor(public service: UsersService) {}
}
