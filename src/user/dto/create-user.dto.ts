import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, Min, MaxLength, Max, IsString } from 'class-validator';
import { UserPermissionEnum } from '../user.enum';

export class CreateUserDto {
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
userPermission: UserPermissionEnum;
}