"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const operators_1 = require("rxjs/operators");
exports.GetHttp = (url = "") => {
    return (target, propertyKey, descriptor) => {
        descriptor.value = function (...args) {
            let instance = null;
            for (const property in this) {
                if (this[property] instanceof common_1.HttpService) {
                    instance = this[property];
                    break;
                }
            }
            var returnType = Reflect.getMetadata("design:returntype", target, propertyKey);
            if (!instance)
                return;
            return instance.get(url, { responseType: 'json' }).pipe(operators_1.map(response => {
                if (Array.isArray(response.data)) {
                    return new returnType(...response.data);
                }
                return new returnType(response.data);
            }));
        };
        return descriptor;
    };
};
//# sourceMappingURL=http.decorator.js.map