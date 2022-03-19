package com.slimblog.model.entity

import com.baomidou.mybatisplus.annotation.IdType
import com.baomidou.mybatisplus.annotation.TableId
import java.time.LocalDateTime

/**
 * @author yanni
 * @date time 2022/3/19 21:34
 * @modified By:
 *
 */
data class Bibidao(
    @TableId("id", type = IdType.AUTO) var id: Int,
    var title: String,
    var url: String,
    var image: String,
    var orderId: String,
    var createTime: LocalDateTime,
    var updateTime: LocalDateTime
) {
}