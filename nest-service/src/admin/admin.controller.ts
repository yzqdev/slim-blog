import {Body, Controller, Get, Post, UseGuards} from '@nestjs/common';
import {ApiTags} from "@nestjs/swagger";
import {AdminService} from "./admin.service";


@ApiTags('后台')
@Controller('admin')
export class AdminController {

    constructor(private readonly adminService: AdminService, ) {
    }


    @Post("/checkOpenId")
    checkOpenId() {
    }

    @Post('/outLogin')
    outLogin() {
    }

    @Post("/addBbs")
    addBbs() {
    }

    @Get("/listBbs")
    listBbs() {
    }

    @Post("/delBbsById/:id")
    delBbsById() {
    }

    @Post('/updateIsTop')
    updateIsTop() {
    }
}
