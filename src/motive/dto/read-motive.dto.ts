import { ApiProperty } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';
import { ResponseSuccess, PaginateResponseDto } from '../../base/dto/defaultResponse.dto';

export class ReadMotiveDto {
  @ApiProperty({
    description: 'Id do motivo do bloqueio/desbloqueio',
    example: '007'
  })
  @Expose()
  motiveId: number;

  @ApiProperty({
    description: 'Descrição do motivo para o bloqueio/debloqueio',
    example: 'Vendedor sem Pin Pad'
  })
  @Expose()
  motiveDescription: string;

  @ApiProperty({
    description: 'O tempo de bloqueio padrão para bloqueio em minutos',
    example: '10'
  })
  @Expose()
  blockTime: number

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

export class ResponseReadMotiveDto extends PaginateResponseDto<ReadMotiveDto[]> {
  @ApiProperty({ type: ReadMotiveDto, isArray: true })
  @Expose()
  @Type(() => ReadMotiveDto)
  items: ReadMotiveDto[];
}