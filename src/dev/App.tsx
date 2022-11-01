/* eslint-disable no-template-curly-in-string */
import React, { useEffect } from 'react'

import {
  initLocalization,
  Translate,
  setActiveLanguage,
  getTranslate,
} from '../index'

const translations = {
  en: {
    hello: 'hi',
    'auth.title': 'welcome to site',
    auth_button: 'next ${numebr} <hr/>',
  },
  ru: {
    hello: 'привет',
    'auth.title': 'спс за регу',
    auth_button: 'далее ${number} <div>asdasd</div>',
  },
}

export const App = () => {
  useEffect(() => {
    initLocalization({
      languages: [
        { code: 'en', name: 'English' },
        { code: 'ru', name: 'Руский' },
      ],
      translations,
      options: {
        defaultLanguage: 'ru',
        // eslint-disable-next-line no-console
        onMissingTranslation: data => console.log(data),
        onAlias: (alias) => alias,
      },
    })
  }, [])

  return (
    <div>
      <Translate id="hello" />

      <hr />

      <button type="button" onClick={() => setActiveLanguage('en')}>
        set EN
      </button>
      <button type="button" onClick={() => setActiveLanguage('ru')}>
        set RU
      </button>

      <hr />

      <Translate
        id="auth_button"
        data={{ number: 123 }}
      />

      {getTranslate('bam_bom')}

      <Translate id="hello_gay" />

    </div>
  )
}
