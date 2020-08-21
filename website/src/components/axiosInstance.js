import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://shielded-dusk-01708.herokuapp.com/api',
   
  });
  export default axiosInstance;