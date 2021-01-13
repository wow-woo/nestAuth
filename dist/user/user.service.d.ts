import { userLoginOutput, userSignupInp, userAllOutput, userCancelOutput, userUpdateInp, userUpdateOutput } from './dtos/user.dto';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    findById(id: string): Promise<User>;
    allUsers(): Promise<userAllOutput>;
    signup({ email, password, role }: userSignupInp): Promise<{
        ok: boolean;
        error: string;
        id?: undefined;
    } | {
        ok: boolean;
        id: number;
        error?: undefined;
    }>;
    login(email: string, password: string): Promise<userLoginOutput>;
    updateUser({ email, password, data }: userUpdateInp): Promise<userUpdateOutput>;
    cancelMembership(userInf: any): Promise<userCancelOutput>;
}
