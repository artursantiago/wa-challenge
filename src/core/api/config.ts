/**
 * React & libs
 */
import axios, { AxiosInstance } from 'axios'

/**
 * Config, core, components, utils, styles, assets
 */
import { API_URL } from 'config'

const api: AxiosInstance = axios.create({ baseURL: API_URL })

export default api
