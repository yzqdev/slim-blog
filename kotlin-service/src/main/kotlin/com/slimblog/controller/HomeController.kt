package com.slimblog.controller;

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

/**
 * @author yanni
 * @date time 2022/3/19 21:28
 * @modified By:
 */
@RestController
class HomeController {
    @GetMapping("/index")
    fun index(): String {
        return "hello world"
    }
    @GetMapping("/articles")
    fun getArticles():String{
        return "articles"
    }
}
