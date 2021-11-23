import axios from "axios";

export const viacepApi = axios.create({
    baseURL: "https://viacep.com.br/ws/"
});

export const brasilApi = axios.create({
    baseURL: "https://brasilapi.com.br/api/cep/v2/"
});