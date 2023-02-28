import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import axios, { AxiosError } from 'axios'
import { useGlobalStore } from '@/stores/global'

const server: AxiosInstance = axios.create({
    baseURL: '/api',
    timeout: 30000,
})

server.interceptors.request.use(
    (config: AxiosRequestConfig) => {
        const store = useGlobalStore()
        store.setLoading(true)
        return config
    },
    (error: AxiosError) => {
        return Promise.reject(error)
    }
)

server.interceptors.response.use(
    (response: AxiosResponse) => {
        const store = useGlobalStore()
        const { code, msg, data } = response.data
        store.setLoading(false)
        if (code === 0) {
            return data
        } else {
            return Promise.reject(new Error(msg))
        }
    },
    (error: AxiosError) => {
        let msg = ''
        const status = error.response?.status
        switch (status) {
            case 401:
                msg = 'token 失效，请重新登录'
                // 这里可以触发退出的 action
                break
            case 403:
                msg = '拒绝访问'
                break
            case 404:
                msg = '请求地址错误'
                break
            case 500:
                msg = '服务器故障'
                break
            default:
                msg = '网络连接故障'
        }
        console.log(msg)
        return Promise.reject(error)
    }
)

export const http = {
    get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
        return server.get(url, config)
    },
    post<T>(url: string, data?: object, config?: AxiosRequestConfig): Promise<T> {
        return server.post(url, data, config)
    },
    put<T>(url: string, data?: object, config?: AxiosRequestConfig): Promise<T> {
        return server.put(url, data, config)
    },
    delete<T>(url: string, config: AxiosRequestConfig): Promise<T> {
        return server.delete(url, config)
    },
}
export default server
