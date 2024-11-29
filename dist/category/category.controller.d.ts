import { CategoryService } from './category.service';
import { Category } from './category.entity';
export declare class CategoryController {
    private readonly categoryService;
    constructor(categoryService: CategoryService);
    create(category: Omit<Category, 'id'>): Category;
    findAll(): Category[];
    findOne(id: string): Category;
    update(id: string, category: Omit<Category, 'id'>): Category;
    remove(id: string): import("@nestjs/common").HttpStatus;
}
