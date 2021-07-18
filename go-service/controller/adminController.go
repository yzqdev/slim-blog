package controller

import (
	"github.com/gin-gonic/gin"
	"react-blog/utils"
)

func Login(c *gin.Context) {

	utils.JSON(c, 200, "hhh", "aaa")
}

func Index(c *gin.Context) {

	utils.JSON(c, 200, "hhh", "aaa")
}
