"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const paginate_1 = require("nestjs-typeorm-paginate/dist/paginate");
class BaseCrudService {
    constructor(baseRepository) {
        this.baseRepository = baseRepository;
    }
    create(model) {
        return this.baseRepository.save(model);
    }
    find(options) {
        return this.baseRepository.find(options);
    }
    findOne(idOrOptions) {
        return this.baseRepository.findOne(idOrOptions).then(entity => {
            if (!entity)
                throw new common_1.NotFoundException();
            return entity;
        });
    }
    findPaginated(idOptions, paginationOptions) {
        return paginate_1.paginate(this.baseRepository, paginationOptions, idOptions).then(entity => {
            if (!entity || entity.itemCount === 0)
                throw new common_1.NotFoundException();
            return entity;
        });
    }
    update(id, model) {
        return this.baseRepository
            .findOne(id)
            .then(entity => {
            if (!entity)
                throw new common_1.NotFoundException();
            return this.baseRepository.update(id, model);
        })
            .then(() => this.baseRepository.findOne(id));
    }
    delete(id) {
        return this.baseRepository.findOne(id).then(entity => {
            if (!entity)
                throw new common_1.NotFoundException();
            return this.baseRepository.delete(id);
        });
    }
    queryBuilder() {
        return this.baseRepository.createQueryBuilder();
    }
}
exports.BaseCrudService = BaseCrudService;
//# sourceMappingURL=base-crud.service.js.map