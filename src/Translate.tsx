import React from 'react'

import { getTranslate } from './getTranslate'

export type Data = Record<string, string | number>

export interface TranslateProps {
  id: string
  data?: Data
}

export const Translate: React.FC<TranslateProps> = (props) => {
  const {
    id,
    data,
  } = props

  return (
    <>
      {getTranslate(id, { data })}
    </>
  )
}
