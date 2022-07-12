import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {initReactI18next, useTranslation} from 'react-i18next';
import i18n from 'i18next';
import translationsEn from '../Configs/Eng';
import translationsAr from '../Configs/Arb';



export default function Hoc(CallerFuntion){
 
const MainFunction =()=>{
    
    
    i18n.use(initReactI18next).init({
      compatibilityJSON: 'v3',
      resources: {
        en: {translation: translationsEn},
        ar: {translation: translationsAr},
      },
      lng: 'en',
      fallbackLng: 'en',
      interpolation: {escapeValue: false},
    });

    

    const changeLanguage = () => {
      i18n.changeLanguage('ar');
    };
    const changeLanguageback = () => {
      i18n.changeLanguage('en');
    };
    return(
        <CallerFuntion 
       

         changeLanguage ={changeLanguage}
         changeLanguageback={changeLanguageback}
        
        />
    )
}
return MainFunction
}


const styles = StyleSheet.create({})