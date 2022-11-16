import { defineStore } from 'pinia'
import type { UserProps } from '@/ts/InterfaceAndTypes'
import { ref } from 'vue'

type loginProp = {
    username: string
}
export const useUserStore = defineStore('users', () => {
    const user = ref<UserProps>({
        isLogin: false,
    })
    const login = (data: loginProp) => {
        console.log(data.username)
        user.value = { isLogin: true, username: data.username }
        console.log({ ...user })
    }

    return { user, login }
})
