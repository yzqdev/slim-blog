package model

type ArticleType struct {
	Id       int    `json:"id"`
	TypeName string `json:"type_name"`
	OrderNum int    `json:"order_num"`
	Icon     string `json:"icon"`
}

// QueryTypeInfo 后台文章分类信息
func QueryTypeInfo() (result []ArticleType) {
	db := GetDb()
	db.Table("article_type").Find(&result)

	return
}
