import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

i18n
    .use(Backend)
    .use(LanguageDetector) // <- 감지 기능 추가
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        debug: true,
        defaultNS: 'translation',
        interpolation: { escapeValue: false },
        backend: { loadPath: '/locales/{{lng}}/{{ns}}.json' },
        detection: {
            order: ['querystring', 'cookie', 'localStorage', 'navigator'],
            lookupQuerystring: 'hl', // hl 파라미터 감지
        },
    });

export default i18n;