import axios from "axios";
const api = axios.create({
    baseURL: 'http://10.136.38.50:8088/usuario/buscar'
})
export default api;