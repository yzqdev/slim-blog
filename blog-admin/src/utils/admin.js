import axios from '@/utils/axios'
export const adminLogin=(data ) => {
  return axios.post("/base/login",data)
}
export const checkToken=(  ) => {
  return axios.post("/admin/checkToken" )
}

export const getTypeInfoApi=(  ) => {
  return axios.get("/default/getTypeInfo" )
}
export const addArticleApi=( data ) => {
  return axios.post("/admin/addArticle",data )
}
export const updateArticleApi=( data ) => {
  return axios.put("/admin/updateArticle",data )
}
export const getArticleByIdApi=( data ) => {
  return axios.get("/admin/getArticleById/"+data )
}
export const delArticleApi=( data ) => {
  return axios.delete("/admin/delArticle/"+data )
}
export const getArticleListApi=(  ) => {
  return axios.get("/default/getArticleList"  )
}
