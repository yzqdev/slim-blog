package com.slimblog.model.entity

import com.baomidou.mybatisplus.annotation.IdType
import com.baomidou.mybatisplus.annotation.TableId

/**
 * @author yanni
 * @date time 2022/3/19 21:34
 * @modified By:
 *
 */
data class AdminUser(
    @TableId("id",type=IdType.AUTO)
    var id: String,
    var username: String,
    var password: String,
    var nickname: String,
    var email: String,
    var phone: String,
    var role: String
) {
}