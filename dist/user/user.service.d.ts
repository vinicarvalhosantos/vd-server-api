import { HttpService } from '@nestjs/common';
import { User as User } from './user.entity';
import { UserCrudService } from './user-crud.service';
import { CreateUserDto, ReadUserDto } from './dto';
import { Repository } from 'typeorm';
import { IPaginationOptions } from 'nestjs-typeorm-paginate';
import { LogService } from 'src/logger/log.service';
export declare class UserService {
    private readonly userCrudService;
    private readonly logger;
    private readonly repositry;
    private readonly httpService;
    constructor(userCrudService: UserCrudService, logger: LogService, repositry: Repository<ReadUserDto>, httpService: HttpService);
    create(dtoCreate: CreateUserDto): Promise<User>;
    paginate(options: IPaginationOptions): Promise<import("nestjs-typeorm-paginate").Pagination<ReadUserDto>>;
    findOne(id: string): Promise<User>;
}
