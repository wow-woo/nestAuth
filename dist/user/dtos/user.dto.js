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
exports.userCancelOutput = exports.userUpdateOutput = exports.userLoginOutput = exports.userSignupOutput = exports.userAllOutput = exports.userCancelInp = exports.userUpdateInp = exports.userUpdateData = exports.userLoginInp = exports.userSignupInp = void 0;
const typeorm_1 = require("typeorm");
const output_dto_1 = require("./../../podcast/dtos/output.dto");
const user_entity_1 = require("./../entities/user.entity");
const graphql_1 = require("@nestjs/graphql");
let userSignupInp = class userSignupInp extends graphql_1.PickType(user_entity_1.User, ['email', 'role'], graphql_1.InputType) {
};
__decorate([
    graphql_1.Field(() => String),
    __metadata("design:type", String)
], userSignupInp.prototype, "password", void 0);
userSignupInp = __decorate([
    graphql_1.InputType()
], userSignupInp);
exports.userSignupInp = userSignupInp;
let userLoginInp = class userLoginInp extends graphql_1.PickType(user_entity_1.User, ['email'], graphql_1.InputType) {
};
__decorate([
    graphql_1.Field(() => String),
    __metadata("design:type", String)
], userLoginInp.prototype, "password", void 0);
userLoginInp = __decorate([
    graphql_1.InputType()
], userLoginInp);
exports.userLoginInp = userLoginInp;
let userUpdateData = class userUpdateData extends graphql_1.PickType(graphql_1.PartialType(user_entity_1.User, graphql_1.InputType), ['role']) {
};
__decorate([
    graphql_1.Field(() => String, { nullable: true }),
    __metadata("design:type", String)
], userUpdateData.prototype, "newPassword", void 0);
userUpdateData = __decorate([
    graphql_1.InputType()
], userUpdateData);
exports.userUpdateData = userUpdateData;
let userUpdateInp = class userUpdateInp extends userLoginInp {
};
__decorate([
    graphql_1.Field(() => userUpdateData),
    __metadata("design:type", userUpdateData)
], userUpdateInp.prototype, "data", void 0);
userUpdateInp = __decorate([
    graphql_1.InputType()
], userUpdateInp);
exports.userUpdateInp = userUpdateInp;
let userCancelInp = class userCancelInp extends userLoginInp {
};
__decorate([
    graphql_1.Field(() => String),
    __metadata("design:type", String)
], userCancelInp.prototype, "password", void 0);
userCancelInp = __decorate([
    graphql_1.InputType()
], userCancelInp);
exports.userCancelInp = userCancelInp;
let userAllOutput = class userAllOutput extends output_dto_1.CoreOutput {
};
__decorate([
    graphql_1.Field(() => [user_entity_1.User], { nullable: 'items' }),
    __metadata("design:type", Array)
], userAllOutput.prototype, "users", void 0);
userAllOutput = __decorate([
    graphql_1.ObjectType()
], userAllOutput);
exports.userAllOutput = userAllOutput;
let userSignupOutput = class userSignupOutput extends output_dto_1.CoreOutput {
};
__decorate([
    graphql_1.Field(() => String, { nullable: true }),
    typeorm_1.Column(),
    __metadata("design:type", Number)
], userSignupOutput.prototype, "id", void 0);
userSignupOutput = __decorate([
    graphql_1.ObjectType()
], userSignupOutput);
exports.userSignupOutput = userSignupOutput;
let userLoginOutput = class userLoginOutput extends output_dto_1.CoreOutput {
};
__decorate([
    graphql_1.Field(() => String, { nullable: true }),
    typeorm_1.Column(),
    __metadata("design:type", String)
], userLoginOutput.prototype, "token", void 0);
userLoginOutput = __decorate([
    graphql_1.ObjectType()
], userLoginOutput);
exports.userLoginOutput = userLoginOutput;
let userUpdateOutput = class userUpdateOutput extends output_dto_1.CoreOutput {
};
__decorate([
    graphql_1.Field(() => String, { nullable: true }),
    typeorm_1.Column(),
    __metadata("design:type", Number)
], userUpdateOutput.prototype, "id", void 0);
userUpdateOutput = __decorate([
    graphql_1.ObjectType()
], userUpdateOutput);
exports.userUpdateOutput = userUpdateOutput;
let userCancelOutput = class userCancelOutput extends output_dto_1.CoreOutput {
};
userCancelOutput = __decorate([
    graphql_1.ObjectType()
], userCancelOutput);
exports.userCancelOutput = userCancelOutput;
//# sourceMappingURL=user.dto.js.map