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
exports.CountryService = void 0;
const common_1 = require("@nestjs/common");
const datasource_service_1 = require("../datasource/datasource.service");
let CountryService = class CountryService {
    constructor(datasourceService) {
        this.datasourceService = datasourceService;
    }
    create(country) {
        const newCountry = {
            ...country,
            id: this.datasourceService.getCountries().length + 1,
        };
        this.datasourceService.addCountry(newCountry);
        return newCountry;
    }
    findOne(id) {
        const country = this.datasourceService.findCountryById(id);
        if (!country) {
            throw new Error(`Country with ID ${id} not found`);
        }
        return country;
    }
    findAll() {
        return this.datasourceService.getCountries();
    }
    update(id, updatedCountry) {
        const index = this.datasourceService
            .getCountries()
            .findIndex((country) => country.id === id);
        if (index !== -1) {
            const country = { ...this.datasourceService.getCountries()[index], ...updatedCountry };
            this.datasourceService.getCountries()[index] = country;
            return country;
        }
        throw new Error(`Country with ID ${id} not found`);
    }
    remove(id) {
        const index = this.datasourceService
            .getCountries()
            .findIndex((country) => country.id === id);
        if (index !== -1) {
            this.datasourceService.getCountries().splice(index, 1);
            return common_1.HttpStatus.OK;
        }
        throw new Error(`Country with ID ${id} not found`);
    }
};
exports.CountryService = CountryService;
exports.CountryService = CountryService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [datasource_service_1.DatasourceService])
], CountryService);
//# sourceMappingURL=country.service.js.map