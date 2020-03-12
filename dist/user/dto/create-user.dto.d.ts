import { UserPermissionEnum } from '../user.enum';
export declare class CreateUserDto {
    userUniqueId: string;
    username: string;
    password: string;
    userEmail: string;
    userPermission: UserPermissionEnum;
}
