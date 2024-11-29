"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryService = void 0;
const common_1 = require("@nestjs/common");
const datasource_service_1 = require("../datasource/datasource.service");
let CategoryService = class CategoryService {
    constructor(datasourceService) {
        this.datasourceService = datasourceService;
    }
    create(category) {
        const newCategory = {
            ...category,
            id: this.datasourceService.getCategories().length + 1,
        };
        this.datasourceService.addCategory(newCategory);
        return newCategory;
    }
    findOne(id) {
        const category = this.datasourceService.findCategoryById(id);
        if (!category) {
            throw new Error(`Category with ID ${id} not found`);
        }
        return category;
    }
    findAll() {
        return this.datasourceService.getCategories();
    }
    update(id, updatedCategory) {
        const index = this.datasourceService
            .getCategories()
            .findIndex((category) => category.id === id);
        if (index !== -1) {
            const category = { ...this.datasourceService.getCategories()[index], ...updatedCategory };
            this.datasourceService.getCategories()[index] = category;
            return category;
        }
        throw new Error(`Category with ID ${id} not found`);
    }
    remove(id) {
        const index = this.datasourceService
            .getCategories()
            .findIndex((category) => category.id === id);
        if (index !== -1) {
            this.datasourceService.getCategories().splice(index, 1);
            return common_1.HttpStatus.OK;
        }
        throw new Error(`Category with ID ${id} not found`);
    }
};
exports.CategoryService = CategoryService;
exports.CategoryService = CategoryService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [datasource_service_1.DatasourceService])
], CategoryService);
//# sourceMappingURL=category.service.js.map