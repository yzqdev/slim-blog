package controller

import "github.com/gin-gonic/gin"

func Login(c *gin.Context) {

	c.JSON(200, gin.H{
		"status":  "posted",
		"message": "message",
		"nick":    "nick",
	})
}

func Index(c *gin.Context) {

	c.JSON(200, gin.H{
		"status":  "posted",
		"message": "message",
		"nick":    "nick",
	})
}
