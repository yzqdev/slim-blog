package com.slimblog

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class AppRun

fun main(args: Array<String>) {
    runApplication<AppRun>(*args)
}
