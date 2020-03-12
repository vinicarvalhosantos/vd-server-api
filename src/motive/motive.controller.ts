import { Controller, Body, Post, UseInterceptors, Query, Get, Param } from '@nestjs/common';
import { ApiTags, ApiResponse, ApiOperation, ApiBody, ApiQuery, ApiParam } from '@nestjs/swagger';
import { CreateMotiveDto, ReadMotiveDto, FindOneParams } from './dto';
import { MotiveService } from './motive.service';
import { ResponseMapper } from '../decorator/response-mapper.decorator';
import { HttpSuccessFilter } from '../filter/http-success.filter';
import { ResponseReadMotiveDto } from './dto/read-motive.dto';
import { PaginateResponseDto } from './../base/dto/defaultResponse.dto';

@Controller('api/v1/motives')
@ApiTags('motives')
@ApiResponse({ status: 401, description: 'Não autorizado' })
@ApiResponse({ status: 403, description: 'Acesso negado' })
export class MotiveController {
  constructor(private readonly motiveService: MotiveService) { }

  @Post()
  @ApiOperation({ summary: 'Criar um novo usuário' })
  @ApiBody({ type: CreateMotiveDto })
  @UseInterceptors(HttpSuccessFilter)
  @ApiResponse({ status: 201, description: 'Registro inserido com sucesso.', type: ReadMotiveDto })
  @ApiResponse({ status: 404, description: 'Registro não encontrado' })
  @ApiResponse({ status: 500, description: 'Erro na tentativa de inserir o registro' })
  @ResponseMapper(ReadMotiveDto)
  async create(@Body() createMotiveDto: CreateMotiveDto) {
    return await this.motiveService.create(createMotiveDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todas as transações' })
  @ApiResponse({ status: 200, description: 'Listagem dos registro realizadado com sucesso.', type: PaginateResponseDto })
  @ApiQuery({ name: "limit", required: false, type: Number })
  @ApiQuery({ name: "offset", required: false, type: Number })
  @UseInterceptors(HttpSuccessFilter)
  @ResponseMapper(ResponseReadMotiveDto)
  async findAll(@Query('limit') limit: number = 100, @Query('offset') page: number = 1) {
    return await this.motiveService.paginate({ page, limit });
  }

  @Get(':motiveId')
  @ApiOperation({ summary: 'Buscar motivo pelo id' })
  @UseInterceptors(HttpSuccessFilter)
  @ApiResponse({ status: 200, description: 'Busca do registro realizadado com sucesso.', type: ResponseReadMotiveDto })
  @ApiResponse({ status: 404, description: 'Registro não encontrado' })
  @ApiParam({ name: "motiveId" })
  @ResponseMapper(ReadMotiveDto)
  async findByMotiveId(@Param() params: FindOneParams) {
    return await this.motiveService.findByMotiveId(params.motiveId);
  }
}
