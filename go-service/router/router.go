package router

import (
	"github.com/gin-gonic/gin"
	"react-blog/controller"
)

func InitRouter(e *gin.Engine) {
	baseRouter := e.Group("/base")
	{
		baseRouter.POST("/login", controller.Login)
		baseRouter.POST("/reg", controller.Register)
		baseRouter.POST("/outLogin")
	}
	adminRouter := e.Group("/admin")
	{

		adminRouter.GET("/index", controller.Index)
		adminRouter.GET("/getTypeInfo")
		adminRouter.GET("/addArticle")
		adminRouter.GET("/updateArticle")
		adminRouter.GET("/getArticleList")
		adminRouter.GET("/delArticle/:id")
		adminRouter.GET("/getArticleById/:id")
		adminRouter.GET("/checkOpenId")
		adminRouter.GET("/addBBD")
		adminRouter.GET("/getListBBD")
		adminRouter.GET("/deBBDbyId/:id")
		adminRouter.GET("updateIsTop")
	}
	homeRouter := e.Group("/default")
	{
		homeRouter.GET("/index")
		homeRouter.GET("/getArticleList")
		homeRouter.GET("/getArticleById/:id")
		homeRouter.GET("/getTypeInfo")
		homeRouter.GET("/getAllPartCount")
		homeRouter.GET("/getListBBD")

	}

}
