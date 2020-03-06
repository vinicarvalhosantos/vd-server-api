import { Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn } from 'typeorm';
import { UserPermissionEnum, UserStatusEnum } from './user.enum';

@Entity()
export class User {

  @PrimaryGeneratedColumn("increment", { name: "userId" })
  userId: number;

  @Column("uuid", { name: "userUniqueId", unique: true })
  userUniqueId: string;

  @Column({name: "username" })
  username: string;

  @Column({name: "password" })
  password: string;

  @Column({name: "userEmail", unique: true })
  userEmail: string;

  @Column({ name: "userPermission", type: "enum", enum: UserPermissionEnum })
  userPermission: number;

  @Column({ name: "status", type: "enum", enum: UserStatusEnum})
  status: UserStatusEnum;

  @CreateDateColumn({ name: "created_at", type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
  createdAt?: Date;

  @UpdateDateColumn({ name: "updated_at", type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
  updatedAt?: Date;
}