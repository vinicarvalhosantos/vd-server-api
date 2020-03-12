"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const configuration_1 = require("./config/configuration");
const log_module_1 = require("./logger/log.module");
const configuration_service_1 = require("./config/configuration.service");
const configuration_module_1 = require("./config/configuration.module");
const terminus_options_service_1 = require("./health/terminus-options.service");
const terminus_1 = require("@nestjs/terminus");
const health_module_1 = require("./health/health.module");
const user_module_1 = require("./user/user.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            config_1.ConfigModule.forRoot({ isGlobal: true, load: [configuration_1.default] }),
            configuration_module_1.ConfigurationModule,
            log_module_1.LogModule,
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [configuration_module_1.ConfigurationModule],
                useFactory: async (configurationService) => ({
                    type: 'mysql',
                    host: configurationService.databaseHost,
                    port: configurationService.databasePort,
                    username: configurationService.databaseUsername,
                    password: configurationService.databasePassword,
                    database: configurationService.databaseName,
                    entities: [__dirname + '/**/*.entity.js'],
                    synchronize: configurationService.databaseSynchronize,
                    logging: configurationService.databaseLogging,
                }),
                inject: [configuration_service_1.ConfigurationService],
            }),
            terminus_1.TerminusModule.forRootAsync({
                imports: [health_module_1.HealthModule],
                useClass: terminus_options_service_1.TerminusOptionsService,
            }),
            user_module_1.UserModule
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map