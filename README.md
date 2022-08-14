Library for localization of React applications with support for templates and HTML
---
Package size:  9.6 kB
---

<p align="center">
  <a href="https://www.npmjs.com/package/react-localize-alias">
    <img src="https://img.shields.io/npm/dm/react-localize-alias.svg?style=flat-square">
  </a>
</p>

## Installation

```
yarn add react-localize-alias
or
npm i react-localize-alias
```

### Simple
```
import {
initLocalization,
Translate,
withLocalization,
getTranslate,
ProviderLocalization,
} from 'react-localize-alias'

const translations = {
  en: {
    hello: 'Hellow bro',
    'auth.title': 'Welcome to <b>site</b>',
    apple_count: 'Apple: ${count}',
  },
  ru: {
    hello: 'Привет, друг',
    'auth.title': 'Добро пожаловать на <b>сайт</b>',
    apple_count: 'Яблок: ${count}',
  },
}

export const App = () => {

  useEffect(() => {
    initLocalization({
      languages: [
        { code: 'en', name: 'English' },
        { code: 'ru', name: 'Русский' },
      ],
      translations,
      options: {
        defaultLanguage: 'ru',
        onMissingTranslation: data => console.log(data),
      },
    })
  }, [])

  console.log(getTranslate('hello'))

  return (
    <ProviderLocalization>
      <Translate id="hello" />

      <Translate
        id="apple_count"
        data={{ count: 123 }}
      />

      <Translate id="not_found_alias" /> 

    </ProviderLocalization>
  )
}
```

## Documentation

#### Set Provider 
```
import { ProviderLocalization } from 'react-localize-alias'

<ProviderLocalization>
    <AppInit />
</ProviderLocalization>
```

#### Init Localize 
```
import { initLocalization } from 'react-localize-alias'

const translations = {
    en: {
        hello: 'hi',
        auth.title: 'welcome to site',
        auth_button: 'next ${numebr}'
        },
    ru: {
        hellow: 'привет',
        auth.title: 'спс за регу',
        auth_button: 'далее ${number}'
    }
}

initLocalization({
    languages: [
        { code: 'en', name: 'English' },
        { code: 'ru', name: 'Руский' },
    ],
    translations,
    options: {
      defaultLanguage: 'en',
      onMissingTranslation: data => console.log(data),
    },
})
```

#### Using 
```
import { Translate, getTranslate } from 'react-localize-alias'

<Translate id='auth.title' />
getTranslate('auth.title')

// get castom value 
<Translate id='auth_button' data={{ numebr: 5 }}/> // -> next 5
getTranslate('auth_button', { data: { number: 5 } } })
```

#### Change language 
```
import { withLocalization } from 'react-localize-alias'

const App = withLocalization((props) => {
    const { setActiveLanguage } = props

    const handlerLanguage = () => {
        setActiveLanguage('en')
    }

    return <div onClick={handlerLanguage}>set en</div>  
})
```
