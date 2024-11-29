"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatasourceService = void 0;
const common_1 = require("@nestjs/common");
let DatasourceService = class DatasourceService {
    constructor() {
        this.cities = [];
        this.countries = [];
        this.categories = [];
    }
    getCities() {
        return this.cities;
    }
    addCity(city) {
        this.cities.push(city);
    }
    findCityById(id) {
        return this.cities.find((city) => city.id === id);
    }
    getCountries() {
        return this.countries;
    }
    addCountry(country) {
        this.countries.push(country);
    }
    findCountryById(id) {
        return this.countries.find((country) => country.id === id);
    }
    getCategories() {
        return this.categories;
    }
    addCategory(category) {
        this.categories.push(category);
    }
    findCategoryById(id) {
        return this.categories.find((category) => category.id === id);
    }
};
exports.DatasourceService = DatasourceService;
exports.DatasourceService = DatasourceService = __decorate([
    (0, common_1.Injectable)()
], DatasourceService);
//# sourceMappingURL=datasource.service.js.map