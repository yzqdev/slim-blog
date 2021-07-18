package main

import (
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"github.com/gookit/color"
)

func main() {
	r := gin.Default()

	r.Use(cors.Default())
	color.Red.Println("hhhhhhh")
	r.Run(":1500") // 监听并在 0.0.0.0:8080 上启动服务
}
