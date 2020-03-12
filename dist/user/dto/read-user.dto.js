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
Object.defineProperty(exports, "__esModule", { value: true });
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const defaultResponse_dto_1 = require("../../base/dto/defaultResponse.dto");
const user_enum_1 = require("../user.enum");
class ReadUserDto {
}
__decorate([
    swagger_1.ApiProperty({
        description: 'ID do usuário'
    }),
    class_transformer_1.Expose(),
    __metadata("design:type", Number)
], ReadUserDto.prototype, "userId", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: 'UniqueId do usuário'
    }),
    class_transformer_1.Expose(),
    __metadata("design:type", String)
], ReadUserDto.prototype, "userUniqueId", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: 'Nome de usuário'
    }),
    class_transformer_1.Expose(),
    __metadata("design:type", String)
], ReadUserDto.prototype, "username", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: "Senha do usuário"
    }),
    class_transformer_1.Exclude(),
    __metadata("design:type", String)
], ReadUserDto.prototype, "password", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: 'Email do usuário'
    }),
    class_transformer_1.Expose(),
    __metadata("design:type", String)
], ReadUserDto.prototype, "userEmail", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: 'Nivel de permissão(Cargo) do usuário'
    }),
    class_transformer_1.Expose(),
    __metadata("design:type", Number)
], ReadUserDto.prototype, "userPermission", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: 'Status do usuário'
    }),
    class_transformer_1.Expose(),
    __metadata("design:type", Number)
], ReadUserDto.prototype, "status", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: 'Data de criação'
    }),
    class_transformer_1.Expose(),
    __metadata("design:type", Date)
], ReadUserDto.prototype, "createdAt", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: 'Data de alteração'
    }),
    class_transformer_1.Expose(),
    __metadata("design:type", Date)
], ReadUserDto.prototype, "updatedAt", void 0);
exports.ReadUserDto = ReadUserDto;
class ResponseReadUserDto extends defaultResponse_dto_1.ResponseSuccess {
}
__decorate([
    swagger_1.ApiProperty({ type: ReadUserDto, isArray: true }),
    class_transformer_1.Expose(),
    class_transformer_1.Type(() => ReadUserDto),
    __metadata("design:type", Array)
], ResponseReadUserDto.prototype, "records", void 0);
exports.ResponseReadUserDto = ResponseReadUserDto;
//# sourceMappingURL=read-user.dto.js.map