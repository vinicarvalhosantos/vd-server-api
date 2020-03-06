import { ConfigurationService } from '../config/configuration.service';
export declare class LogService {
    private logger;
    constructor(configurationService: ConfigurationService);
    log(message: string, metadata?: any): void;
    error(message: string, metadata?: any): void;
    warn(message: string, metadata?: any): void;
    debug(message: string, metadata?: any): void;
    verbose(message: string, metadata?: any): void;
}
