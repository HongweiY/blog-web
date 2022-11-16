<template>
    <form class="validate-form-container">
        <slot></slot>
        <div class="submit-area" @click.prevent="submitForm">
            <slot name="submit">
                <button type="submit" class="btn btn-primary">提交</button>
            </slot>
        </div>
    </form>
</template>

<script lang="ts" setup>
import { ValidateEmitter as emitter } from '@/ts/mitt'
import type { ValidateFunc } from '@/ts/InterfaceAndTypes'
import { onUnmounted } from 'vue'

const emit = defineEmits(['form-submit'])

let funcArr: ValidateFunc[] = []

const submitForm = () => {
    const result = funcArr.map((func) => func()).every((result) => result)
    emit('form-submit', result)
}
const callback = (func: ValidateFunc) => {
    funcArr.push(func)
}

emitter.on('form-item-created', callback)
onUnmounted(() => {
    emitter.off('form-item-created', callback)
    funcArr = []
})
</script>

<style scoped></style>
