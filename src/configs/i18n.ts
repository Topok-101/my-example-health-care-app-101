import {I18n} from 'i18n-js'
import en from 'languages/en'
import th from 'languages/th'
import zh from 'languages/zh'

const i18n: I18n = new I18n({
  en,
  th,
  zh
})

i18n.defaultLocale = 'th'

i18n.missingBehavior = 'guess'

i18n.enableFallback = true

export default i18n
