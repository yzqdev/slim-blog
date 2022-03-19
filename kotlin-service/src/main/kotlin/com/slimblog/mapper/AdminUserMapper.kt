package com.slimblog.mapper

import com.baomidou.mybatisplus.core.mapper.BaseMapper
import com.slimblog.model.entity.AdminUser
import org.apache.ibatis.annotations.Mapper

/**
 * @author yanni
 * @date time 2022/3/19 21:54
 * @modified By:
 *
 */
@Mapper
interface AdminUserMapper: BaseMapper<AdminUser> {

}