import { setConfigFx, setLanguagesFx, setTranslationsFx } from './store'
import type { Code, Config, Language, Translations } from './types'

export interface Options extends Omit<Config, 'activeLanguage'> {
  defaultLanguage: Code
}

export interface InitLocalize {
  languages: Language[]
  translations: Translations
  options: Options
}

export const initLocalize = (props: InitLocalize): void => {
  const {
    languages,
    translations,
    options,
  } = props

  setLanguagesFx(languages)
  setTranslationsFx(translations)
  setConfigFx({
    ...options,
    activeLanguage: options.defaultLanguage,
  })
}
