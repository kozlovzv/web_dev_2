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
exports.CitiesController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const city_service_1 = require("./city.service");
let CitiesController = class CitiesController {
    constructor(cityService) {
        this.cityService = cityService;
    }
    create(city) {
        return this.cityService.create(city);
    }
    findAll() {
        return this.cityService.findAll();
    }
    findOne(id) {
        const numericId = Number(id);
        return this.cityService.findOne(numericId);
    }
    update(id, city) {
        const numericId = Number(id);
        return this.cityService.update(numericId, city);
    }
    remove(id) {
        const numericId = Number(id);
        return this.cityService.remove(numericId);
    }
};
exports.CitiesController = CitiesController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiBody)({
        description: 'Данные для создания нового города',
        schema: {
            type: 'object',
            properties: {
                name: { type: 'string', description: 'Название города' },
                description: { type: 'string', description: 'Описание города' },
                country: { type: 'string', description: 'Страна города' },
                imageUrl: { type: 'string', description: 'Ссылка на изображение города' },
            },
            required: ['name', 'description', 'country', 'imageUrl'],
        },
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CitiesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CitiesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiParam)({ name: 'id', type: Number, description: 'Идентификатор города' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CitiesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiParam)({ name: 'id', type: Number, description: 'Идентификатор города' }),
    (0, swagger_1.ApiBody)({
        description: 'Данные для обновления города',
        schema: {
            type: 'object',
            properties: {
                name: { type: 'string', description: 'Название города' },
                description: { type: 'string', description: 'Описание города' },
                country: { type: 'string', description: 'Страна города' },
                imageUrl: { type: 'string', description: 'Ссылка на изображение города' },
            },
            required: ['name', 'description', 'country', 'imageUrl'],
        },
    }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], CitiesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiParam)({ name: 'id', type: Number, description: 'Идентификатор города' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CitiesController.prototype, "remove", null);
exports.CitiesController = CitiesController = __decorate([
    (0, swagger_1.ApiTags)('Cities'),
    (0, common_1.Controller)('cities'),
    __metadata("design:paramtypes", [city_service_1.CityService])
], CitiesController);
//# sourceMappingURL=city.controller.js.map