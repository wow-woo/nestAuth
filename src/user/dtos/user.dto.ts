import { Column } from 'typeorm';
import { CoreOutput } from './../../podcast/dtos/output.dto';
import { User } from './../entities/user.entity';
import { InputType, PickType, ObjectType, Field, PartialType, OmitType } from '@nestjs/graphql';


@InputType()
export class userSignupInp extends PickType(User, ['email', 'role'], InputType){
    @Field(()=>String)
    password:string
}

@InputType()
export class userLoginInp extends PickType(User, ['email'], InputType){
    @Field(()=>String)
    password:string
}

@InputType()
export class userUpdateData extends PickType(PartialType(User, InputType), ['role']){
    @Field(()=>String, {nullable:true})
    newPassword:string
}

@InputType()
export class userUpdateInp extends userLoginInp{
    @Field(()=>userUpdateData)
    data:userUpdateData
}

@InputType()
export class userCancelInp extends userLoginInp{
    @Field(()=>String)
    password:string
}

@ObjectType()
export class userAllOutput extends CoreOutput{
    @Field(()=>[User], {nullable:'items'})
    users:User[]
}

@ObjectType()
export class userSignupOutput extends CoreOutput{
    @Field(()=>String, {nullable:true})
    @Column()
    id?:number
}

@ObjectType()
export class userLoginOutput extends CoreOutput{
    @Field(()=>String, {nullable:true})
    @Column()
    token?: string
}

@ObjectType()
export class userUpdateOutput extends CoreOutput{
    @Field(()=>String, {nullable:true})
    @Column()
    id?: number
}

@ObjectType()
export class userCancelOutput extends CoreOutput{
}