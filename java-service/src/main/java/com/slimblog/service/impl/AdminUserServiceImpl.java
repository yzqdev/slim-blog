package com.slimblog.service.impl;

import com.slimblog.entity.AdminUser;
import com.slimblog.mapper.AdminUserMapper;
import com.slimblog.service.IAdminUserService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.stereotype.Service;

/**
 * <p>
 *  服务实现类
 * </p>
 *
 * @author yzq
 * @since 2022-03-19
 */
@Service
public class AdminUserServiceImpl extends ServiceImpl<AdminUserMapper, AdminUser> implements IAdminUserService {

}
