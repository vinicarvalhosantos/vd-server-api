import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, Min, MaxLength, Max, IsString } from 'class-validator';
import { UserPermissionEnum } from '../user.enum';

export class CreateUserDto {
  @ApiProperty({
    description: 'Id do usuário'
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
    description: 'ID da Filial'
  })
  @IsNotEmpty()
  @IsString()
  branchId: string;

  @ApiProperty({
    description: 'Status ativação Caixa Móvel'
  })
  @IsNotEmpty()
  @IsNumber()
  status: number;
}