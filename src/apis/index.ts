import { userApi } from '@/apis/user'
import { columnApi } from '@/apis/column'

export default {
    ...userApi,
    ...columnApi,
}
