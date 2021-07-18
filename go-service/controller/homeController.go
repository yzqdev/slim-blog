package controller

import (
	"github.com/gin-gonic/gin"
	"react-blog/model"
	"react-blog/utils"
)

func GetArticleList(c *gin.Context) {

	articles := model.QueryArticleList()
	utils.JSON(c, 200, "chengg", articles)
}

func GetTypeInfo(c *gin.Context) {
	typeInfos := model.QueryTypeInfo()

	utils.JSON(c, 200, "success", typeInfos)
}
