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
exports.UserService = void 0;
const user_entity_1 = require("./entities/user.entity");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
let UserService = class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async findById(id) {
        return await this.userRepository.findOne(id);
    }
    async allUsers() {
        try {
            const users = await this.userRepository.find();
            if (!users) {
                return {
                    ok: true,
                    users: []
                };
            }
            return {
                ok: true, users
            };
        }
        catch (error) {
            return {
                ok: false, error, users: []
            };
        }
    }
    async signup({ email, password, role }) {
        try {
            const isPresent = await this.userRepository.findOne({ email });
            if (!isPresent) {
                const user = await this.userRepository.create({
                    email, password, role
                });
                if (!user) {
                    return {
                        ok: false, error: "Failed to create account"
                    };
                }
                await this.userRepository.save(user);
                return {
                    ok: true,
                    id: user.id
                };
            }
            {
                return {
                    ok: false, error: "account exists"
                };
            }
        }
        catch (error) {
            return {
                ok: false,
                error: 'errrrr'
            };
        }
    }
    async login(email, password) {
        try {
            const user = await this.userRepository.findOne({ email });
            if (!user) {
                return {
                    ok: false, error: "there is no user"
                };
            }
            const isMatched = await bcrypt.compare(password, user.password);
            if (isMatched) {
                const token = jwt.sign({ id: user.id }, "tekitouna sercretto");
                return {
                    ok: true, token
                };
            }
            {
                return {
                    ok: false, error: "password is wrong"
                };
            }
        }
        catch (error) {
            return {
                ok: false, error: 'errrorrr'
            };
        }
    }
    async updateUser({ email, password, data }) {
        try {
            console.log('oldpassword', password);
            const user = await this.userRepository.findOne({ email });
            console.log(user);
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return {
                    ok: false, error: "No Permission"
                };
            }
            if (data.newPassword) {
                password = data.newPassword;
            }
            password = user_entity_1.User.hashPasswordOnUpdate(password);
            await this.userRepository.save(Object.assign(Object.assign(Object.assign({}, user), { password: password }), data));
            return {
                ok: true, id: user.id
            };
        }
        catch (error) {
            return {
                ok: false, error
            };
        }
    }
    async cancelMembership(userInf) {
        try {
            const user = await this.userRepository.findOne(userInf);
            if (!user) {
                return {
                    ok: false,
                    error: "No account found"
                };
            }
            await this.userRepository.remove(user);
            return {
                ok: true,
            };
        }
        catch (error) {
            return {
                ok: false, error
            };
        }
    }
};
UserService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map