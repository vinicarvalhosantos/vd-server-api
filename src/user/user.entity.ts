import { Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn } from 'typeorm';
import { UserPermissionEnum, UserStatusEnum } from './user.enum';

@Entity()
export class User {

  @PrimaryGeneratedColumn("increment", { name: "id" })
  id: number;

  @Column({ name: "userId", unique: true })
  userId: string;

  @Column({ name: "username" })
  username: string;

  @Column({ name: "branchId" })
  branchId: string;

  @Column({ name: "status" })
  status: number;

  @CreateDateColumn({ name: "created_at", type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
  createdAt?: Date;

  @UpdateDateColumn({ name: "updated_at", type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
  updatedAt?: Date;
}