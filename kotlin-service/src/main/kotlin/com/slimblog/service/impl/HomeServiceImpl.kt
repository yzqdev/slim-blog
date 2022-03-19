package com.slimblog.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl
import com.slimblog.mapper.ArticleMapper
import com.slimblog.model.entity.Article
import com.slimblog.service.HomeService
import org.springframework.stereotype.Service

/**
 * @author yanni
 * @date time 2022/3/19 21:30
 * @modified By:
 */
@Service
class HomeServiceImpl: ServiceImpl<ArticleMapper, Article>(), HomeService {
}
