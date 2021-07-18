import axios from './FetchApi'
export const getTypeInfoApi=(  ) => {
  return axios.get("/default/getTypeInfo" )
}
export const getListBBDAPi=(  ) => {
  return axios.post("/default/getListBBD" )
}

export const  getAllPartCountApi=(  ) => {
  return axios.get("/default/getAllPartCount" )
}

export const getArticleByIdApi=( data ) => {
  return axios.get("/admin/getArticleById/"+data )
}
export const getListByIdApi=( data ) => {
  return axios.get("/default/getListById/"+data )
}
export const getArticleListApi=(  ) => {
  return axios.get("/default/getArticleList"  )
}
