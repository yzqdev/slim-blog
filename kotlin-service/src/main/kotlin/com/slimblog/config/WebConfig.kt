package com.slimblog.config

import org.springframework.context.annotation.Configuration
import org.springframework.web.servlet.config.annotation.CorsRegistry
import org.springframework.web.servlet.config.annotation.InterceptorRegistry
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer

/**
 * @author yanni
 * @date time 2022/3/19 21:32
 * @modified By:
 *
 */
@Configuration
class WebConfig :WebMvcConfigurer{
    override fun addInterceptors(registry: InterceptorRegistry) {
        super.addInterceptors(registry)
    }

    override fun addCorsMappings(registry: CorsRegistry) {
        registry.addMapping("/api/**")
            .allowedOrigins("*")
            .allowedMethods("*")
            .allowedHeaders("*")
            .allowCredentials(false)
            .maxAge(3600)
        super.addCorsMappings(registry)
    }
}