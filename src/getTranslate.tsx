/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import {
  translationsMap,
} from './initLocalization'
import {
  useLocalization,
} from './ProviderLocalization'
import { TranslateProps, Data } from './Translate'

export type getTranslateData = Omit<TranslateProps, 'id'>

export const getTranslate = (
  id: string,
  props?: getTranslateData,
): React.DOMElement<React.DOMAttributes<Element>, Element> | string => {
  const { data } = props || {}

  const { config } = useLocalization()

  const translated = (translationsMap.get(config.activeLanguage) || {})[id]

  const replaceWithData = (text: string, data: Data = {}): string => {
    return text.replace(/\$\{(\w+)\}/g, (str: string, key: string) => {
      const value = data[key] || ''
      return value.toString()
    })
  }

  if (
    !translated &&
    typeof config.onMissingTranslation === 'function'
  ) {
    config.onMissingTranslation({
      translationId: id,
      languageCode: config.activeLanguage,
    })
  }

  const isHTML = /<\/?[a-z][\s\S]*>/i.test(translated)

  const result = !translated
    ? id
    : data
      ? replaceWithData(translated, data)
      : translated

  return isHTML
    ? React.createElement('span', { dangerouslySetInnerHTML: { __html: result } })
    : result
}
