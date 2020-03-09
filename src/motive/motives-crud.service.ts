import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseCrudService } from '../base/base-crud.service';
import { Motives } from './motives.entity';

@Injectable()
export class UserCrudService extends BaseCrudService<Motives> {
  constructor(@InjectRepository(Motives) readonly repository: Repository<Motives>) {
    super(repository);
  }
}