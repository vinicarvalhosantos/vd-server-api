import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { UserPermissionEnum, UserStatusEnum } from '../user.enum';

export class UpdateUserDto {
  @ApiProperty({
    description: 'Unique Id do usuário'
})
@IsNotEmpty()
@IsString()
userUniqueId: string;

@ApiProperty({
    description: 'Nome de usuário'
})
@IsNotEmpty()
@IsString()
username: string;

@ApiProperty({
    description: 'Senha do usuário'
})
@IsNotEmpty()
@IsString()
password: string;

@ApiProperty({
    description: 'Email do usuário'
})
@IsNotEmpty()
@IsString()
userEmail: string;

@ApiProperty({
    description: 'Nivel de permissão(Cargo) do usuário'
})
@IsNotEmpty()
@IsString()
userPermission: UserPermissionEnum;

@ApiProperty({
    description: 'Status do usuário'
})
@IsNotEmpty()
@IsString()
status: UserStatusEnum;
}