import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import HEADER_EN from '../locales/en/Header.json'
import FOOTER_EN from '../locales/en/Footer.json'
import HOME_EN from '../locales/en/Home.json'

import HEADER_VI from '../locales/vi/Header.json'
import FOOTER_VI from '../locales/vi/Footer.json'
import HOME_VI from '../locales/vi/Home.json'

export const languages = {
  en: 'English',
  vi: 'Tiếng Việt'
}

export const resources = {
  en: {
    Header: HEADER_EN,
    Footer: FOOTER_EN,
    Home: HOME_EN
  },
  vi: {
    Header: HEADER_VI,
    Footer: FOOTER_VI,
    Home: HOME_VI
  }
}
export const defaultNS = 'Header'
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'vi', // default language
    ns: ['Home'], // namespaces to load
    defaultNS,
    fallbackLng: 'vi', // fallback language
    interpolation: {
      escapeValue: false // react already does escaping
    }
  })
