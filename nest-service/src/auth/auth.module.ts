import { Module } from '@nestjs/common';
import {JwtModule, JwtService} from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

import { AuthService } from './auth.service';
import { jwtConstants } from './constants';
import { JwtStrategy } from './strategies/jwt.strategy';
import { LocalStrategy } from './strategies/local.strategy';
import {AdminModule} from "../admin/admin.module";
import {AuthController} from "./auth.controller";

@Module({
    imports: [

        PassportModule,
        JwtModule.register({
            secret: jwtConstants.secret,
            signOptions: { expiresIn: '7d' },
        }), AdminModule,
    ],
    providers: [AuthService, LocalStrategy, JwtStrategy  ],
    exports: [AuthService ],
    controllers:[AuthController]
})
export class AuthModule {}
