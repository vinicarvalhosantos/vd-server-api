import { Repository } from 'typeorm';
import { BaseCrudService } from '../base/base-crud.service';
import { User } from './user.entity';
export declare class UserCrudService extends BaseCrudService<User> {
    readonly repository: Repository<User>;
    constructor(repository: Repository<User>);
}
