import { ConfigService } from "@nestjs/config";
export declare class ConfigurationService {
    private configService;
    constructor(configService: ConfigService);
    get port(): number;
    get databaseHost(): string;
    get databasePort(): number;
    get databaseUsername(): string;
    get databasePassword(): string;
    get databaseName(): string;
    get databaseSynchronize(): boolean;
    get databaseLogging(): boolean;
    get stackdriveActive(): boolean;
    get stackdriveProjectId(): string;
    get stackdrivePath(): string;
    get loggerLevel(): string;
    get loggerLabel(): string;
}
