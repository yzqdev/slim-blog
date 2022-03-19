package com.slimblog;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@MapperScan(basePackages = "com.slimblog.mapper")
public class SlimBlog {

    public static void main(String[] args) {
        SpringApplication.run(SlimBlog.class, args);
    }

}
