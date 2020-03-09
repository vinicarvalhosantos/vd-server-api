import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsNumber } from 'class-validator';
import { UserPermissionEnum, UserStatusEnum } from '../user.enum';

export class UpdateUserDto {
  @ApiProperty({
    description: 'Unique Id do usuário'
  })
  @IsNotEmpty()
  @IsString()
  userId: string;

  @ApiProperty({
    description: 'Nome de usuário'
  })
  @IsNotEmpty()
  @IsString()
  username: string;


  @ApiProperty({
    description: 'Status ativação Caixa Móvel'
  })
  @IsNotEmpty()
  @IsNumber()
  branchID: number;
}