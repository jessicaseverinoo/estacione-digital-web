import axios from "axios";

const api = axios.create({
  baseURL: "https://api-estacionamento-digital.herokuapp.com",
});

export default api;

// function returnAxiosInstance() {
//   return Axios.create(initializers);
// }

// export function get(url){
//   const axios = returnAxiosInstance();
//   return axios.get(url);
// }

// export function post(url, requestData){
//   const axios = returnAxiosInstance();
//   return axios.post(url, requestData);
// }
