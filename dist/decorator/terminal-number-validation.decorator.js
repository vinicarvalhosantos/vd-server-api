"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const class_validator_1 = require("class-validator");
function IsTerminalNumber(validationOptions) {
    return function (object, propertyName) {
        class_validator_1.registerDecorator({
            name: "isTerminalNumber",
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [],
            validator: {
                validate(value, args) {
                    const result = new RegExp(/^([A-Z])\d{1,2}/).test(value);
                    return result;
                },
                defaultMessage(args) {
                    return `$property must be a terminal number conforming to the specified constraints`;
                }
            }
        });
    };
}
exports.IsTerminalNumber = IsTerminalNumber;
//# sourceMappingURL=terminal-number-validation.decorator.js.map