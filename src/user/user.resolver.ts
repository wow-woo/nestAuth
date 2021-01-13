import { User } from './entities/user.entity';
import { userLoginInp, userLoginOutput, userSignupInp, userSignupOutput, userAllOutput, userCancelOutput, userCancelInp, userUpdateOutput, userUpdateInp } from './dtos/user.dto';
import { UserService } from './user.service';
import { Args, Mutation, Resolver, Query, Context } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { AuthCtx } from 'src/auth/auth.guard';
import { Request } from 'express';
import { AuthUser } from 'src/auth/auth-user.decorator';
@Resolver(()=>User)
export class UserResolver {
    constructor(
        private readonly userService : UserService
    ){}

    @UseGuards(AuthCtx)
    @Query(()=>User)
    async me(
        @AuthUser() authUser:User
    ):Promise<void>{
        return console.log('ddddddddddd',authUser)
    }
    
    @UseGuards(AuthCtx)
    @Query(()=>userAllOutput)
    async getAllUsers():Promise<userAllOutput>{
        return this.userService.allUsers()
    }

    @Mutation(()=>userSignupOutput)
    async signup(
        @Args('inp') userInf : userSignupInp
    ):Promise<userSignupOutput>{
        return this.userService.signup(userInf)
    }

    @Query(()=>userLoginOutput)
    async login(
        @Args('inp') {email, password}:userLoginInp
    ):Promise<userLoginOutput>{
        return this.userService.login(email, password)
    }

    @UseGuards(AuthCtx)
    @Mutation(()=>userUpdateOutput)
    async updateUser(
        @Args('inp') userInfo:userUpdateInp
    ):Promise<userUpdateOutput>{
        return this.userService.updateUser(userInfo)
    }

    @UseGuards(AuthCtx)
    @Mutation(()=>userCancelOutput)
    async cancelMembership(
        @Args('inp') userInf:userCancelInp
    ):Promise<userCancelOutput>{
        return this.userService.cancelMembership(userInf)
    }
}