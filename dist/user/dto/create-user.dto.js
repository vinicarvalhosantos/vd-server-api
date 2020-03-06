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
const class_validator_1 = require("class-validator");
const user_enum_1 = require("../user.enum");
class CreateUserDto {
}
__decorate([
    swagger_1.ApiProperty({
        description: 'Unique Id do usuário'
    }),
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "userUniqueId", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: 'Nome de usuário'
    }),
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "username", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: 'Senha do usuário'
    }),
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "password", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: 'Email do usuário'
    }),
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "userEmail", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: 'Nivel de permissão(Cargo) do usuário'
    }),
    __metadata("design:type", Number)
], CreateUserDto.prototype, "userPermission", void 0);
exports.CreateUserDto = CreateUserDto;
//# sourceMappingURL=create-user.dto.js.map