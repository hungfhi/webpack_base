import axios from "axios";
const apiUrl = process.env.REACT_APP_API_URL;
 const apis = {
    getLoginUser(params){
        return axios.post(`${apiUrl}/auth/login`,params)
    }
 }
 export default apis;