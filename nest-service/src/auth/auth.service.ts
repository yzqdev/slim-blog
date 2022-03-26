import { Injectable } from '@nestjs/common';
import { AdminService } from '../admin/admin.service';
import { JwtService } from '@nestjs/jwt';
import {LoginUser} from "../admin/login.user";

@Injectable()
export class AuthService {
    constructor(
        private readonly adminService: AdminService,
        private readonly jwtService: JwtService,
    ) {}

    async validateUser(username: string, pass: string): Promise<any> {
        const user = await this.adminService.findByName(username);
        console.log('auth service user',user,username)
        if (user && user.password === pass) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }

    async login(user: LoginUser) {
        let data=await this.adminService.findByName(user.username)
        console.log(data)
        const payload = {username:data.username,email:data.email};
        return {
            access_token: this.jwtService.sign(payload),
        };
    } // 登出
    async logout() {
        return {
            message: 'ok',
        };
    }
}
