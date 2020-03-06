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
const log_service_1 = require("../logger/log.service");
let HttpExceptionFilter = class HttpExceptionFilter {
    constructor(logger) {
        this.logger = logger;
        this.switchcase = cases => defaultCase => key => cases.hasOwnProperty(key) ? cases[key] : defaultCase;
        this.defaultCaseValue = 20019;
        this.getErrorCode = (statusCode) => this.switchcase({
            400: 20019,
            401: 30001,
            403: 20160,
            404: 20022,
            405: 20021,
            409: 20078,
            429: 20077,
            500: 10000,
            501: 10002,
            503: 10001,
            504: 10005
        })(this.defaultCaseValue)(statusCode);
    }
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();
        const status = exception.getStatus() || 500;
        const hostname = require("os").hostname();
        const errorCode = this.getErrorCode(status);
        const errors = [];
        if (!exception.message) {
            errors.push({
                errorCode: errorCode,
                developerMessage: "Unexpected error while attempting the process",
                userMessage: "Unexpected error while attempting the process",
                moreInfo: "Was encountered an error when processing your request. We apologize for the inconvenience."
            });
        }
        else {
            if (typeof (exception.message) === "string") {
                errors.push({
                    errorCode: errorCode,
                    developerMessage: exception.message,
                    userMessage: exception.message,
                    moreInfo: exception.stack
                });
            }
            if (exception.message.message) {
                if (typeof (exception.message.message) === 'string') {
                    errors.push({
                        errorCode: errorCode,
                        developerMessage: exception.message.message,
                        userMessage: exception.message.message,
                        moreInfo: exception.stack
                    });
                }
                else {
                    exception.message.message.map(err => {
                        const erro = err.constraints;
                        if (erro) {
                            const keys = Object.getOwnPropertyNames(erro);
                            for (let keyNumber in keys) {
                                let keyName = keys[keyNumber];
                                if (keyName) {
                                    errors.push({
                                        errorCode: errorCode,
                                        developerMessage: err.constraints[keyName],
                                        userMessage: err.constraints[keyName],
                                        moreInfo: `Property ${err['property']}`
                                    });
                                }
                            }
                        }
                    });
                }
            }
        }
        var jsonObject = {
            meta: {
                server: hostname
            },
            errors: errors,
            statusCode: status,
            success: false
        };
        response
            .status(status)
            .json(jsonObject);
        this.logger.error(`${request.method} ${status} ${request.url}`, {
            headers: request.headers,
            body: request.body,
            stack: exception.stack,
            path: request.url,
        });
    }
};
HttpExceptionFilter = __decorate([
    common_1.Catch(common_1.HttpException),
    __metadata("design:paramtypes", [log_service_1.LogService])
], HttpExceptionFilter);
exports.HttpExceptionFilter = HttpExceptionFilter;
//# sourceMappingURL=http-exception.filter.js.map