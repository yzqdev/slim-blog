package router

import (
	"github.com/gin-gonic/gin"
	"react-blog/controller"
)

func Router(e *gin.Engine) {
	adminRouter := e.Group("/admin")
	{
		adminRouter.POST("/login", controller.Login)
		adminRouter.GET("/index", controller.Index)
		adminRouter.GET("/getTypeInfo")
		adminRouter.GET("/addArticle")
		adminRouter.GET("/updateArticle")
		adminRouter.GET("/getArticleList")
		adminRouter.GET("/delArticle/:id")
		adminRouter.GET("/getArticleById/:id")
		adminRouter.GET("/checkLogin")
		adminRouter.GET("/checkOpenId")
		adminRouter.GET("/outLogin")
		adminRouter.GET("/addBBD")
		adminRouter.GET("/getListBBD")
		adminRouter.GET("/deBBDbyId/:id")
		adminRouter.GET("updateIsTop")
	}

}
