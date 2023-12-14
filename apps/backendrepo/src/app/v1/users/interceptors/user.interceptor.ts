import {
  BadRequestException,
  CallHandler,
  ExecutionContext,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { CreateUserDto } from '../dto/create-user.dto';

export class UserInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>
  ): Observable<CreateUserDto> {
    const req = context.switchToHttp().getRequest();
    if (!req.body) {
      throw new BadRequestException('Invalid request.');
    } else {
      req.body['userIP'] = req.connection.remoteAddress;
      return next.handle();
    }
  }
}
