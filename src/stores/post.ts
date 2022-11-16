import { defineStore } from 'pinia'
import { computed, reactive, ref } from 'vue'
import type { PostProps } from '@/ts/InterfaceAndTypes'
import { PostData } from '@/mockData'

export const usePostsStore = defineStore('posts', () => {
    let posts = reactive<PostProps[]>([])
    posts = PostData
    const columnId = ref<number>(1)

    const getPostsByCid = computed(() => (cid: number) => {
        return posts.filter((p) => p.columnId === cid)
    })

    const createPost = (post: PostProps) => {
        posts.push(post)
    }

    return {
        posts,
        createPost,
        columnId,
        getPostsByCid,
    }
})
