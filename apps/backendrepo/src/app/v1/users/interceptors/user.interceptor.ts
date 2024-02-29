import {
  BadRequestException,
  CallHandler,
  ExecutionContext,
  NestInterceptor,
} from "@nestjs/common";
import { Observable } from "rxjs";
import { CreateUserDto } from "../dto/create-user.dto";

export class UserInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>
  ): Observable<CreateUserDto> {
    const req = context.switchToHttp().getRequest();
    if (!req.body) {
      throw new BadRequestException("Invalid request.");
    } else {
      //add extra info to the user object obtained from Local Strategy (Passport)
      if (req.user) {
        req.user["userIP"] = req.connection.remoteAddress;
        req.user["userDevice"] = req.headers["user-agent"];
        //add userId to the body (if there is a body in the request)
        if (req.body) {
          req.body["userId"] = req.user.userId;
        }
      } else {
        req.body["userIP"] = req.connection.remoteAddress;
        req.body["userDevice"] = req.headers["user-agent"];
      }
      return next.handle();
    }
  }
}
