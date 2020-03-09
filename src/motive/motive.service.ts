import { Injectable, HttpException, HttpService } from '@nestjs/common';
import { AxiosError } from 'axios';
import { Motive as Motive } from './motive.entity';
import { MotiveCrudService } from './motive-crud.service';
import { CreateMotiveDto, ReadMotiveDto } from './dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { paginate, IPaginationOptions } from 'nestjs-typeorm-paginate';
import { LogService } from 'src/logger/log.service';

@Injectable()
export class MotiveService {
  constructor(
    private readonly motiveCrudService: MotiveCrudService,
    private readonly logger: LogService,
    @InjectRepository(Motive) private readonly repository: Repository<ReadMotiveDto>) { }


  async create(dtoCreate: CreateMotiveDto) {
  let motive = new Motive();
  motive.blockTime = dtoCreate.blockTime;
  motive.motiveDescription = dtoCreate.motiveDescription;
  motive.motiveId = dtoCreate.motiveId;
  return await this.motiveCrudService.create(motive).then(async response => {
    return response;
  }).catch(error => {
    this.logger.error(`Erro ao tentar criar o usuário '${motive.motiveDescription}'\nErro: ${error}`)
    throw new HttpException(`Houve um erro ao tentar criar o usuario '${motive.motiveDescription}'`, 400);
  })

}
async paginate(options: IPaginationOptions) {
  return await paginate<ReadMotiveDto>(this.repository, options);;
}
async findOne(id: string) {
  return await this.motiveCrudService.findOne(id);
}
}
