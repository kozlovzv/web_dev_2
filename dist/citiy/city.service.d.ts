import { HttpStatus } from '@nestjs/common';
import { DatasourceService } from 'src/datasource/datasource.service';
import { City } from './city.entity';
export declare class CityService {
    private readonly datasourceService;
    constructor(datasourceService: DatasourceService);
    create(city: Omit<City, 'id'>): City;
    findOne(id: number): City;
    findAll(): City[];
    update(id: number, updatedCity: Omit<City, 'id'>): City;
    remove(id: number): HttpStatus;
}
