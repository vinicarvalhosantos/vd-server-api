import { UserPermissionEnum, UserStatusEnum } from '../user.enum';
export declare class UpdateUserDto {
    userUniqueId: string;
    username: string;
    password: string;
    userEmail: string;
    userPermission: UserPermissionEnum;
    status: UserStatusEnum;
}
