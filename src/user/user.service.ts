import { Injectable, HttpException, HttpService } from '@nestjs/common';
import { AxiosError } from 'axios';
import { User as User } from './user.entity';
import { UserCrudService } from './user-crud.service';
import { CreateUserDto, ReadUserDto, } from './dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { paginate, IPaginationOptions } from 'nestjs-typeorm-paginate';
import { LogService } from 'src/logger/log.service';
import { HistoryService } from '../history/history.service'
import { UserDto } from './dto/update-user.dto';
@Injectable()
export class UserService {
  constructor(
    private readonly userCrudService: UserCrudService,
    private readonly logger: LogService,
    @InjectRepository(User) private readonly repository: Repository<ReadUserDto>,
    private readonly httpService: HttpService,
    private readonly historyService: HistoryService) {
    this.httpService.axiosRef.interceptors.response.use(undefined, (err: AxiosError) => {
      throw new HttpException(err.response, err.response.status)
    });
  }

  async create(userId: string, dtoUser: UserDto) {
    let user = new User();
    user.username = dtoUser.username;
    user.branchId = dtoUser.branchId;
    user.status = dtoUser.status;
    user.userId = userId;

    return await this.userCrudService.create(user).then(async response => {
      return response;
    }).catch(error => {
      this.logger.error(`Erro ao tentar criar o usuário '${user.userId} - ${user.username}'\nErro: ${error}`)
      throw new HttpException(`Houve um erro ao tentar criar o usuario '${user.userId} - ${user.username}'`, 400);
    })
  }
  async paginate(options: IPaginationOptions) {
    return await paginate<ReadUserDto>(this.repository, options);;
  }
  async findOne(id: string) {
    return await this.userCrudService.findOne({ where: { userId: id } });
  }

  async updateUser(userId: string, dtoUpdate: UserDto) {
    let user = new User();
    var responseUser = await this.userCrudService.findOneUser({ where: { userId: userId } });
    if (!responseUser) {
      await this.create(userId, dtoUpdate);
    }
    else {
      user.status = dtoUpdate.status;
      user.userId = userId;
      user.branchId = dtoUpdate.branchId;
      user.username = dtoUpdate.username;

      return await this.userCrudService.updateUser(userId, user).catch(error => {
        this.logger.error(`Erro ao tentar atualizar o usuário '${user.userId} - ${user.username}'\nErro: ${error}`)
        throw new HttpException(`Houve um erro ao tentar atualizar o usuario '${user.userId} - ${user.username}'`, 400);
      })
    }
  }
}
