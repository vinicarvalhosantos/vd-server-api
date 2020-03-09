import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseCrudService } from '../base/base-crud.service';
import { Motive } from './motive.entity';

@Injectable()
export class MotiveCrudService extends BaseCrudService<Motive> {
  constructor(@InjectRepository(Motive) readonly repository: Repository<Motive>) {
    super(repository);
  }
}