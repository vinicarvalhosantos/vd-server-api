import { UserStatusEnum } from './user.enum';
export declare class User {
    userId: number;
    userUniqueId: string;
    username: string;
    password: string;
    userEmail: string;
    userPermission: number;
    status: UserStatusEnum;
    createdAt?: Date;
    updatedAt?: Date;
}
