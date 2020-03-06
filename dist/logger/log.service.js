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
const winston = require("winston");
const logging_winston_1 = require("@google-cloud/logging-winston");
const configuration_service_1 = require("../config/configuration.service");
const common_1 = require("@nestjs/common");
let LogService = class LogService {
    constructor(configurationService) {
        this.logger = winston.createLogger({
            level: configurationService.loggerLevel,
            format: winston.format.combine(winston.format.label({ label: configurationService.loggerLabel }), winston.format.colorize(), winston.format.timestamp(), winston.format.printf((info) => {
                return `${info.timestamp} [${info.label}] ${info.level}: ${info.message}`;
            })),
            transports: [
                new winston.transports.Console(),
            ],
        });
        if (configurationService.stackdriveActive) {
            const loggingWinston = new logging_winston_1.LoggingWinston({
                projectId: configurationService.stackdriveProjectId,
                keyFilename: configurationService.stackdrivePath,
            });
            this.logger.add(loggingWinston);
        }
    }
    log(message, metadata = {}) {
        this.logger.info(message, metadata);
    }
    error(message, metadata = {}) {
        this.logger.error(message, metadata);
    }
    warn(message, metadata = {}) {
        this.logger.warn(message, metadata);
    }
    debug(message, metadata = {}) {
        this.logger.debug(message, metadata);
    }
    verbose(message, metadata = {}) {
        this.logger.verbose(message, metadata);
    }
};
LogService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [configuration_service_1.ConfigurationService])
], LogService);
exports.LogService = LogService;
//# sourceMappingURL=log.service.js.map