import { ObjectType, Field, registerEnumType } from '@nestjs/graphql';
import { CoreEntity } from 'src/common/entities/core.entity';
import { Entity, Column } from 'typeorm';


enum Role{
    'Host',
    'Listener'
}

registerEnumType(Role, {name:'userRole', description:"User's roles"})

@ObjectType()
@Entity()
export class User extends CoreEntity{
    @Field(()=>String)
    @Column()
    email:string
    
    @Column()
    password:string

    @Field(()=>Role)
    @Column({type:'enum', enum:Role})
    role:Role
}