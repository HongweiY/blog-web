import { http } from '@/utils/http'

export interface LoginData {
    username: string
    password: string
}

export interface LoginRes {
    token: string
}
export interface UserInfoRes {
    id: string
    username: string
    avatar: string
}

/**
 *登录
 */
function login(data: LoginData) {
    return http.post<LoginRes>('/user/login', data)
}

/**
 * 获取登录用户信息
 */
function getUserInfo() {
    return http.get<UserInfoRes>('/user/info')
}

export const userApi = {
    login,
    getUserInfo,
}
