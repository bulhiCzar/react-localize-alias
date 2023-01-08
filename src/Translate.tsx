import React from 'react'
import { useStore } from 'effector-react/compat'

import { $config, $translations } from './store'
import { isHTML, replaceWithData } from './utils'
import type { Data } from './types'

export interface TranslateProps {
  id: string
  data?: Data
}

export const Translate: React.FC<TranslateProps> = ({
  id,
  data,
}) => {
  const config = useStore($config)
  const translations = useStore($translations)

  if (config?.onAlias) {
    id = config?.onAlias(id, config?.activeLanguage)
  }
  const translated = config?.activeLanguage && translations[config.activeLanguage][id]

  if (!translated && config?.onMissing) {
    config?.onMissing({
      id,
      code: config?.activeLanguage,
    })
  }

  const result = !translated
    ? id
    : data
      ? replaceWithData(translated, data)
      : translated

  return isHTML(result)
    ? React.createElement('span', { dangerouslySetInnerHTML: { __html: result } })
    : <>{result}</>
}
