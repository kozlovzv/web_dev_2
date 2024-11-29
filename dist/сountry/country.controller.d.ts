import { CountryService } from './country.service';
import { Country } from './country.entity';
export declare class CountryController {
    private readonly countryService;
    constructor(countryService: CountryService);
    create(country: Omit<Country, 'id'>): Country;
    findAll(): Country[];
    findOne(id: string): Country;
    update(id: string, country: Omit<Country, 'id'>): Country;
    remove(id: string): import("@nestjs/common").HttpStatus;
}
