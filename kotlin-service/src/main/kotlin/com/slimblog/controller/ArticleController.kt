package com.slimblog.controller

import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.PutMapping
import org.springframework.web.bind.annotation.RestController

/**
 * @author yanni
 * @date time 2022/3/19 22:15
 * @modified By:
 *
 */
@RestController
class ArticleController {
    @PostMapping("/addArticle")
    fun  addArticle():String{
        return "add article"
    }
    @PutMapping("/updateArticle")
    fun updateArticle():String{
        return "update article"
    }
}