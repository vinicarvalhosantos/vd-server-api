import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class Meta {
  @ApiProperty({
    description: 'Servidor',
  })
  @Expose()
  server: string;

  @ApiProperty({
    description: 'Limit',
  })
  @Expose()
  limit: number;

  @ApiProperty({
    description: 'offset',
  })
  @Expose()
  offset: number;

  @ApiProperty({
    description: 'Quantidade de Registros',
  })
  @Expose()
  recordCount: number;
}

export abstract class ResponseSuccess<TypeData> {
  abstract get records(): TypeData;

  @ApiProperty({
    description: 'Informações do Retorno',
  })
  @Expose()
  meta: Meta;

  @ApiProperty({
    description: 'Status',
  })
  @Expose()
  success: boolean;
}
