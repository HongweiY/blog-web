<template>
    <div>
        <h4>创建文章</h4>
        <validate-form @form-submit="onFormSubmit">
            <div>
                <label class="form-label">文章标题</label>
                <validate-input v-model="title" :rules="titleRules" />
            </div>
            <div>
                <label class="form-label">文章内容</label>
                <validate-input v-model="content" :rules="ContentRules" :tag="'textarea'" />
            </div>
            <template #submit>
                <button class="btn btn-primary btn-lg">发布文章</button>
            </template>
        </validate-form>
    </div>
</template>

<script lang="ts">
export default {
    name: 'CreatePosts',
}
</script>
<script lang="ts" setup>
import ValidateForm from '@/components/ValidateForm.vue'
import ValidateInput from '@/components/ValidateInput.vue'
import type { RulesProp, PostProps } from '@/ts/InterfaceAndTypes'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { usePostsStore } from '@/stores/post'

const store = usePostsStore()
const router = useRouter()
const titleRules: RulesProp = [
    {
        type: 'required',
        message: '标题不能为空',
    },
]

const ContentRules: RulesProp = [
    {
        type: 'required',
        message: '文章内容不能为空',
    },
]

const title = ref('')
const content = ref('')
const onFormSubmit = (result: boolean) => {
    if (result) {
        const columnId = store.columnId
        if (columnId) {
            const post: PostProps = {
                title: title.value,
                content: content.value,
                columnId,
                id: new Date().getTime(),
                createdAt: new Date().toLocaleString(),
            }
            console.log(post)
            store.createPost(post)
            router.push({ name: 'column', params: { id: columnId } })
        }
    }
}
</script>

<style scoped></style>
