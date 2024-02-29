import { BadRequestException, Injectable } from "@nestjs/common";
import { TypeOrmCrudService } from "@dataui/crud-typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { DeepPartial, Repository } from "typeorm";
import { Business } from "./entities/business.entity";
import { CrudRequest } from "@dataui/crud";
import { BusinessBranch } from "./entities/business-branch.entity";
import AddCardToBusiness from "./utils/addDetailsbusinessCreate";

@Injectable()
export class BusinessService extends TypeOrmCrudService<Business> {
  constructor(
    @InjectRepository(Business) businessRepository: Repository<Business>,
    @InjectRepository(BusinessBranch)
    private businessBranch: Repository<BusinessBranch>
  ) {
    super(businessRepository);
  }
  async createOne(
    req: CrudRequest,
    dto: DeepPartial<Business>
  ): Promise<Business> {
    const isExist = await this.repo.findOne({ where: { name: dto.name } });
    if (isExist) {
      throw new BadRequestException("Business name already exist");
    } else {
      const business = await this.repo.save(dto);
      const branch = business.branches[0];

      const cardParams = {
        shopName: branch.name,
        address: branch.location.address,
        details: branch.description,
        branchId: branch.id,
        businessId: business.id,
      };
      const card = AddCardToBusiness(cardParams);
      dto.branches[0].card = card as any;

      await this.businessBranch.save({
        ...branch,
        card: card as any,
      });

      return business;
    }
  }
}
