import { ApiProperty } from '@nestjs/swagger';
import { Expose, Type, Exclude } from 'class-transformer';
import { ResponseSuccess, PaginateResponseDto } from '../../base/dto/defaultResponse.dto';
import { UserPermissionEnum } from '../user.enum';

export class ReadUserDto {
  @ApiProperty({
    description: 'ID do usuário'
  })
  @Expose()
  
  id: number;
  @ApiProperty({
    description: 'ID do usuário'
  })
  @Expose()
  userId: number;

  @ApiProperty({
    description: 'Nome de usuário'
  })
  @Expose()
  username: string

  @ApiProperty({
    description: "Id da Filial"
  })
  @Exclude()
  branchID: string;

  @ApiProperty({
    description: 'Status ativação Caixa Móvel'
  })
  @Expose()
  status: number;

  @ApiProperty({
    description: 'Data de criação'
  })
  @Expose()
  createdAt: Date;

  @ApiProperty({
    description: 'Data de alteração'
  })
  @Expose()
  updatedAt: Date;
}

export class ResponseReadUserDto extends PaginateResponseDto<ReadUserDto[]> {
  @ApiProperty({ type: ReadUserDto, isArray: true })
  @Expose()
  @Type(() => ReadUserDto)
  items: ReadUserDto[];
}