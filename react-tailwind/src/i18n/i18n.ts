import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HEADER_EN from "../locales/en/header.json";
import FOOTER_EN from "../locales/en/footer.json";
import TRANGCHU_EN from "../locales/en/trangchu.json";
import SLIDER_PHONG_EN from "../locales/en/slider/phong.json"
import SLIDER_AMTHUC_EN from "../locales/en/slider/amthuc.json";
import SLIDER_UUDAI_EN from "../locales/en/slider/Uudaidatbiet.json";
import SLIDER_ADAMAS_EN from "../locales/en/slider/AdamasBoutique.json";
import FEEDBACK_EN from "../locales/en/feedback.json";




import HEADER_VI from "../locales/vi/header.json";
import FOOTER_VI from "../locales/vi/footer.json";
import TRANGCHU_VI from "../locales/vi/trangchu.json";
import SLIDER_PHONG_VI from "../locales/vi/slider/phong.json";
import SLIDER_AMTHUC_VI from "../locales/vi/slider/amthuc.json";
import SLIDER_UUDAI_VI from "../locales/vi/slider/Uudaidatbiet.json";
import SLIDER_ADAMAS_VI from "../locales/vi/slider/AdamasBoutique.json";
import FEEDBACK_VI from "../locales/vi/feedback.json";

export const languages = {
    en: 'English',
    vi: 'Tiếng Việt',
 
}; 


export const resources = {
    en: {
        header : HEADER_EN,
        footer : FOOTER_EN,
        trangchu : TRANGCHU_EN,  
        slider_phong: SLIDER_PHONG_EN,
        slider_amthuc: SLIDER_AMTHUC_EN,
        slider_uudai: SLIDER_UUDAI_EN,
        slider_adamas: SLIDER_ADAMAS_EN,
        feedback: FEEDBACK_EN,
    },
    vi: {
        header : HEADER_VI,
        footer : FOOTER_VI,
        trangchu : TRANGCHU_VI,
        slider_phong: SLIDER_PHONG_VI,
        slider_amthuc: SLIDER_AMTHUC_VI,
        slider_uudai: SLIDER_UUDAI_VI,
        slider_adamas: SLIDER_ADAMAS_VI,
        feedback: FEEDBACK_VI,
    },
}

export const defaultNS = 'header'


i18n.use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: "vi", // default language
        ns: ['header', 'trangchu'], // namespaces
        defaultNS,
        fallbackLng: "vi", // fallback language
        interpolation: {
            escapeValue: false, // react already does escaping
        },
    });