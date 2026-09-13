import { createI18n } from 'vue-i18n'
import viCommon from '@/i18n/locales/vi/common.json'
import enCommon from '@/i18n/locales/en/common.json'

export const i18n = createI18n({
  legacy: false,
  locale: 'vi',
  fallbackLocale: 'en',
  messages: {
    vi: {
      ...viCommon,
    },
    en: {
      ...enCommon,
    },
  },
})
