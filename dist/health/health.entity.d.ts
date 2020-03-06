import { HealthIndicator, HealthIndicatorResult } from '@nestjs/terminus';
export declare class ApiHealthIndicator extends HealthIndicator {
    isHealthy(): Promise<HealthIndicatorResult>;
}
