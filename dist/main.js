"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const helmet = require("helmet");
const compression = require("compression");
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const app_module_1 = require("./app.module");
const http_exception_filter_1 = require("./filter/http-exception.filter");
const log_service_1 = require("./logger/log.service");
const configuration_service_1 = require("./config/configuration.service");
const pckg = require('../package.json');
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        logger: false,
    });
    const configuration = app.get(configuration_service_1.ConfigurationService);
    app.use(helmet());
    app.use(compression());
    app.useGlobalFilters(new http_exception_filter_1.HttpExceptionFilter(app.get(log_service_1.LogService)));
    app.useLogger(app.get(log_service_1.LogService));
    app.useGlobalPipes(new common_1.ValidationPipe());
    const options = new swagger_1.DocumentBuilder()
        .setTitle(pckg.name)
        .setDescription(pckg.description)
        .setVersion(pckg.version)
        .addTag('users', 'Configuração dos clientes')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup('api/docs', app, document);
    await app.listen(configuration.port);
}
bootstrap();
//# sourceMappingURL=main.js.map