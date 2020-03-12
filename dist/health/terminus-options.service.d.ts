import { TerminusOptionsFactory, TerminusModuleOptions } from '@nestjs/terminus';
import { ApiHealthIndicator } from './health.entity';
export declare class TerminusOptionsService implements TerminusOptionsFactory {
    private readonly apiHealthIndicator;
    constructor(apiHealthIndicator: ApiHealthIndicator);
    createTerminusOptions(): TerminusModuleOptions;
}
