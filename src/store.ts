import { createEvent, createStore } from 'effector/compat'
import { Config, Language, Translations } from './types'

export const setLanguagesFx = createEvent<Language[]>()
export const $languages = createStore<Language[]>([])
  .on(setLanguagesFx, (_, languages) => languages)

export const setTranslationsFx = createEvent<Translations>()
export const $translations = createStore<Translations>({})
  .on(setTranslationsFx, (_, translations) => translations)

export const setConfigFx = createEvent<Config>()
export const updateConfigFx = createEvent<Partial<Config>>()
export const $config = createStore<Config | null>(null)
  .on(setConfigFx, (_, config) => config)
  .on(updateConfigFx, (prev, update) => ({ ...prev, ...update }) as Config)
