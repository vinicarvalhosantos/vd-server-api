import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository, FindOneOptions } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseCrudService } from '../base/base-crud.service';
import { User } from './user.entity';

@Injectable()
export class UserCrudService extends BaseCrudService<User> {
  constructor(@InjectRepository(User) readonly repository: Repository<User>
  ) {
    super(repository);
  }

  findOneUser(
    idOrOptions: number | FindOneOptions<User> | string,
  ): Promise<User> {
    return this.repository.findOne(idOrOptions as any).then(entity => {
      return entity;
    });
  }

  updateUser(userid: number | string, model: User): Promise<User> {
    return this.repository
      .findOne({ where: { userId: userid } })
      .then(entity => {
        if (!entity) throw new NotFoundException();
        return this.repository.update(userid, model);
      })
      .then(() => this.repository.findOne({ where: { userId: userid } }));
  }
}
