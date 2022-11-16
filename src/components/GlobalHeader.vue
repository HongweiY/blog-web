<template>
    <nav class="navbar bg-primary bg-primary justify-content-between mb-4 px-4">
        <router-link class="navbar-brand mb-0 h1" to="/">者也</router-link>
        <ul v-if="!user.isLogin" class="list-inline mb-0">
            <li class="list-inline-item">
                <router-link class="btn btn-outline-light my-2" to="/login">注册</router-link>
            </li>
            <li class="list-inline-item">
                <router-link class="btn btn-outline-light my-2" to="/login">登录</router-link>
            </li>
        </ul>
        <ul v-else class="list-inline mb-0">
            <li class="list-inline-item">
                <drop-down :title="`Hi!${user.username}`">
                    <dropdown-item>
                        <router-link :to="{ name: 'create' }" class="dropdown-item">新建文章 </router-link>
                    </dropdown-item>
                    <dropdown-item :disabled="true"><a href="#" class="dropdown-item">编辑资料</a></dropdown-item>
                    <dropdown-item><a href="#" class="dropdown-item">退出登录</a></dropdown-item>
                </drop-down>
            </li>
        </ul>
    </nav>
</template>

<script lang="ts">
import type { PropType } from 'vue'
import { defineComponent } from 'vue'
import DropDown from '@/components/DropDown.vue'
import DropdownItem from '@/components/DropdownItem.vue'
import type { UserProps } from '@/ts/InterfaceAndTypes'

export default defineComponent({
    name: 'GlobalHeader',
    components: { DropdownItem, DropDown },
    props: {
        user: {
            type: Object as PropType<UserProps>,
            required: true,
        },
    },
})
</script>

<style scoped></style>
