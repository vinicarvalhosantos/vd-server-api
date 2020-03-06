import { Injectable, HttpException, HttpService } from '@nestjs/common';
import { AxiosError } from 'axios';
import { User as User } from './user.entity';
import { UserCrudService } from './user-crud.service';
import { CreateUserDto, ReadUserDto } from './dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { paginate, IPaginationOptions } from 'nestjs-typeorm-paginate';
import { LogService } from 'src/logger/log.service';

@Injectable()
export class UserService {
  constructor(
    private readonly userCrudService: UserCrudService,
    private readonly logger: LogService,
    @InjectRepository(User) private readonly repositry: Repository<ReadUserDto>,
    private readonly httpService: HttpService) {
    this.httpService.axiosRef.interceptors.response.use(undefined, (err: AxiosError) => {
      throw new HttpException(err.response, err.response.status)
    });
  }


  async create(dtoCreate: CreateUserDto) {
    let user = new User();
    user.password = dtoCreate.password;
    user.userEmail = dtoCreate.userEmail;
    user.userUniqueId = dtoCreate.userUniqueId;
    user.username = dtoCreate.username;
    return await this.userCrudService.create(user).then(async response => {
      return response;
    }).catch(error => {
      this.logger.error(`Erro ao tentar criar o usuário '${user.userUniqueId} - ${user.username}'\nErro: ${error}`)
      throw new HttpException(`Houve um erro ao tentar criar o usuario '${user.userUniqueId} - ${user.username}'`, 400);
    })

  }
  async paginate(options: IPaginationOptions) {
    return await paginate<ReadUserDto>(this.repositry, options);;
  }
  async findOne(id: string) {
    return await this.userCrudService.findOne(id);
  }
}
