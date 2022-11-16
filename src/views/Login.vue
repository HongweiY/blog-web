<template>
    <validate-form @form-submit="onFormSubmit">
        <div class="mb-3">
            <label for="email" class="form-label">邮箱</label>
            <validate-input id="email" v-model="emailVal" :rules="emailRules" type="text" placeholder="请输入邮箱" />
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">密码</label>
            <validate-input
                id="password"
                v-model="passwordVal"
                :rules="passwordRules"
                type="password"
                placeholder="请输入密码"
            />
        </div>
        <template #submit>
            <button type="submit" class="btn btn-danger">登录</button>
        </template>
    </validate-form>
</template>

<script lang="ts">
export default {
    name: 'Login',
}
</script>
<script lang="ts" setup>
import type { RulesProp } from '@/ts/InterfaceAndTypes'
import ValidateInput from '@/components/ValidateInput.vue'
import ValidateForm from '@/components/ValidateForm.vue'
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import { useUserStore } from '@/stores/user'

const store = useUserStore()
const router = useRouter()
//email 验证
const emailRules: RulesProp = [
    {
        type: 'required',
        message: '电子邮箱不能为空',
    },
    {
        type: 'email',
        message: '请输入正确格式的邮箱',
    },
]
const passwordRules: RulesProp = [
    {
        type: 'required',
        message: '密码不能为空',
    },
]
const emailVal = ref('')
const passwordVal = ref('')

const onFormSubmit = (res: boolean) => {
    if (res) {
        router.push({ path: '/' })
        store.login({ username: emailVal.value })
    }
}
</script>

<style scoped></style>
