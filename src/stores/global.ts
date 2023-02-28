import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useGlobalStore = defineStore('global', () => {
    const loading = ref<boolean>(false)

    const setLoading = (state: boolean) => {
        loading.value = state
    }

    return {
        loading,
        setLoading,
    }
})
