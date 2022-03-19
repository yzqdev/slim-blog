package com.slimblog.model.entity

import com.baomidou.mybatisplus.annotation.IdType
import com.baomidou.mybatisplus.annotation.TableId
import java.time.LocalDateTime

/**
 * @author yanni
 * @date time 2022/3/19 21:33
 * @modified By:
 *
 */
data class Article(
    @TableId("id", type = IdType.AUTO)
    var typeId: Int,
    var title: String,
    var articleContent: String,
    var introduce: String,
    var createTime: LocalDateTime,
    var updateTime: LocalDateTime,
    var viewCount: Int,
    var isTop: Int
) {
}