export type Code = string

export interface Language {
  code: Code
  name: string
}

export interface onMissingTranslationProps {
  translationId: string
  languageCode: Code
}

export type onMissingTranslationFunction = (data: onMissingTranslationProps) => void
export type onAliasFunction = (alias: string) => string

export interface Options {
  defaultLanguage: string
  onMissingTranslation?: onMissingTranslationFunction
  onAlias?: onAliasFunction
}

export type Translation = Record<string, string>

export interface InitLocalization {
  languages: Language[]
  translations: Record<Code, Translation>
  options: Options
}

export const translationsMap: Map<Code, Translation> = new Map()

export const languagesMap: Map<Code, Language> = new Map()

export interface Config {
  activeLanguage: string
  onMissingTranslation: onMissingTranslationFunction
  onAlias: onAliasFunction
  setActiveLanguage: (code: string) => void
}

export const config: Config = {
  activeLanguage: '',
  onMissingTranslation: () => null,
  setActiveLanguage: () => null,
  onAlias: (a) => a,
}

export const initLocalization = (props: InitLocalization): void => {
  const {
    languages,
    translations,
    options,
  } = props

  languages.forEach((language) => {
    languagesMap.set(language.code, language)
  })

  Object.entries(translations).forEach(([code, translation]) => {
    translationsMap.set(code, translation)
  })

  config.activeLanguage = options.defaultLanguage || languages[0].code

  config.onMissingTranslation = options.onMissingTranslation || (() => null)
  config.onAlias = options.onAlias || ((a) => a)

  config.setActiveLanguage(config.activeLanguage)
}
