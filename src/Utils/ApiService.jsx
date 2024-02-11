import axios from "axios";

const API_URL = "https://65c5d0e0e5b94dfca2e0573b.mockapi.io"

const ApiService = axios.create({
    baseURL : API_URL,
    headers : {
        "Content-Type" : "application/json"
    }
})
export default ApiService