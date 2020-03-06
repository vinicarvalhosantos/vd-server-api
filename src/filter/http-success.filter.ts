import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class HttpSuccessFilter<T> implements NestInterceptor<T, any>{
    getResponse(data: any) {
        const hostname = require("os").hostname();
        const records = [
            data
        ]
        const recordCount = data.length != undefined ? data.length : records.length;
        const meta = {
            meta: {
                server: hostname,
                recordCount: recordCount
            },
            records: records,
            success: true
        }
        return meta;
    }

    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        return next.handle().pipe(map(data => {
            return this.getResponse(data);
        }));
    }
}