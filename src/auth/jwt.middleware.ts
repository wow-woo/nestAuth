import { UserService } from './../user/user.service';
import { Injectable } from '@nestjs/common';
import { NextFunction } from "express";
import * as jwt from 'jsonwebtoken'

@Injectable()
export class JwtMiddleware {
    constructor(
        private readonly userService:UserService
    ){}
    async user(req:Request, res:Response, next:NextFunction){
        if('x-jwt' in req.headers){
            const token = req.headers['x-jwt'];
            const decoded = jwt.verify(`${token}`, "tekitouna sercretto")

            if(typeof decoded === 'object' && decoded.hasOwnProperty('id')){
                const user = await this.userService.findById(decoded['id']);
                req['user'] = user;
            }
        }
        next()
    }
}