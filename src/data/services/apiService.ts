import axios from "axios";

const apiService = axios.create({
  baseURL: "https://alunos.treinaweb.com.br/hyperprof/api",
  headers: {
    "Content-Type": "application/json",
    "Accept-Language": "pt-BR",
  },
});

export default apiService;
