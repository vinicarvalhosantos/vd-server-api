import { Controller, Get, Body, Post, Param, UseInterceptors, Query, Put } from '@nestjs/common';
import { ApiTags, ApiResponse, ApiOperation, ApiParam, ApiBody, ApiQuery } from '@nestjs/swagger';
import { CreateUserDto, ReadUserDto, FindOneParams } from './dto';
import { UserService } from './user.service';
import { ResponseMapper } from '../decorator/response-mapper.decorator';
import { HttpSuccessFilter } from '../filter/http-success.filter';
import { ResponseReadUserDto } from './dto/read-user.dto';
import { Meta } from '../base/dto/defaultResponse.dto';
import { UserDto } from './dto/update-user.dto';

@Controller('api/v1/users')
@ApiTags('users')
@ApiResponse({ status: 401, description: 'Não autorizado' })
@ApiResponse({ status: 403, description: 'Acesso negado' })
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Get()
  @ApiOperation({ summary: 'Listar todos os usuários' })
  @ApiResponse({ status: 200, description: 'Listagem dos usuários realizadado com sucesso.', type: ResponseReadUserDto })
  @ApiQuery({ name: "limit", required: false, type: Number })
  @ApiQuery({ name: "offset", required: false, type: Number })
  @UseInterceptors(HttpSuccessFilter)
  @ResponseMapper(ReadUserDto)
  async findAll(@Query('limit') limit: number = 100, @Query('offset') page: number = 1) {
    return await this.userService.paginate({ page, limit });
  }

  @Get(':userId')
  @ApiOperation({ summary: 'Buscar usuário pelo id' })
  @UseInterceptors(HttpSuccessFilter)
  @ApiResponse({ status: 200, description: 'Busca do registro realizadado com sucesso.', type: ResponseReadUserDto })
  @ApiResponse({ status: 404, description: 'Registro não encontrado' })
  @ApiParam({ name: "userId" })
  @ResponseMapper(ReadUserDto)
  async findById(@Param() params: FindOneParams) {
    return await this.userService.findOne(params.userId);
  }

  @Put(':userId')
  @ApiOperation({ summary: 'Atualizar status caixa móvel do usuário' })
  @UseInterceptors(HttpSuccessFilter)
  @ApiBody({ type: UserDto })
  @ApiParam({ name: "userId" })
  @ApiResponse({ status: 201, description: 'Registro atualizado com sucesso.', type: ResponseReadUserDto })
  @ApiResponse({ status: 404, description: 'Registro não encontrado' })
  @ApiResponse({ status: 500, description: 'Erro na tentativa de atualizar o registro' })
  @ResponseMapper(UserDto)
  async updateStatusUser(@Param() params: FindOneParams, @Body() updateUserDto: UserDto) {
    return await this.userService.updateUser(params.userId, updateUserDto);
  }
}
