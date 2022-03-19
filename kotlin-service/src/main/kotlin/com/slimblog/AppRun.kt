package com.slimblog

import org.apache.ibatis.annotations.Mapper
import org.mybatis.spring.annotation.MapperScan
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
@MapperScan(basePackages = ["com.slimblog.mapper"], annotationClass = Mapper::class)
class AppRun

fun main(args: Array<String>) {
    runApplication<AppRun>(*args)
}
