const base = window.location.host.includes('localhost') ? '//localhost:3000/' : '/'

// @ts-ignore
export const api = axios.create({
  baseURL: base,
  timeout: 3000,
  withCredentials: true
})
// @ts-ignore
export const supersApi = axios.create({
  baseURL: "https://www.superheroapi.com/api.php/10217240308389867"
})