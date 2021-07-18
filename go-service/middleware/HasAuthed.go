package middleware

//
//import (
//	"fmt"
//	"github.com/dgrijalva/jwt-go"
//	"github.com/gin-contrib/sessions"
//	"github.com/gin-gonic/gin"
//	"github.com/gookit/color"
//	"net/http"
//	"react-blog/model"
//)
//
//func GlobalHandle() gin.HandlerFunc {
//	return func(c *gin.Context) {
//
//		session := sessions.Default(c)
//		//获取用户信息
//		uid := session.Get("uid")
//		username := session.Get("username")
//		avatar := session.Get("avatar")
//		//获取用户信息
//		if uid == nil || username == nil {
//			c.Set("user", map[string]interface{}{
//				"uid":      0,
//				"username": "",
//				"avatar":   "/assets/images/avatar.png",
//			})
//		} else {
//			c.Set("user", map[string]interface{}{
//				"uid":      uid.(int),
//				"username": username.(string),
//				"avatar":   avatar,
//			})
//		}
//		c.Next()
//	}
//}
//func JwtHandler() gin.HandlerFunc {
//	//@Security ApiKeyAuth
//	return func(context *gin.Context) {
//		result := model.Result{
//			Code:    http.StatusUnauthorized,
//			Message: "无法认证，重新登录",
//			Data:    nil,
//		}
//		auth := context.Request.Header.Get("Authorization")
//		if len(auth) == 0 {
//			context.Abort()
//			context.JSON(http.StatusUnauthorized, gin.H{
//				"result": result,
//			})
//		}
//
//		// 校验token
//		qyUser, err := parseToken(auth)
//		context.Set("user", qyUser)
//
//		if err != nil {
//			context.Abort()
//			result.Message = err.Error()
//			context.JSON(http.StatusUnauthorized, gin.H{
//				"result": result,
//			})
//		} else {
//			println("token 正确")
//		}
//		context.Next()
//	}
//}
//func parseToken(yourToken string) (models.QyUser, error) {
//	claims := controllers.NewJwtClaims{}
//	_, err := jwt.ParseWithClaims(yourToken, &claims, func(token *jwt.Token) (interface{}, error) {
//		if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
//			return nil, fmt.Errorf("unexpected signing method: %v", token.Header["alg"])
//		}
//		// hmacSampleSecret is a []byte containing your secret, e.g. []byte("my_secret_key")
//		return controllers.SecretKey, nil
//
//	})
//	if err != nil {
//		color.Danger.Println("token值为空")
//
//	}
//	color.Danger.Println(claims.QyUser, "编译token")
//	return *claims.QyUser, err
//
//}
