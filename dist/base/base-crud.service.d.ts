import { Repository, DeleteResult, FindOneOptions } from 'typeorm';
import { IPaginationOptions } from 'nestjs-typeorm-paginate';
export declare class BaseCrudService<TEntity> {
    private readonly baseRepository;
    constructor(baseRepository: Repository<TEntity>);
    create(model: TEntity): Promise<TEntity>;
    find(options?: FindOneOptions<TEntity>): Promise<TEntity[]>;
    findOne(idOrOptions: number | FindOneOptions<TEntity> | string): Promise<TEntity>;
    findPaginated(idOptions: FindOneOptions<TEntity>, paginationOptions: IPaginationOptions): Promise<import("nestjs-typeorm-paginate").Pagination<TEntity>>;
    update(id: number | string, model: TEntity): Promise<TEntity>;
    delete(id: number | string): Promise<DeleteResult>;
    queryBuilder(): import("typeorm").SelectQueryBuilder<TEntity>;
}
