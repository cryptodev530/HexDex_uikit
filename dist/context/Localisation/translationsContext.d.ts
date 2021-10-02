import React from 'react';
export interface TranslationState {
    translations: Array<any>;
    setTranslations: React.Dispatch<React.SetStateAction<Array<any>>>;
}
export declare const TranslationsContext: React.Context<TranslationState>;
