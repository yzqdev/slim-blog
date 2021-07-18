package model

import (
	"github.com/gookit/color"
)

type Article struct {
	Id                 int    `json:"id"`
	TypeId             int    `json:"type_id"`
	Title              string `json:"title"`
	ArticleContent     string `json:"article_content"`
	Introduce          string `json:"introduce"`
	AddTime            int    `json:"add_time"`
	ViewCount          int    `json:"view_count"`
	PartCount          int    `json:"part_count"`
	ArticleContentHtml string `json:"article_content_html"`
	IntroduceHtml      string `json:"introduce_html"`
	IsTop              int    `json:"is_top"`
}

func QueryArticleList() (result map[string]interface{}) {

	var resList []Article
	var resType []string
	var bibidaoList []string
	var resTopList []string
	db := GetDb()
	db.Table("article").Where("is_top = ?", 0).Find(&resList)
	db.Table("article").Where("is_top = ?", 1).Find(&resTopList)
	articles := map[string]interface{}{
		"list":        resList,
		"type":        resType,
		"bibidaoList": bibidaoList,
		"topList":     resTopList,
	}
	return articles
}
func QueryAddArticle(article Article) (flag bool) {
	db := GetDb()
	color.Red.Println(article)
	db.Table("article").Create(&article)

	return true
}
func QueryUpdateArticle(article Article) (flag bool) {
	db := GetDb()

	color.Red.Println(article)
	db.Table("article").Save(&article)

	return true
}
func DeleteArticle(id int) (flag bool) {
	db := GetDb()
	var article Article
	db.Table("article").Where("id= ?", id).Delete(&article)
	return true
}
func QueryGetArticleById(id int) (result Article) {
	db := GetDb()

	db.Table("article").Where("id=?", id).First(&result)
	color.Blueln(result)
	return
}
