import { http } from '@/utils/http'
import type { ColumnProps } from '@/ts/InterfaceAndTypes'

interface ColumnRes {
    list: ColumnProps[]
    count: number
}
/**
 * 获取全部专栏
 */
function fetchColumns() {
    return http.get<ColumnRes>('columns')
}

export const columnApi = {
    fetchColumns,
}
