import type { Data } from './types'
import { $config, $translations } from './store'
import { replaceWithData } from './utils'

export interface GetTranslateOptions {
  data?: Data
  missOnAlias?: boolean
}

export const getTranslate = (
  id: string,
  options: GetTranslateOptions = {},
): string => {
  const { data, missOnAlias } = options

  const config = $config.getState()
  const translations = $translations.getState()

  if (config?.onAlias && !missOnAlias) {
    id = config?.onAlias(id, config?.activeLanguage)
  }
  const translated = config?.activeLanguage && translations[config.activeLanguage][id]

  if (!translated && config?.onMissing) {
    config?.onMissing({
      id,
      code: config?.activeLanguage,
    })
  }

  return !translated
    ? id
    : data
      ? replaceWithData(translated, data)
      : translated
}
