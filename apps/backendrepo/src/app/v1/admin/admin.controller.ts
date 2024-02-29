import { Controller, UseInterceptors } from "@nestjs/common";
import { Crud, CrudController } from "@dataui/crud";
import { ApiTags } from "@nestjs/swagger";
import { UserInterceptor } from "../users/interceptors/user.interceptor";
import { AdminService } from "./admin.service";
import { Admin } from "./entities/admin-entity";
import { CreateAdminDto } from "./dto/create-admin.dto";

@Crud({
  model: {
    type: CreateAdminDto,
  },
})
@ApiTags("Admin")
@UseInterceptors(UserInterceptor)
@Controller({
  path: "admin",
  version: "1",
})
export class AdminController implements CrudController<Admin> {
  constructor(public service: AdminService) {}
}
