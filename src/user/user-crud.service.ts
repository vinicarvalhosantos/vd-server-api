import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseCrudService } from '../base/base-crud.service';
import { User } from './user.entity';

@Injectable()
export class UserCrudService extends BaseCrudService<User> {
  constructor(@InjectRepository(User) readonly repository: Repository<User>) {
    super(repository);
  }
}