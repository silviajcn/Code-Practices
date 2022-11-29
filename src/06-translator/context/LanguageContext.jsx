import { createContext, useState } from 'react';
import { IntlProvider } from 'react-intl';
import EnglishText from '../languages/en-US.json';
import SpanishText from '../languages/es-ES.json';

export const languageContext = createContext();

export const LanguageProvider = ({children}) => {

    let localeDefault;
    let messagesDefault;
    const lang = localStorage.getItem('lang');

    if(lang){
        localeDefault = lang

        if(lang === 'es-ES'){
            messagesDefault = SpanishText
        } else if(lang === 'en-US'){
            messagesDefault = EnglishText
        }

    } else {
        localeDefault = 'en-US'
        messagesDefault = EnglishText
    }

    const [messages, setMessages] = useState(messagesDefault);
    const [locale, setLocale] = useState(localeDefault);

    const setLanguage = (lenguaje) => {
        switch (lenguaje) {
            case 'es-ES':
                setMessages(SpanishText);
                setLocale('es-ES');
                localStorage.setItem('lang', 'es-ES');
            break;
            
            case 'en-US':
                setMessages(EnglishText)
                setLocale('en-US');
                localStorage.setItem('lang', 'en-US');
            break;
            
            default:
                setMessages(EnglishText)
                setLocale('en-US');
                localStorage.setItem('lang', 'en-US');
        }
    }

    return (
        <languageContext.Provider
            value={{setLanguage: setLanguage}}
        >
            <IntlProvider
                locale={locale}
                messages={messages}
            >
                {children}
            </IntlProvider>
        </languageContext.Provider>
    )
};