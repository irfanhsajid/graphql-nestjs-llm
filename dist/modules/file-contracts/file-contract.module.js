"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileContractModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const file_contract_resolver_1 = require("./file-contract.resolver");
const file_contract_service_1 = require("./file-contract.service");
const event_type_scalar_1 = require("./scalars/event-type.scalar");
const category_scalar_1 = require("./scalars/category.scalar");
const file_contract_schema_1 = require("./file-contract.schema");
const product_type_scalar_1 = require("./scalars/product-type.scalar");
let FileContractModule = class FileContractModule {
};
exports.FileContractModule = FileContractModule;
exports.FileContractModule = FileContractModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: file_contract_schema_1.FileContract.name, schema: file_contract_schema_1.FileContractSchema },
                { name: file_contract_schema_1.ExtractionResult.name, schema: file_contract_schema_1.ExtractionResultSchema },
            ]),
        ],
        providers: [
            event_type_scalar_1.EventTypeScalar,
            category_scalar_1.CategoryScalar,
            product_type_scalar_1.ProductTypeScalar,
            file_contract_resolver_1.FileContractResolver,
            file_contract_service_1.FileContractService,
        ],
    })
], FileContractModule);
//# sourceMappingURL=file-contract.module.js.map