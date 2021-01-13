import { CoreEntity } from 'src/common/entities/core.entity';
declare type userRole = "Host" | "Listener";
export declare class User extends CoreEntity {
    email: string;
    password: string;
    role: userRole;
    hashPassword(): Promise<void>;
    static hashPasswordOnUpdate(password: any): string;
}
export {};
