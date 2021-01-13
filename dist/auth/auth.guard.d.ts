import { CanActivate, ExecutionContext } from '@nestjs/common';
export declare class AuthCtx implements CanActivate {
    canActivate(ctx: ExecutionContext): boolean;
}
