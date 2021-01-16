const base = window.location.host.includes('localhost') ? '//localhost:3000/' : '/'

// @ts-ignore
export const api = axios.create({
  baseURL: 'https://hackathon-red.herokuapp.com/api',
  timeout: 3000,
  withCredentials: true
})
// @ts-ignore
export const account = axios.create({
  baseURL: 'https://hackathon-red.herokuapp.com/',
  timeout: 3000,
  withCredentials: true
})
// @ts-ignore
export const supersApi = axios.create({
  baseURL: 'https://www.superheroapi.com/api.php/10217240308389867'
})

// @ts-ignore
export const test = axios.create({
  baseURL: 'http://localhost:3000'
})
