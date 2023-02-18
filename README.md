Library for localization of React applications with support for templates and HTML

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
  initLocalize,
  Translate,
  setActiveLanguage,
  getTranslate,
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
   initLocalize({
         languages: [
           { code: 'en', name: 'English' },
           { code: 'ru', name: 'Russian' },
         ],
         translations,
         options: {
           defaultLanguage: 'en',
           // if the alias for the current language is not found. this function will be called
           onMissing: data => console.log(data),
           // this function will be called whenever the alias is rendered. here you can change the aliases that were set in the components
           onAlias: (alias) => alias,
         },
       })
  }, [])

  console.log(getTranslate('hello'))

  return (
    <>
      <button type="button" onClick={() => setActiveLanguage('en')}>
        set EN
      </button>
      <button type="button" onClick={() => setActiveLanguage('ru')}>
        set RU
      </button>

      <Translate id="hello" />

      <Translate
        id="apple_count"
        data={{ count: 123 }}
      />

      <Translate id="not_found_alias" /> 

    </>
  )
}
```

## Documentation

#### Init Localize 
```
import { initLocalize } from 'react-localize-alias'

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

initLocalize({
    languages: [
        { code: 'en', name: 'English' },
        { code: 'ru', name: 'Руский' },
    ],
    translations,
    options: {
      defaultLanguage: 'en',
      onMissing: data => console.log(data),
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
import { setActiveLanguage } from 'react-localize-alias'

const App = () => {
    const handlerLanguage = () => {
        setActiveLanguage('en')
    }

    return <div onClick={handlerLanguage}>set en</div>  
}
```
