import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
  ) {}

  async register(): Promise<User> {
    const user = new User();
    user.name = 'test';
    const result = await this.userRepository.save(user);
    console.log(result);
    return result;
  }
  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }
}
