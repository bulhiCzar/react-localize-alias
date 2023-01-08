/* eslint-disable no-template-curly-in-string,@typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react'

import {
  initLocalize,
  Translate,
  setActiveLanguage,
  getTranslate,
} from '../index'

const translations = {
  en: {
    hello: 'hi',
    'auth.title': 'welcome to site',
    'auth.button': 'next ${numebr} <hr/>',
  },
  ru: {
    bam_bom: '',
    hello: 'привет',
    'auth.title': 'спс за регу',
    'auth.button': 'далее ${number} <div>asdasd</div>',
    'bam.bom': 'bam and bom',
  },
}

export const App = () => {
  const [code, setCode] = useState('ru')

  useEffect(() => {
    initLocalize({
      languages: [
        { code: 'en', name: 'English' },
        { code: 'ru', name: 'Руский' },
      ],
      translations,
      options: {
        defaultLanguage: code,
        // eslint-disable-next-line no-console
        onMissing: data => console.log(data),
        onAlias: (alias) => alias,
      },
    })
  }, [])

  useEffect(() => {
    setActiveLanguage(code)
  }, [code])

  return (
    <div>
      <Translate id="hello" />

      <hr />

      <button type="button" onClick={() => setCode('en')}>
        set EN
      </button>
      <button type="button" onClick={() => setCode('ru')}>
        set RU
      </button>

      <hr />

      <Translate
        id="auth.button"
        data={{ number: 123 }}
      />
      <hr />

      {getTranslate('bam.bom')}
      <hr />

      <Translate id="hello_gay" />

    </div>
  )
}
