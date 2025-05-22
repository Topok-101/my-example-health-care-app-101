export type LanguageType = 'th' | 'en' | 'zh'

export interface LanguageInfo {
  language: 'th' | 'en' | 'zh'
  setLanguage: (val: LanguageType) => void
}
