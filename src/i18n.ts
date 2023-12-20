import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import * as _ from "lodash";
import { initReactI18next } from "react-i18next";

import { Language } from "./types/translation";

i18n.use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        supportedLngs: _.values(Language),
        fallbackLng: "en",
        ns: ["common"],
        interpolation: {
            escapeValue: false,
        },
        react: {
            useSuspense: true,
        },
        detection: {
            order: [
                "querystring",
                "cookie",
                "localStorage",
                "sessionStorage",
                "navigator",
                "htmlTag",
            ],
            caches: ["cookie", "localStorage"],
        },
    });
export default i18n;
