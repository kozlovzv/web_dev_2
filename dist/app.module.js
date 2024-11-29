"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const city_module_1 = require("./citiy/city.module");
const country_module_1 = require("./\u0441ountry/country.module");
const category_module_1 = require("./category/category.module");
const datasource_module_1 = require("./datasource/datasource.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            city_module_1.CityModule,
            country_module_1.CountryModule,
            category_module_1.CategoryModule,
            datasource_module_1.DatasourceModule,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map