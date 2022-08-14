import { config } from './initLocalization'

export const setActiveLanguage = (code: string) => {
  config.setActiveLanguage(code)
}
