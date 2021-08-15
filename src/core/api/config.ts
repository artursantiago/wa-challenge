import axios, { AxiosInstance } from 'axios'

import { API_URL } from 'config'

export const apiInstance: AxiosInstance = axios.create({ baseURL: API_URL })
