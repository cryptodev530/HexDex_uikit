import React from "react";
export interface LangType {
    code: string;
    language: string;
}
export interface LanguageState {
    selectedLanguage: LangType;
    setSelectedLanguage: (langObject: LangType) => void;
    translatedLanguage: LangType;
    setTranslatedLanguage: React.Dispatch<React.SetStateAction<LangType>>;
}
declare const LanguageContext: React.Context<LanguageState>;
declare const LanguageContextProvider: ({ children }: any) => JSX.Element;
export { LanguageContext, LanguageContextProvider };
