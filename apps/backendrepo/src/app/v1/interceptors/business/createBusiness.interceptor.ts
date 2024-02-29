import {
  BadRequestException,
  CallHandler,
  ExecutionContext,
  NestInterceptor,
} from "@nestjs/common";
import { Observable } from "rxjs";
import { CreateBusinessDto } from "../../business/dto/create-business.dto";
import { IAdminCreate } from "../../types/business/admin";
import AddCardToBusiness from "../../business/utils/addDetailsbusinessCreate";
import { ICreateBusinessBranch } from "../../types/business";

export class BusinessCreateInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>
  ): Observable<CreateBusinessDto> {
    const req = context.switchToHttp().getRequest();
    if (!req.body || !req.user) {
      throw new BadRequestException("Invalid request");
    } else {
      const admins: IAdminCreate[] = req.body["admins"];
      if (admins?.length) {
        const newAdmins: IAdminCreate[] = admins.map((admin) => ({
          ...admin,
          userId: req.user.userId,
        }));

        //replace admins
        req.body["admins"] = newAdmins;

        //add card
        // if (!req.body["branches"][0]) {
        //   throw new BadRequestException("Invalid request");
        // }

        // const branch = req.body["branches"][0] as ICreateBusinessBranch;
        // const cardParams = {
        //   shopName: branch.name,
        //   address: branch.location.address,
        //   details: branch.description,
        // };
        // const card = AddCardToBusiness(cardParams);
        // req.body["branches"][0]["card"] = card;
      } else {
        throw new BadRequestException("Admin not found");
      }

      return next.handle();
    }
  }
}
