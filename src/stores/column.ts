import { defineStore } from 'pinia'
import type { ColumnProps } from '@/ts/InterfaceAndTypes'
import { ColumnData } from '@/mockData'
import { computed, reactive, ref } from 'vue'

export const useColumnStore = defineStore('columns', () => {
    let columns = reactive<ColumnProps[]>([])
    columns = ColumnData
    const getColumnById = computed(() => (id: number) => {
        return columns.find((c) => c.id === id)
    })

    return { columns, getColumnById }
})
