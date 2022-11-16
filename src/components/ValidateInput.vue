<template>
    <div class="validate-input-container pb-3">
        <input
            v-if="props.tag !== 'textarea'"
            :value="inputRef.val"
            class="form-control"
            :class="{ 'is-invalid': inputRef.error }"
            v-bind="$attrs"
            @blur="validateInput"
            @input="updateValue"
        />
        <textarea
            v-else
            rows="10"
            :value="inputRef.val"
            class="form-control"
            :class="{ 'is-invalid': inputRef.error }"
            v-bind="$attrs"
            @blur="validateInput"
            @input="updateValue"
        />
        <span v-if="inputRef.error" class="invalid-feedback"> {{ inputRef.message }} </span>
    </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import { onMounted, reactive } from 'vue'
import type { RulesProp } from '@/ts/InterfaceAndTypes'
import { ValidateEmitter as emitter } from '@/ts/mitt'

type TagType = 'input' | 'textarea'

const props = defineProps({
    rules: {
        type: Array as PropType<RulesProp>,
        default: function () {
            return [
                {
                    type: 'noRules',
                    message: '',
                },
            ]
        },
    },
    modelValue: {
        type: String,
        default: '',
    },
    tag: {
        type: String as PropType<TagType>,
        default: 'input',
    },
})

const emit = defineEmits(['update:modelValue'])

const inputRef = reactive({
    val: props.modelValue || '',
    error: false,
    message: '',
})

const emailReg =
    /^[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/

const validateInput = () => {
    if (props.rules) {
        const allPassed = props.rules.every((rule) => {
            let passed = true
            inputRef.message = rule.message
            switch (rule.type) {
                case 'required':
                    passed = inputRef.val.trim() !== ''
                    break
                case 'email':
                    passed = emailReg.test(inputRef.val)
                    break
            }
            return passed
        })
        inputRef.error = !allPassed
        return allPassed
    }
    return true
}
const updateValue = (e: KeyboardEvent) => {
    const targetValue = (e.target as HTMLInputElement).value
    inputRef.val = targetValue
    emit('update:modelValue', targetValue)
}

onMounted(() => {
    emitter.emit('form-item-created', validateInput)
})
</script>
<style scoped></style>
