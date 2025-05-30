import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

export const languages = {
  en: 'English',
  vi: 'Tiếng Việt'
}

const resources = {
  en: {
    translation: {
      signin: 'Signin',
      signup: 'Signup'
    }
  },
  vi: {
    translation: {
      signin: 'Đăng nhập',
      signup: 'Đăng ký'
    }
  }
}

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'vi', // default language // namespaces
    fallbackLng: 'vi', // fallback language
    interpolation: {
      escapeValue: false // react already does escaping
    }
  })
