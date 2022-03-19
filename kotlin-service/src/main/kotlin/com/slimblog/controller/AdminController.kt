package com.slimblog.controller;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper
import com.slimblog.model.entity.AdminUser
import com.slimblog.service.AdminService
import com.slimblog.util.JwtUtil
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

/**
 * @author yanni
 * @date time 2022/3/19 21:29
 * @modified By:
 */
@RestController
@RequestMapping("/admin")
class AdminController(val adminService: AdminService) {


    @PostMapping("/login")
    fun login(username:String, password:String): String? {
        if ( username.isBlank() ||  password.isBlank()) {
            return "token"
        } else {
            val sqlUser = adminService.getOne(QueryWrapper<AdminUser>().eq("username",  username))
            print(sqlUser)
            if (sqlUser != null) {
                return if (sqlUser.password == password) {
                    JwtUtil.sign(sqlUser.username, sqlUser.id)
                } else {
                    "密码错误"
                }
            }
        }
        return null

    }

    fun reg(): String {
        return "token"
    }
}
