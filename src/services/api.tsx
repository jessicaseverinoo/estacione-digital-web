import axios from "axios";

export const instance = axios.create({
  baseURL: "https://api-estacionamento-digital.herokuapp.com",
  timeout: 10000,
  headers: { "Content-Type": "application/json" },
});
