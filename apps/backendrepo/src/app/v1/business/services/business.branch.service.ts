import { Injectable } from "@nestjs/common";
import { TypeOrmCrudService } from "@dataui/crud-typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { BusinessBranch } from "../../entities/business-branch.entity";

@Injectable()
export class BusinessBranchService extends TypeOrmCrudService<BusinessBranch> {
  constructor(
    @InjectRepository(BusinessBranch)
    businessBranchRepository: Repository<BusinessBranch>
  ) {
    super(businessBranchRepository);
  }
}
