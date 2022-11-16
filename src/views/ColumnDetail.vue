<template>
    <div class="column-detail-page w-75 mx-auto">
        <div class="column-info row mb-4 border-bottom pb-4 align-items-center">
            <div class="col-3">
                <img :src="columns.avatar" :alt="columns.title" class="rounded-circle" />
            </div>
            <div class="col-9">
                <h4>{{ columns.title }}</h4>
                <p>{{ columns.description }}</p>
            </div>
        </div>
        <post-list :list="posts" />
    </div>
</template>

<script lang="ts" setup>
import PostList from '@/components/PostList.vue'
import { useRoute } from 'vue-router'
import { useColumnStore } from '@/stores/column'
import { usePostsStore } from '@/stores/post'

const route = useRoute()
const columnId = +route.params.id
const columnStore = useColumnStore()
const postStore = usePostsStore()
const columns = columnStore.getColumnById(columnId)
const posts = postStore.getPostsByCid(columnId)
</script>

<style scoped></style>
