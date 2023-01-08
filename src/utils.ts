import type { Data } from './types'

export const replaceWithData = (text: string, data: Data = {}): string => {
  return text.replace(/\$\{(\w+)\}/g, (str: string, key: string) => {
    const value = data[key] || ''
    return String(value)
  })
}

export const isHTML = (text: string) => /<\/?[a-z][\s\S]*>/i.test(text)
