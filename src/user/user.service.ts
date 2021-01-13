import { userLoginOutput, userSignupInp, userAllOutput, userCancelOutput, userUpdateInp, userUpdateOutput } from './dtos/user.dto';
import { User } from './entities/user.entity';
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt'
import * as jwt from 'jsonwebtoken'
import { Request } from 'express';
@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository:Repository<User>
    ){}

    async findById(id:string):Promise<User>{
        return await this.userRepository.findOne(id)
    }

    async allUsers():Promise<userAllOutput>{
        try {
            const users = await this.userRepository.find()
            if(!users){
                return {
                    ok:true,
                    users:[]
                }
            }
            return {
                ok:true, users
            }
        } catch (error) {
            return {
                ok:false, error, users:[]
            }            
        }
    }

    async signup({email, password, role}:userSignupInp){
        try {
            const isPresent= await this.userRepository.findOne({email})
            if(!isPresent){
                const user = await this.userRepository.create({
                    email,password,role
                })
                if(!user){
                    return {
                        ok:false, error:"Failed to create account"
                    }
                }
                await this.userRepository.save(user)
                return {
                    ok:true,
                    id:user.id
                }
            }{
                return {
                    ok:false, error:"account exists"
                }
            }
        } catch (error) {
            return {
                ok:false,
                error:'errrrr'
            }
        }
    }

    async login( email:string, password:string):Promise<userLoginOutput>{
        try {
            const user = await this.userRepository.findOne({email})
            if(!user){
                return {
                    ok:false, error:"there is no user"
                }
            }
            const isMatched = await bcrypt.compare(password, user.password)

            if(isMatched){
                const token = jwt.sign({id:user.id}, "tekitouna sercretto")
                return {
                    ok:true, token
                }
            }{
                return {
                    ok:false, error:"password is wrong"
                }
            }
        } catch (error) {
            return {
                ok:false, error:'errrorrr'
            }
        }
    }

    async updateUser({email, password, data}:userUpdateInp):Promise<userUpdateOutput>{
        try {
            console.log('oldpassword', password)
            const user = await this.userRepository.findOne({email})
            console.log(user)
            const isMatch = await bcrypt.compare(password, user.password)

            if(!isMatch){
                return {
                    ok:false, error:"No Permission"
                }
            }

            if(data.newPassword){
               password= data.newPassword 
            }
            
            password = User.hashPasswordOnUpdate(password)
            await this.userRepository.save({...user, password:password, ...data})

            return {
                ok:true, id:user.id
            }
        } catch (error) {
            return {
                ok:false, error
            }
        }
        

    }

    async cancelMembership(userInf):Promise<userCancelOutput>{
        try {
            const user = await this.userRepository.findOne(userInf)
            if(!user){
                return {
                    ok:false,
                    error:"No account found"
                }
            }
            await this.userRepository.remove(user)
            return {
                ok:true,
            }
        } catch (error) {
            return {
                ok:false, error
            }
        }
        
    }
}