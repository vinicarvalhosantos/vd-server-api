"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const terminus_1 = require("@nestjs/terminus");
let ApiHealthIndicator = class ApiHealthIndicator extends terminus_1.HealthIndicator {
    async isHealthy() {
        const result = this.getStatus('API para busca de usuário ingame', true);
        return result;
    }
};
ApiHealthIndicator = __decorate([
    common_1.Injectable()
], ApiHealthIndicator);
exports.ApiHealthIndicator = ApiHealthIndicator;
//# sourceMappingURL=health.entity.js.map