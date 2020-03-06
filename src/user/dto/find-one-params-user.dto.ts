import { IsUUID, IsString } from 'class-validator';

export class FindOneParams {
  @IsUUID('4')
  userUniqueId: string;

  @IsString()
  email:string;
}
