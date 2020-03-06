import { ApiProperty } from '@nestjs/swagger';
import { Expose, Type, Exclude } from 'class-transformer';
import { ResponseSuccess } from '../../base/dto/defaultResponse.dto';
import { UserPermissionEnum } from '../user.enum';

export class ReadUserDto {
  @ApiProperty({
    description: 'ID do usuário'
  })
  @Expose()
  userId: number;

  @ApiProperty({
    description: 'UniqueId do usuário'
  })
  @Expose()
  userUniqueId: string;

  @ApiProperty({
    description: 'Nome de usuário'
  })
  @Expose()
  username: string

  @ApiProperty({
    description: "Senha do usuário"
  })
  @Exclude()
  password: string;

  @ApiProperty({
    description: 'Email do usuário'
  })
  @Expose()
  userEmail: string;

  @ApiProperty({
    description: 'Nivel de permissão(Cargo) do usuário'
  })
  @Expose()
  userPermission: UserPermissionEnum;

  @ApiProperty({
    description: 'Status do usuário'
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

export class ResponseReadUserDto extends ResponseSuccess<ReadUserDto[]> {
  @ApiProperty({ type: ReadUserDto, isArray: true })
  @Expose()
  @Type(() => ReadUserDto)
  records: ReadUserDto[];
}