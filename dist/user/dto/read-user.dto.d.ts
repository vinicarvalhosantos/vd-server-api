import { ResponseSuccess } from '../../base/dto/defaultResponse.dto';
import { UserPermissionEnum } from '../user.enum';
export declare class ReadUserDto {
    userId: number;
    userUniqueId: string;
    username: string;
    password: string;
    userEmail: string;
    userPermission: UserPermissionEnum;
    status: number;
    createdAt: Date;
    updatedAt: Date;
}
export declare class ResponseReadUserDto extends ResponseSuccess<ReadUserDto[]> {
    records: ReadUserDto[];
}
