import { CreateUserDto, FindOneParams } from './dto';
import { UserService } from './user.service';
import { ResponseReadUserDto } from './dto/read-user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(createUserDto: CreateUserDto): Promise<import("./user.entity").User>;
    findAll(limit?: number, page?: number): Promise<ResponseReadUserDto>;
    findById(params: FindOneParams): Promise<import("./user.entity").User>;
    findByEmail(params: FindOneParams): Promise<import("./user.entity").User>;
}
