import { HttpStatus } from '@nestjs/common';
import { DatasourceService } from 'src/datasource/datasource.service';
import { Category } from './category.entity';
export declare class CategoryService {
    private readonly datasourceService;
    constructor(datasourceService: DatasourceService);
    create(category: Omit<Category, 'id'>): Category;
    findOne(id: number): Category;
    findAll(): Category[];
    update(id: number, updatedCategory: Omit<Category, 'id'>): Category;
    remove(id: number): HttpStatus;
}
