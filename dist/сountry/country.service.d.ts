import { HttpStatus } from '@nestjs/common';
import { DatasourceService } from 'src/datasource/datasource.service';
import { Country } from './country.entity';
export declare class CountryService {
    private readonly datasourceService;
    constructor(datasourceService: DatasourceService);
    create(country: Omit<Country, 'id'>): Country;
    findOne(id: number): Country;
    findAll(): Country[];
    update(id: number, updatedCountry: Omit<Country, 'id'>): Country;
    remove(id: number): HttpStatus;
}
