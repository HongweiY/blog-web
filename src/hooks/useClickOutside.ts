import type { Ref } from 'vue'
import { onMounted, onUnmounted, ref } from 'vue'

const useClickOutside = (elementRef: Ref<null | HTMLElement>) => {
    const isClickOutside = ref(false)

    const handelClick = (e: MouseEvent) => {
        if (elementRef.value) {
            isClickOutside.value = !elementRef.value.contains(e.target as HTMLElement)
        }
    }
    onUnmounted(() => {
        document.removeEventListener('click', handelClick)
    })
    onMounted(() => {
        document.addEventListener('click', handelClick)
    })

    return isClickOutside
}

export default useClickOutside
