import axios from 'axios'

const api = axios.create({
  baseURL: 'https://server.nativecode.com.br',
})

export default api;