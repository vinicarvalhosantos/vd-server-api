import { NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
export declare class HttpSuccessFilter<T> implements NestInterceptor<T, any> {
    getResponse(data: any): {
        meta: {
            server: any;
            recordCount: any;
        };
        records: any[];
        success: boolean;
    };
    intercept(context: ExecutionContext, next: CallHandler): Observable<any>;
}
