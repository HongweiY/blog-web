<template>
    <Teleport to="#loader">
        <div
            class="d-flex justify-content-center align-items-center h-100 loading-container"
            :style="{ backgroundColor: background || '' }"
        >
            <div class="loading-content">
                <div v-if="spinnerType === 'grow'" class="spinner-grow text-primary" role="status"></div>
                <div v-else class="spinner-border text-primary" role="status"></div>
                <p v-if="text" class="text-primary small">{{ text }}</p>
            </div>
        </div>
    </Teleport>
</template>
<script setup lang="ts">
import { onUnmounted } from 'vue'

type spinnerType = 'border' | 'grow'

export interface loaderProps {
    text: string
    background: string
    spinnerType: spinnerType
}

withDefaults(defineProps<loaderProps>(), {
    text: '加载中',
    background: '',
    spinnerType: 'border',
})
const node = document.createElement('div')
node.id = 'loader'
document.body.appendChild(node)

onUnmounted(() => {
    document.body.removeChild(node)
})
</script>
<style scoped>
.loading-container {
    background: rgba(255, 255, 255, 0.5);
    z-index: 100;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
}

.loading-content {
    text-align: center;
    font-size: 20px;
}
</style>
