import { User } from './entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './user.service';
import { Module } from '@nestjs/common';
import { UserResolver } from './user.resolver';
@Module({
    imports:[TypeOrmModule.forFeature([User])],
    controllers:[],
    providers:[UserResolver, UserService],
    exports:[UserService]
})
export class UserModule{

}