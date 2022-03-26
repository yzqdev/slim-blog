import {Body, Controller, Get, Post, Request, UseGuards} from '@nestjs/common';
import {AuthService} from './auth.service';
import {ApiTags, ApiOperation} from '@nestjs/swagger';
import {LocalAuthGuard} from "./guards/local-auth.guard";
import {LoginUser} from "../admin/login.user";
import {JwtAuthGuard} from "./guards/jwt-auth.guard";

@ApiTags('user auth')
@Controller('api/auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {
    }

    @UseGuards(LocalAuthGuard)
    @Post('login')
    @ApiOperation({summary: '用户登录'})
    //https://github.com/nestjs/passport/blob/bec5fb75896b9d7e5e23045d47973d87bbb2c9ca/lib/auth.guard.ts#L62
    //userguard会把返回的user注入到req对象里面,而不是req.body
    // async login(@Request() req) {
    //     console.log('req object =>');
    //     // console.log(req);
    //     console.log('user auth ctrl', req.user);
    //     return this.authService.login(req.user);
    // }

    async login(@Body() loginUserDto: LoginUser) {
      console.log('user auth ctrl', loginUserDto);

      return this.authService.login(loginUserDto);
    }

    @Post('logout')
    @ApiOperation({summary: '用户登出'})
    async logout() {
        return this.authService.logout();
    }

    @UseGuards(JwtAuthGuard)
    @Get('profile')
    async getU(@Request() req) {
        return req.user
    }
}
