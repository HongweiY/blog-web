import { defineStore } from 'pinia'
import type { ColumnProps } from '@/ts/InterfaceAndTypes'
import { computed, ref } from 'vue'
import axios from 'axios'

export const useColumnStore = defineStore('columns', () => {
    const columns = ref<ColumnProps[]>([])

    const fetchColumns = async () => {
        const { data } = await axios.get('/api/columns')
        columns.value = data.data.list
    }
    const fetchColumn = async (cid: number) => {
        const { data } = await axios.get(`/api/columns/${cid}`)
        columns.value = [data.data]
    }
    const getColumnById = computed(() => (id: number) => {
        return columns.value.find((c) => c.id === id)
    })

    return { columns, fetchColumns, getColumnById, fetchColumn }
})
