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
exports.CityService = void 0;
const common_1 = require("@nestjs/common");
const datasource_service_1 = require("../datasource/datasource.service");
let CityService = class CityService {
    constructor(datasourceService) {
        this.datasourceService = datasourceService;
    }
    create(city) {
        const newCity = {
            ...city,
            id: this.datasourceService.getCities().length + 1,
        };
        this.datasourceService.addCity(newCity);
        return newCity;
    }
    findOne(id) {
        const city = this.datasourceService.findCityById(id);
        if (!city) {
            throw new Error(`City with ID ${id} not found`);
        }
        return city;
    }
    findAll() {
        return this.datasourceService.getCities();
    }
    update(id, updatedCity) {
        const index = this.datasourceService
            .getCities()
            .findIndex((city) => city.id === id);
        if (index !== -1) {
            const city = { ...this.datasourceService.getCities()[index], ...updatedCity };
            this.datasourceService.getCities()[index] = city;
            return city;
        }
        throw new Error(`City with ID ${id} not found`);
    }
    remove(id) {
        const index = this.datasourceService
            .getCities()
            .findIndex((city) => city.id === id);
        if (index !== -1) {
            this.datasourceService.getCities().splice(index, 1);
            return common_1.HttpStatus.OK;
        }
        throw new Error(`City with ID ${id} not found`);
    }
};
exports.CityService = CityService;
exports.CityService = CityService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [datasource_service_1.DatasourceService])
], CityService);
//# sourceMappingURL=city.service.js.map