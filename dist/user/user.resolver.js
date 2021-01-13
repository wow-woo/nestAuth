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
exports.UserResolver = void 0;
const user_entity_1 = require("./entities/user.entity");
const user_dto_1 = require("./dtos/user.dto");
const user_service_1 = require("./user.service");
const graphql_1 = require("@nestjs/graphql");
const common_1 = require("@nestjs/common");
const auth_guard_1 = require("../auth/auth.guard");
const auth_user_decorator_1 = require("../auth/auth-user.decorator");
let UserResolver = class UserResolver {
    constructor(userService) {
        this.userService = userService;
    }
    async me(authUser) {
        return console.log('ddddddddddd', authUser);
    }
    async getAllUsers() {
        return this.userService.allUsers();
    }
    async signup(userInf) {
        return this.userService.signup(userInf);
    }
    async login({ email, password }) {
        return this.userService.login(email, password);
    }
    async updateUser(userInfo) {
        return this.userService.updateUser(userInfo);
    }
    async cancelMembership(userInf) {
        return this.userService.cancelMembership(userInf);
    }
};
__decorate([
    common_1.UseGuards(auth_guard_1.AuthCtx),
    graphql_1.Query(() => user_entity_1.User),
    __param(0, auth_user_decorator_1.AuthUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "me", null);
__decorate([
    common_1.UseGuards(auth_guard_1.AuthCtx),
    graphql_1.Query(() => user_dto_1.userAllOutput),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "getAllUsers", null);
__decorate([
    graphql_1.Mutation(() => user_dto_1.userSignupOutput),
    __param(0, graphql_1.Args('inp')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.userSignupInp]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "signup", null);
__decorate([
    graphql_1.Query(() => user_dto_1.userLoginOutput),
    __param(0, graphql_1.Args('inp')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.userLoginInp]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "login", null);
__decorate([
    common_1.UseGuards(auth_guard_1.AuthCtx),
    graphql_1.Mutation(() => user_dto_1.userUpdateOutput),
    __param(0, graphql_1.Args('inp')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.userUpdateInp]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "updateUser", null);
__decorate([
    common_1.UseGuards(auth_guard_1.AuthCtx),
    graphql_1.Mutation(() => user_dto_1.userCancelOutput),
    __param(0, graphql_1.Args('inp')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.userCancelInp]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "cancelMembership", null);
UserResolver = __decorate([
    graphql_1.Resolver(() => user_entity_1.User),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserResolver);
exports.UserResolver = UserResolver;
//# sourceMappingURL=user.resolver.js.map