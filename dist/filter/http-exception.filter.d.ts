import { ExceptionFilter, ArgumentsHost, HttpException } from '@nestjs/common';
import { LogService } from '../logger/log.service';
export declare class HttpExceptionFilter implements ExceptionFilter {
    private readonly logger;
    constructor(logger: LogService);
    private switchcase;
    private defaultCaseValue;
    private getErrorCode;
    catch(exception: HttpException, host: ArgumentsHost): void;
}
