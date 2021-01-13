import { ObjectType, Field, registerEnumType } from '@nestjs/graphql';
import { registerDecorator } from 'class-validator';
import { CoreEntity } from 'src/common/entities/core.entity';
import { Entity, Column, BeforeInsert } from 'typeorm';
import * as bcrypt from 'bcrypt'

enum Role{
    Host='Host',
    Listener='Listener'
}
type userRole = "Host" | "Listener"
registerEnumType(Role, {name:'userRole', description:"User's roles"})
@ObjectType()
@Entity()
export class User extends CoreEntity{
    @Field(()=>String)
    @Column()
    email:string
    
    @Column()
    password:string

    @Field(()=>String)
    @Column()
    role:userRole

    @BeforeInsert()
    async hashPassword(){
        this.password = bcrypt.hashSync(this.password, 10)
    }

    static hashPasswordOnUpdate(password){
        return bcrypt.hashSync(password, 10)
    }
}