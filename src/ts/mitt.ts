import mitt from 'mitt'
import type { ValidateFunc } from './InterfaceAndTypes'

type Events = { 'form-item-created': ValidateFunc }
export const ValidateEmitter = mitt<Events>()
