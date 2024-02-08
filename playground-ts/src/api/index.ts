import axios from "axios"
axios.defaults.baseURL = "https://asia-northeast3-heropy-api.cloudfunctions.net"
axios.defaults.headers.post["Content-Type"] = "application/json"
axios.defaults.headers.put["Content-Type"] = "application/json"
axios.defaults.headers.username = "KDT5_JeongTaeUk"
axios.defaults.headers.apikey = "KDT5_nREmPe9B"

export { axios as api }
