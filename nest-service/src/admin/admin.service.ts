import {Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Admin} from "./admin.entity";
import {Repository} from "typeorm";

@Injectable()
export class AdminService {
    private readonly users: Admin[]

    constructor(@InjectRepository(Admin) private adminRepository:Repository<Admin> ) {
        this.users = [
            {
                id: 1,
                username: 'john',
                password: '123456', nickname: 'aa', email: 'aaaa', phone: '111',role:'aaa'
            },
            {
                id: 2,
                username: 'jbbbbb',
                password: 'changemadsfe', nickname: 'asdffa', email: 'asdfaaa', phone: '11sdf1',role:'aasdfa'
            },
        ];
    }


    async findOne(username: string): Promise<Admin | undefined> {
        return this.users.find(user => user.username === username);
    }
    async findByName(username:string){
          return   this.adminRepository.findOne({username:username})
    }
}
