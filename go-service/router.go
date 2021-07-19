package main

import (
	"github.com/gin-gonic/gin"
	"react-blog/controller"
	"react-blog/middleware"
)

func InitRouter(e *gin.Engine) {
	baseRouter := e.Group("/base")
	{
		baseRouter.POST("/login", controller.Login)
		baseRouter.POST("/reg", controller.Register)
		baseRouter.POST("/outLogin")
	}
	adminRouter := e.Group("/admin", middleware.JwtHandler())
	{

		adminRouter.GET("/index", controller.Index)
		adminRouter.GET("/getTypeInfo")
		adminRouter.POST("/addArticle", controller.AddArticle)
		adminRouter.PUT("/updateArticle", controller.UpdateArticle)
		adminRouter.GET("/getArticleList")
		adminRouter.DELETE("/delArticle/:id", controller.DelArticle)
		adminRouter.GET("/getArticleById/:id", controller.GetArticleById)
		adminRouter.GET("/checkToken", controller.CheckToken)
		adminRouter.GET("/addBBD")
		adminRouter.GET("/getListBBD")
		adminRouter.GET("/deBBDbyId/:id")
		adminRouter.GET("updateIsTop")
	}
	homeRouter := e.Group("/default")
	{
		homeRouter.GET("/index")
		homeRouter.GET("/getArticleList", controller.GetArticleList)
		homeRouter.GET("/getArticleById/:id",controller.GetArticleById)
		homeRouter.GET("/getTypeInfo", controller.GetTypeInfo)
		homeRouter.GET("/getAllPartCount", controller.PartCount)
		homeRouter.GET("/getListBBD")

	}

}
