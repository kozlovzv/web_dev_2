import { City } from 'src/citiy/city.entity';
import { Country } from 'src/сountry/country.entity';
import { Category } from 'src/category/category.entity';
export declare class DatasourceService {
    private cities;
    private countries;
    private categories;
    getCities(): City[];
    addCity(city: City): void;
    findCityById(id: number): City | undefined;
    getCountries(): Country[];
    addCountry(country: Country): void;
    findCountryById(id: number): Country | undefined;
    getCategories(): Category[];
    addCategory(category: Category): void;
    findCategoryById(id: number): Category | undefined;
}
