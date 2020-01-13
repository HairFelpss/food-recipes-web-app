import axios from 'axios'

const api = axios.create({
  baseURL: 'http://server.nativecode.com.br',
})

export default api;