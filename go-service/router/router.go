package router

import (
	"github.com/gin-gonic/gin"
	"react-blog/controller"
)

func Router(e *gin.Engine) {
	adminRouter := e.Group("/admin")
	adminRouter.POST("/login", controller.Login)
}
