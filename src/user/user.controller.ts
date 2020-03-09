import { Controller, Get, Body, Post, Param, UseInterceptors, Query } from '@nestjs/common';
import { ApiTags, ApiResponse, ApiOperation, ApiParam, ApiBody, ApiQuery } from '@nestjs/swagger';
import { CreateUserDto, ReadUserDto, FindOneParams } from './dto';
import { UserService } from './user.service';
import { ResponseMapper } from '../decorator/response-mapper.decorator';
import { HttpSuccessFilter } from '../filter/http-success.filter';
import { ResponseReadUserDto } from './dto/read-user.dto';
import { Meta } from '../base/dto/defaultResponse.dto';

@Controller('api/v1/users')
@ApiTags('users')
@ApiResponse({ status: 401, description: 'Não autorizado' })
@ApiResponse({ status: 403, description: 'Acesso negado' })
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post()
  @ApiOperation({ summary: 'Criar um novo usuário' })
  @ApiBody({ type: CreateUserDto })
  @UseInterceptors(HttpSuccessFilter)
  @ApiResponse({ status: 201, description: 'Registro inserido com sucesso.', type: ReadUserDto })
  @ApiResponse({ status: 404, description: 'Registro não encontrado' })
  @ApiResponse({ status: 500, description: 'Erro na tentativa de inserir o registro' })
  @ResponseMapper(ReadUserDto)
  async create(@Body() createUserDto: CreateUserDto) {
    return await this.userService.create(createUserDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos os usuários' })
  @ApiResponse({ status: 200, description: 'Listagem dos usuários realizadado com sucesso.', type: ResponseReadUserDto })
  @ApiQuery({ name: "limit", required: false, type: Number })
  @ApiQuery({ name: "offset", required: false, type: Number })
  @ResponseMapper(ResponseReadUserDto)
  async findAll(@Query('limit') limit: number = 100, @Query('offset') page: number = 1) {
    limit = limit > 100 || limit < 1 ? 100 : limit;
    page = page < 1 ? 1 : page
    let data = await this.userService.paginate({ page, limit });
    const hostname = require("os").hostname();
    let response = new ResponseReadUserDto();
    let meta = new Meta();
    response.records = [];

    meta.server = hostname;
    meta.limit = limit;
    meta.offset = page;
    meta.recordCount = data.items.length;

    response.meta = meta;
    response.records = data.items;
    response.success = true;
    return response;
  }

  @Get(':userId')
  @ApiOperation({ summary: 'Buscar usuário pelo id' })
  @UseInterceptors(HttpSuccessFilter)
  @ApiResponse({ status: 200, description: 'Busca do registro realizadado com sucesso.', type: ReadUserDto })
  @ApiResponse({ status: 404, description: 'Registro não encontrado' })
  @ApiParam({ name: "useId" })
  @ResponseMapper(ReadUserDto)
  async findById(@Param() params: FindOneParams) {
    return await this.userService.findOne(params.userId);
  }
}
