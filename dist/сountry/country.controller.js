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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountryController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const country_service_1 = require("./country.service");
let CountryController = class CountryController {
    constructor(countryService) {
        this.countryService = countryService;
    }
    create(country) {
        return this.countryService.create(country);
    }
    findAll() {
        return this.countryService.findAll();
    }
    findOne(id) {
        const numericId = Number(id);
        return this.countryService.findOne(numericId);
    }
    update(id, country) {
        const numericId = Number(id);
        return this.countryService.update(numericId, country);
    }
    remove(id) {
        const numericId = Number(id);
        return this.countryService.remove(numericId);
    }
};
exports.CountryController = CountryController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiBody)({
        description: 'Данные для создания новой страны',
        schema: {
            type: 'object',
            properties: {
                name: { type: 'string', description: 'Название страны' },
                capital: { type: 'string', description: 'Столица страны' },
                population: { type: 'number', description: 'Население страны' },
                description: { type: 'string', description: 'Описание страны' },
                imageUrl: { type: 'string', description: 'Ссылка на изображение страны' },
            },
            required: ['name', 'capital', 'population', 'description', 'imageUrl'],
        },
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CountryController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CountryController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiParam)({ name: 'id', type: Number, description: 'Идентификатор страны' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CountryController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiParam)({ name: 'id', type: Number, description: 'Идентификатор страны' }),
    (0, swagger_1.ApiBody)({
        description: 'Данные для обновления страны',
        schema: {
            type: 'object',
            properties: {
                name: { type: 'string', description: 'Название страны' },
                capital: { type: 'string', description: 'Столица страны' },
                population: { type: 'number', description: 'Население страны' },
                description: { type: 'string', description: 'Описание страны' },
                imageUrl: { type: 'string', description: 'Ссылка на изображение страны' },
            },
            required: ['name', 'capital', 'population', 'description', 'imageUrl'],
        },
    }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], CountryController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiParam)({ name: 'id', type: Number, description: 'Идентификатор страны' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CountryController.prototype, "remove", null);
exports.CountryController = CountryController = __decorate([
    (0, swagger_1.ApiTags)('Countries'),
    (0, common_1.Controller)('countries'),
    __metadata("design:paramtypes", [country_service_1.CountryService])
], CountryController);
//# sourceMappingURL=country.controller.js.map