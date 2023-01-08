import { updateConfigFx } from './store'
import type { Code } from './types'

export const setActiveLanguage = (code: Code) => {
  updateConfigFx({ activeLanguage: code })
}
