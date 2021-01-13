import { UserService } from './../user/user.service';
import { NextFunction } from "express";
export declare class JwtMiddleware {
    private readonly userService;
    constructor(userService: UserService);
    user(req: Request, res: Response, next: NextFunction): Promise<void>;
}
