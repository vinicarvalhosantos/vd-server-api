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
const typeorm_1 = require("typeorm");
const user_enum_1 = require("./user.enum");
let User = class User {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn("increment", { name: "userId" }),
    __metadata("design:type", Number)
], User.prototype, "userId", void 0);
__decorate([
    typeorm_1.Column("uuid", { name: "userUniqueId", unique: true }),
    __metadata("design:type", String)
], User.prototype, "userUniqueId", void 0);
__decorate([
    typeorm_1.Column({ name: "username" }),
    __metadata("design:type", String)
], User.prototype, "username", void 0);
__decorate([
    typeorm_1.Column({ name: "password" }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    typeorm_1.Column({ name: "userEmail", unique: true }),
    __metadata("design:type", String)
], User.prototype, "userEmail", void 0);
__decorate([
    typeorm_1.Column({ name: "userPermission", type: "enum", enum: user_enum_1.UserPermissionEnum }),
    __metadata("design:type", Number)
], User.prototype, "userPermission", void 0);
__decorate([
    typeorm_1.Column({ name: "status", type: "enum", enum: user_enum_1.UserStatusEnum }),
    __metadata("design:type", Number)
], User.prototype, "status", void 0);
__decorate([
    typeorm_1.CreateDateColumn({ name: "created_at", type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" }),
    __metadata("design:type", Date)
], User.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.UpdateDateColumn({ name: "updated_at", type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" }),
    __metadata("design:type", Date)
], User.prototype, "updatedAt", void 0);
User = __decorate([
    typeorm_1.Entity()
], User);
exports.User = User;
//# sourceMappingURL=user.entity.js.map