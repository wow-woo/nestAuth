import { UserModule } from './../user/user.module';
import { JwtMiddleware } from './jwt.middleware';
import { UserService } from './../user/user.service';
import { Module } from '@nestjs/common';

@Module({
    imports:[UserService],
    providers:[UserService],
    // exports:[JwtMiddleware]
})
export class AuthModule {}
