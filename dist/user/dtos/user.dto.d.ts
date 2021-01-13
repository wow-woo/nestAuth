import { CoreOutput } from './../../podcast/dtos/output.dto';
import { User } from './../entities/user.entity';
declare const userSignupInp_base: import("@nestjs/common").Type<Pick<User, "email" | "role">>;
export declare class userSignupInp extends userSignupInp_base {
    password: string;
}
declare const userLoginInp_base: import("@nestjs/common").Type<Pick<User, "email">>;
export declare class userLoginInp extends userLoginInp_base {
    password: string;
}
declare const userUpdateData_base: import("@nestjs/common").Type<Pick<Partial<User>, "role">>;
export declare class userUpdateData extends userUpdateData_base {
    newPassword: string;
}
export declare class userUpdateInp extends userLoginInp {
    data: userUpdateData;
}
export declare class userCancelInp extends userLoginInp {
    password: string;
}
export declare class userAllOutput extends CoreOutput {
    users: User[];
}
export declare class userSignupOutput extends CoreOutput {
    id?: number;
}
export declare class userLoginOutput extends CoreOutput {
    token?: string;
}
export declare class userUpdateOutput extends CoreOutput {
    id?: number;
}
export declare class userCancelOutput extends CoreOutput {
}
export {};
