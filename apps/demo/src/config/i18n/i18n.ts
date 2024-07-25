import dayjs from 'dayjs'
import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

import commonEn from '@/translations/en/common.json'

export const supportLanguages = {
    en: 'English',
}

i18n.on('initialized', () => {
    dayjs.locale(i18n.resolvedLanguage)
})

i18n.on('languageChanged', () => {
    dayjs.locale(i18n.resolvedLanguage)
})

i18n.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        detection: {
            order: [
                'querystring',
                'cookie',
                'localStorage',
                'sessionStorage',
                'navigator',
                'htmlTag',
            ],
            caches: ['cookie', 'localStorage'],
        },
        defaultNS: 'common',
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
        react: {
            useSuspense: true,
        },
        resources: {
            en: {
                common: commonEn,
            },
        },
    })

export default i18n
