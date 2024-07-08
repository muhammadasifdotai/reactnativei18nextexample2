import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from '../locales/en.json';
import sv from '../locales/sv.json';

// languageResources: is an object, it will have different different languages, in our case is englis: which contain an object which have 'translation' and then we will pass the translation file or the translation json that we imported 
// ... and same for the swedish
// we create separate variable for this because we need this in 'App.tsx'
export const languageResources = {
  // here we have a list of two keys 'en: english' and 'sv: swedish'
  en: {translation: en},
  sv: {translation: sv},
};

// In this line we are using '.use' method provided by 'i18next' to add the 'initReactI18next' to our localization setup
// .. 'initReactI18next' is a plugin specifically design for integrationg i18next with the react native applications
// .. 'initReactI18next' it basically provide react basically features and hooks that make it easier to handle translation with the react components
// .. then type 'init' to initialize the 'initReactI18next' and then we pass 'object' in this init method
// .. then first key this object have is 'compatibilityJSON: 'v3',' with version '3',
// ... 'lng: 'en',': lng for language and the default language is english.
// ...fallbackLng: 'en',:  for example , iger app may ksi language ki key nhi hay e.g '"change-language": "Ändra språket",' ya key or value ka pair hay. to app fallback language may chali jayee gi.
// .. 'resources:' : will containe the available languages and their corresponding translation and actually for this one you will create another variable
i18next.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  lng: 'en',
  fallbackLng: 'en',
  resources: languageResources,
});

export default i18next;
