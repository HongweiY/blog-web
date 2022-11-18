import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import type { PostProps } from '@/ts/InterfaceAndTypes'
import axios from 'axios'

export const usePostsStore = defineStore('posts', () => {
    const posts = ref<PostProps[]>([])
    const columnId = ref<number>(1)

    const getPostsByCid = computed(() => (cid: number) => {
        return posts.value.filter((p) => p.column === cid)
    })

    const createPost = (post: PostProps) => {
        posts.value.push(post)
    }

    const fetchPosts = async (cid: number) => {
        const { data } = await axios.get(`/api/columns/${cid}/posts`)
        posts.value = [...posts.value, ...data.data.list]
    }
    return {
        posts,
        createPost,
        columnId,
        getPostsByCid,
        fetchPosts,
    }
})
