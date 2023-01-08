export type Code = string
export type Translation = Record<string, string>
export type Translations = Record<Code, Translation>
export type Data = Record<string, unknown>

export interface Language {
  code: Code
  name: string
}

export interface OnMissingProps {
  id: string
  code: Code
}

export interface Config {
  activeLanguage: string
  onMissing?: (data: OnMissingProps) => void
  onAlias?: (alias: string, code: Code) => string
}
