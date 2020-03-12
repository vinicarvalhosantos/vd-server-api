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
const common_1 = require("@nestjs/common");
const health_entity_1 = require("./health.entity");
let TerminusOptionsService = class TerminusOptionsService {
    constructor(apiHealthIndicator) {
        this.apiHealthIndicator = apiHealthIndicator;
    }
    createTerminusOptions() {
        const healthEndpoint = {
            url: 'api/health',
            healthIndicators: [
                async () => this.apiHealthIndicator.isHealthy()
            ],
        };
        const healthTeresaEndpoint = {
            url: '/',
            healthIndicators: [
                async () => this.apiHealthIndicator.isHealthy()
            ],
        };
        return {
            endpoints: [healthEndpoint, healthTeresaEndpoint],
        };
    }
};
TerminusOptionsService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [health_entity_1.ApiHealthIndicator])
], TerminusOptionsService);
exports.TerminusOptionsService = TerminusOptionsService;
//# sourceMappingURL=terminus-options.service.js.map