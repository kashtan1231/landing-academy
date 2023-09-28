import axios from 'axios'

const actualUrl = 'https://7eminar.ua/api/'

const defaultHeaders = {
  accept: 'application/json',
}

export const instanceApi = axios.create({
  baseURL: actualUrl,
  headers: defaultHeaders,
})
