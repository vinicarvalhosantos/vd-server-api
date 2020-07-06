import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class UserDto {
  // @ApiProperty({
  //   description: 'Id do usuário'
  // })
  // @IsNotEmpty()
  // @IsString()
  // userId: string;

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