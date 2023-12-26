import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Překlady
const resources = {
    en: {
        translation: {
            "key": "Hello World",
            "aaa": "Fuxk"
        }
    },
    cs: {
        translation: {
            "key": "Ahoj světe",
            "aaa": "jebat"
        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "cs", // výchozí jazyk
        keySeparator: false,
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;