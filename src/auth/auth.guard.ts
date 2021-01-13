import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

@Injectable()
export class AuthCtx implements CanActivate{
    canActivate(ctx:ExecutionContext):boolean{
        const gqlContext = GqlExecutionContext.create(ctx).getContext();
        const user = gqlContext['user']
        console.log(user, !!user)
        return !!user
    }
}