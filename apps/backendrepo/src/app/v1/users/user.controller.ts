import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  Post,
  Request,
  ServiceUnavailableException,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UserInterceptor } from './interceptors/user.interceptor';
import { Public } from '../auth/public.auth';
import { LocalAuthGuard } from '../auth/guard/local.auth.guard';
import { AuthService } from '../auth/auth.service';
import { HttpService } from '@nestjs/axios';
import { fileURLToPath } from 'url';

@UseInterceptors(ClassSerializerInterceptor)
@Controller({
  path: 'user',
  version: '1',
})
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,
    private readonly httpService: HttpService
  ) {}

  @Public()
  @Post('signup')
  @UseInterceptors(UserInterceptor)
  async signUp(@Body() user: CreateUserDto): Promise<string> {
    console.log('Testee user : ', user);
    const didCreate = await this.userService.registerUser(user);
    if (didCreate) {
      return 'success';
    } else {
      throw new ServiceUnavailableException('Unable to create account.');
    }
  }

  @Public()
  @UseGuards(LocalAuthGuard)
  @Post('login')
  @UseInterceptors(UserInterceptor)
  async login(@Request() req: any) {
    const dir = __dirname;
    console.log('Testee entities : repo', dir);
    return this.authService.login(req.user);
  }

  @Public()
  // @UseGuards(LocalAuthGuard)
  @Get('test')
  // @UseInterceptors(UserInterceptor)
  async test() {
    const dir = __dirname + '/src/app/v1/entities/tmp.json';
    const tmp = fileURLToPath(
      'file:////home/dev/Desktop/Academy/JS/commerce/ecommerce/dist/apps/backendrepo'
    );
    // const getFile = this.httpService.axiosRef
    //   .get('file://' + dir)
    //   .catch((error) => {
    //     console.log('Testee read file error : ', error);
    //   });
    console.log('Testee entities : repo', tmp);
    return 'Working';
    // return this.authService.login(req.user);
  }
}
