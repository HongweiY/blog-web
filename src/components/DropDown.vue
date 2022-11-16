<template>
    <div ref="dropdownRef" class="dropdown">
        <a href="#" class="btn btn-outline-light my-2 dropdown-toggle" @click.prevent="handelToggle">
            {{ title }}
        </a>
        <ul v-if="isOpen" class="dropdown-menu" :style="{ display: 'block' }">
            <slot></slot>
        </ul>
    </div>
</template>
<script setup lang="ts">
import { ref, watch } from 'vue'
import useClickOutside from '../hooks/useClickOutside'

defineProps({
    title: {
        type: String,
        required: true,
    },
})

const isOpen = ref(false)

const dropdownRef = ref<null | HTMLElement>(null)

const isClickOutside = useClickOutside(dropdownRef)

const handelToggle = () => {
    isOpen.value = !isOpen.value
}

watch(isClickOutside, () => {
    if (isClickOutside.value && isOpen.value) {
        isOpen.value = false
    }
})
</script>

<style scoped></style>
