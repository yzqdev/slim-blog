package com.slimblog.controller;

import cn.hutool.core.util.StrUtil;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.slimblog.entity.AdminUser;
import com.slimblog.service.IAdminUserService;
import com.slimblog.util.JwtUtil;
import lombok.RequiredArgsConstructor;
import lombok.val;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * <p>
 *  前端控制器
 * </p>
 *
 * @author yzq
 * @since 2022-03-19
 */
@RestController
@RequestMapping("/admin-user")
@RequiredArgsConstructor
public class AdminUserController {
IAdminUserService adminUserService;
    @PostMapping("/login")
    public String login(String username,String password)  {
        if ( StrUtil.isBlank(username) ||  StrUtil.isBlank(password)) {
            return "token";
        } else {
            AdminUser sqlUser = adminUserService.getOne(new QueryWrapper<AdminUser>().eq("username",  username));

            if (sqlUser != null) {
                  if (sqlUser.getPassword() == password) {
                   return JwtUtil.sign(sqlUser.getUsername(), sqlUser.getId());
                } else {
                   return  "密码错误";
                }
            }
        }
        return null;

    }

}
