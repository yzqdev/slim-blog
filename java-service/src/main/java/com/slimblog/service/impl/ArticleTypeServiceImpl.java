package com.slimblog.service.impl;

import com.slimblog.entity.ArticleType;
import com.slimblog.mapper.ArticleTypeMapper;
import com.slimblog.service.IArticleTypeService;
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
public class ArticleTypeServiceImpl extends ServiceImpl<ArticleTypeMapper, ArticleType> implements IArticleTypeService {

}
