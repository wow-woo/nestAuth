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
exports.User = void 0;
const graphql_1 = require("@nestjs/graphql");
const core_entity_1 = require("../../common/entities/core.entity");
const typeorm_1 = require("typeorm");
const bcrypt = require("bcrypt");
var Role;
(function (Role) {
    Role["Host"] = "Host";
    Role["Listener"] = "Listener";
})(Role || (Role = {}));
graphql_1.registerEnumType(Role, { name: 'userRole', description: "User's roles" });
let User = class User extends core_entity_1.CoreEntity {
    async hashPassword() {
        this.password = bcrypt.hashSync(this.password, 10);
    }
    static hashPasswordOnUpdate(password) {
        return bcrypt.hashSync(password, 10);
    }
};
__decorate([
    graphql_1.Field(() => String),
    typeorm_1.Column(),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    graphql_1.Field(() => String),
    typeorm_1.Column(),
    __metadata("design:type", String)
], User.prototype, "role", void 0);
__decorate([
    typeorm_1.BeforeInsert(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], User.prototype, "hashPassword", null);
User = __decorate([
    graphql_1.ObjectType(),
    typeorm_1.Entity()
], User);
exports.User = User;
//# sourceMappingURL=user.entity.js.map