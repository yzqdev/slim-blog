package com.slimblog.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl
import com.slimblog.mapper.AdminUserMapper
import com.slimblog.model.entity.AdminUser
import com.slimblog.service.AdminService
import org.springframework.stereotype.Service

/**
 * @author yanni
 * @date time 2022/3/19 21:30
 * @modified By:
 */
@Service
class AdminServiceImpl : ServiceImpl<AdminUserMapper, AdminUser>(),AdminService {


}
