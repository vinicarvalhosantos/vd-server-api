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
const user_entity_1 = require("./user.entity");
const user_crud_service_1 = require("./user-crud.service");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const nestjs_typeorm_paginate_1 = require("nestjs-typeorm-paginate");
const log_service_1 = require("../logger/log.service");
let UserService = class UserService {
    constructor(userCrudService, logger, repositry, httpService) {
        this.userCrudService = userCrudService;
        this.logger = logger;
        this.repositry = repositry;
        this.httpService = httpService;
        this.httpService.axiosRef.interceptors.response.use(undefined, (err) => {
            throw new common_1.HttpException(err.response, err.response.status);
        });
    }
    async create(dtoCreate) {
        let user = new user_entity_1.User();
        user.password = dtoCreate.password;
        user.userEmail = dtoCreate.userEmail;
        user.userUniqueId = dtoCreate.userUniqueId;
        user.username = dtoCreate.username;
        return await this.userCrudService.create(user).then(async (response) => {
            return response;
        }).catch(error => {
            this.logger.error(`Erro ao tentar criar o usuário '${user.userUniqueId} - ${user.username}'\nErro: ${error}`);
            throw new common_1.HttpException(`Houve um erro ao tentar criar o usuario '${user.userUniqueId} - ${user.username}'`, 400);
        });
    }
    async paginate(options) {
        return await nestjs_typeorm_paginate_1.paginate(this.repositry, options);
        ;
    }
    async findOne(id) {
        return await this.userCrudService.findOne(id);
    }
};
UserService = __decorate([
    common_1.Injectable(),
    __param(2, typeorm_1.InjectRepository(user_entity_1.User)),
    __metadata("design:paramtypes", [user_crud_service_1.UserCrudService,
        log_service_1.LogService,
        typeorm_2.Repository,
        common_1.HttpService])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map