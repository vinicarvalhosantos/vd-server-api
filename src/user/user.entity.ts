import { Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn, Index } from 'typeorm';


@Entity()
export class User {

  @PrimaryGeneratedColumn("increment", { name: "id" })
  id: number;

  @Column({ name: "user_id", unique: true })
  userId: string;

  @Column({ name: "username" })
  username: string;

  @Column({ name: "branch_id" })
  branchId: string;

  @Column({ name: "status" })
  status: number;

  @CreateDateColumn({ name: "created_at", type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
  createdAt?: Date;

  @UpdateDateColumn({ name: "updated_at", type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
  updatedAt?: Date;
}