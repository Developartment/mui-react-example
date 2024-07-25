import 'i18next'

import common from '@/translations/en/common.json'

declare module 'i18next' {
    interface CustomTypeOptions {
        defaultNS: 'common'
        resources: {
            common: typeof common
        }
    }
}
