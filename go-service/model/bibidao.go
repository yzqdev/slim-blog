package model

type Bibidao struct {
	BaseModel
	Title   string `json:"title"`
	Url     string `json:"url"`
	Image   string `json:"image"`
	OrderId string `json:"order_id"`
}
