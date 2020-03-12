"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const class_transformer_1 = require("class-transformer");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
exports.ResponseMapper = (TReturn) => {
    return (target, propertyKey, descriptor) => {
        const method = descriptor.value;
        descriptor.value = function (...args) {
            const returnType = Reflect.getMetadata("design:returntype", target, propertyKey);
            if (returnType === Promise)
                return method.apply(this, args).then(data => class_transformer_1.plainToClass(TReturn, data, { excludeExtraneousValues: true }));
            if (returnType === rxjs_1.Observable)
                return method.apply(this, args).pipe(operators_1.map(data => class_transformer_1.plainToClass(TReturn, data, { excludeExtraneousValues: true })));
            return class_transformer_1.plainToClass(TReturn, method.apply(this, args), { excludeExtraneousValues: true });
        };
        return descriptor;
    };
};
//# sourceMappingURL=response-mapper.decorator.js.map