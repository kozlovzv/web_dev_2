import { CityService } from './city.service';
import { City } from './city.entity';
export declare class CitiesController {
    private readonly cityService;
    constructor(cityService: CityService);
    create(city: Omit<City, 'id'>): City;
    findAll(): City[];
    findOne(id: string): City;
    update(id: string, city: Omit<City, 'id'>): City;
    remove(id: string): import("@nestjs/common").HttpStatus;
}
