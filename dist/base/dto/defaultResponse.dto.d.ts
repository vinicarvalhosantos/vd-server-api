export declare class Meta {
    server: string;
    limit: number;
    offset: number;
    recordCount: number;
}
export declare abstract class ResponseSuccess<TypeData> {
    abstract get records(): TypeData;
    meta: Meta;
    success: boolean;
}
