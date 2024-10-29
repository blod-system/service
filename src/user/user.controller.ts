import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
@Controller('/api/user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get('register')
  // register(@Param() param: []) {
  //   console.log('register', param);

  //   this.userService.register();
  // }
  register() {
    this.userService.register();
  }
  @Get()
  findAll() {
    return this.userService.findAll();
  }
}
