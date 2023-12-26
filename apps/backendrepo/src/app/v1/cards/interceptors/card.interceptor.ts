import {
  BadRequestException,
  CallHandler,
  ExecutionContext,
  NestInterceptor,
} from "@nestjs/common";
import { Observable } from "rxjs";
import { CreateCardDto } from "../dto/create.card.dto";

export class CardInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>
  ): Observable<CreateCardDto> {
    console.log("Testee CardInterceptor");
    const req = context.switchToHttp().getRequest();
    if (!req.body) {
      throw new BadRequestException("Invalid request.");
    } else {
      req.body["userIP"] = req.connection.remoteAddress;
      return next.handle();
    }
  }
}
