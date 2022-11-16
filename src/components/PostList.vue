<template>
    <div class="post-container">
        <article v-for="post in list" :key="post.id" class="card mb-3 shadow">
            <div class="card-body">
                <h4>{{ post.title }}</h4>
                <div class="row my-3 align-items-center">
                    <div v-if="post.cover" class="col-3">
                        <img :src="post.cover" :alt="post.title" class="rounded-lg" />
                    </div>
                    <p :class="{ 'col-9': post.cover }">{{ post.content }}</p>
                </div>
                <span class="text-muted">{{ post.createdAt }}</span>
            </div>
        </article>
    </div>
</template>
<script lang="ts" setup>
import type { PostProps } from '@/ts/InterfaceAndTypes'
import type { PropType } from 'vue'

defineProps({
    list: {
        required: true,
        type: Array as PropType<PostProps[]>,
    },
})
</script>
<script lang="ts">
export default {
    name: 'PostList',
}
</script>

<style scoped></style>
