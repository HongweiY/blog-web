<template>
    <div>
        <section class="text-center container">
            <div class="row py-lg-5">
                <div class="col-lg-6 col-md-8 mx-auto">
                    <img src="../assets/callout.svg" alt="callout" class="w-50" />
                    <h2 class="font-weight-light">随心写作，自由表达</h2>
                    <p>
                        <a href="#" class="btn btn-primary my-2" @click.prevent="createOrLogin">开始写文章</a>
                    </p>
                </div>
            </div>
        </section>
        <h4 class="font-weight-bold text-center mb-4">发现精彩</h4>
        <column-list :list="list" />
    </div>
</template>

<script lang="ts">
export default {
    name: 'Home',
}
</script>
<script lang="ts" setup>
import { useColumnStore } from '@/stores/column'
import ColumnList from '@/components/ColumnList.vue'
import { useUserStore } from '@/stores/user'
import { useRouter } from 'vue-router'

const userStore = useUserStore()
const router = useRouter()

const createOrLogin = () => {
    if (userStore.user.isLogin) {
        router.push({
            path: 'create',
        })
    } else {
        router.push({
            path: 'login',
        })
    }
}
const store = useColumnStore()
const list = store.columns
</script>
<style scoped></style>
