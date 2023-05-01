import axios from 'axios'
import { BASE_URL } from '@/config/config'
import { getLocalStorage } from '@/utils/utils'

export const instance = axios.create({
    baseURL: BASE_URL,
    withCredentials: false,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
})

instance.interceptors.request.use(
    (req) => {
        if (req.params) Object.keys(req.params).forEach(key => {
            if (!req.params[key]) {
                delete req.params[key]
            }
        })
        return req
    },
    (error) => {
        return Promise.reject(error.response)
    }
)


instance.interceptors.response.use(
    (response) => {
        return response.data
    },
    (error) => {
        return Promise.reject(error.response)
    }
)
