package com.slimblog.service.impl;

import com.slimblog.entity.Article;
import com.slimblog.mapper.ArticleMapper;
import com.slimblog.service.IArticleService;
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
public class ArticleServiceImpl extends ServiceImpl<ArticleMapper, Article> implements IArticleService {

}
