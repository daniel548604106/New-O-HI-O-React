import axios from 'axios'


export default request = axios.create({
  baseURL: 'http://localhost:3001/api/',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});