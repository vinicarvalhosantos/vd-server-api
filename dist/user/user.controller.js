"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const dto_1 = require("./dto");
const user_service_1 = require("./user.service");
const response_mapper_decorator_1 = require("../decorator/response-mapper.decorator");
const http_success_filter_1 = require("../filter/http-success.filter");
const read_user_dto_1 = require("./dto/read-user.dto");
const defaultResponse_dto_1 = require("../base/dto/defaultResponse.dto");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    async create(createUserDto) {
        return await this.userService.create(createUserDto);
    }
    async findAll(limit = 100, page = 1) {
        limit = limit > 100 || limit < 1 ? 100 : limit;
        page = page < 1 ? 1 : page;
        let data = await this.userService.paginate({ page, limit });
        const hostname = require("os").hostname();
        let response = new read_user_dto_1.ResponseReadUserDto();
        let meta = new defaultResponse_dto_1.Meta();
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
    async findById(params) {
        return await this.userService.findOne(params.userUniqueId);
    }
    async findByEmail(params) {
        return await this.userService.findOne(params.email);
    }
};
__decorate([
    common_1.Post(),
    swagger_1.ApiOperation({ summary: 'Criar um novo usuário' }),
    swagger_1.ApiBody({ type: dto_1.CreateUserDto }),
    common_1.UseInterceptors(http_success_filter_1.HttpSuccessFilter),
    swagger_1.ApiResponse({ status: 201, description: 'Registro inserido com sucesso.', type: dto_1.ReadUserDto }),
    swagger_1.ApiResponse({ status: 404, description: 'Registro não encontrado' }),
    swagger_1.ApiResponse({ status: 500, description: 'Erro na tentativa de inserir o registro' }),
    response_mapper_decorator_1.ResponseMapper(dto_1.ReadUserDto),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.CreateUserDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "create", null);
__decorate([
    common_1.Get(),
    swagger_1.ApiOperation({ summary: 'Listar todos os usuários' }),
    swagger_1.ApiResponse({ status: 200, description: 'Listagem dos usuários realizadado com sucesso.', type: read_user_dto_1.ResponseReadUserDto }),
    swagger_1.ApiQuery({ name: "limit", required: false, type: Number }),
    swagger_1.ApiQuery({ name: "offset", required: false, type: Number }),
    response_mapper_decorator_1.ResponseMapper(read_user_dto_1.ResponseReadUserDto),
    __param(0, common_1.Query('limit')), __param(1, common_1.Query('offset')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "findAll", null);
__decorate([
    common_1.Get(':userUniqueId'),
    swagger_1.ApiOperation({ summary: 'Buscar usuário pelo id' }),
    common_1.UseInterceptors(http_success_filter_1.HttpSuccessFilter),
    swagger_1.ApiResponse({ status: 200, description: 'Busca do registro realizadado com sucesso.', type: dto_1.ReadUserDto }),
    swagger_1.ApiResponse({ status: 404, description: 'Registro não encontrado' }),
    swagger_1.ApiParam({ name: "userUniqueId" }),
    response_mapper_decorator_1.ResponseMapper(dto_1.ReadUserDto),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.FindOneParams]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "findById", null);
__decorate([
    common_1.Get(':email'),
    swagger_1.ApiOperation({ summary: 'Buscar usuário pelo email' }),
    common_1.UseInterceptors(http_success_filter_1.HttpSuccessFilter),
    swagger_1.ApiResponse({ status: 200, description: 'Busca do registro realizadado com sucesso.', type: dto_1.ReadUserDto }),
    swagger_1.ApiResponse({ status: 404, description: 'Registro não encontrado' }),
    swagger_1.ApiParam({ name: "email" }),
    response_mapper_decorator_1.ResponseMapper(dto_1.ReadUserDto),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.FindOneParams]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "findByEmail", null);
UserController = __decorate([
    common_1.Controller('api/v1/users'),
    swagger_1.ApiTags('users'),
    swagger_1.ApiResponse({ status: 401, description: 'Não autorizado' }),
    swagger_1.ApiResponse({ status: 403, description: 'Acesso negado' }),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map