import { User } from './entities/user.entity';
import { userLoginInp, userLoginOutput, userSignupInp, userSignupOutput, userAllOutput, userCancelOutput, userCancelInp, userUpdateOutput, userUpdateInp } from './dtos/user.dto';
import { UserService } from './user.service';
export declare class UserResolver {
    private readonly userService;
    constructor(userService: UserService);
    me(authUser: User): Promise<void>;
    getAllUsers(): Promise<userAllOutput>;
    signup(userInf: userSignupInp): Promise<userSignupOutput>;
    login({ email, password }: userLoginInp): Promise<userLoginOutput>;
    updateUser(userInfo: userUpdateInp): Promise<userUpdateOutput>;
    cancelMembership(userInf: userCancelInp): Promise<userCancelOutput>;
}
