import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateMotiveDto {
    @ApiProperty({
        description: 'Descrição do motivo para o bloqueio/debloqueio',
        example: 'Vendedor sem Pin Pad'
    })
    @IsNotEmpty()
    @IsString()
    motiveDescription: string;

    @ApiProperty({
        description: 'O tempo de bloqueio padrão para bloqueio em minutos',
        example: '10'
    })
    @IsNotEmpty()
    blockTime: number;
}