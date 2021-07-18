package model

import (
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
	"react-blog/config"
)

type Database struct {
	*gorm.DB
}

var DB *gorm.DB

// Init Open mysql 连接
func init() {
	g := config.GetGlobal()
	//sysc := config.GetGlobal()
	//connect := fmt.Sprintf("%s:%s@(%s:%s)/%s?charset=utf8&parseTime=True&loc=Local",
	//	db.user, db.pass, db.host, db.port, db.dbname)
	dsn := g.Mysql.User + ":" + g.Mysql.Pass + "@tcp(127.0.0.1:3306)/" + g.Mysql.Name + "?charset=utf8mb4&parseTime=True&loc=Local"
	db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})
	if err != nil {
		return
	}

	DB = db
	return
}

func GetDb() *gorm.DB {
	return DB
}
