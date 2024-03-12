import { Injectable } from "@nestjs/common";
import { TypeOrmCrudService } from "@dataui/crud-typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Admin } from "../entities/admin-entity";

@Injectable()
export class AdminService extends TypeOrmCrudService<Admin> {
  constructor(@InjectRepository(Admin) adminRepository: Repository<Admin>) {
    super(adminRepository);
  }
}
