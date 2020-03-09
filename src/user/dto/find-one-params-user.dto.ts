import { IsUUID, IsString } from 'class-validator';

export class FindOneParams {
  @IsUUID('4')
  userId: string;
}
