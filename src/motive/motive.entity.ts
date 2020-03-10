import { Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryColumn, PrimaryGeneratedColumn, Index } from 'typeorm';

@Entity()
export class Motive {

  @PrimaryGeneratedColumn("increment", { name: "id" })
  id: number;

  @Column({ name: "motive_id", unique: true })
  motiveId: string;

  @Column({ name: "motive_description" })
  motiveDescription: string;

  @Column({ name: "block_time" })
  blockTime: number;

  @CreateDateColumn({ name: "created_at", type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
  createdAt?: Date;

  @UpdateDateColumn({ name: "updated_at", type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
  updatedAt?: Date;
}