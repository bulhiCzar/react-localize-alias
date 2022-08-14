export declare type Code = string;
export interface Language {
    code: Code;
    name: string;
}
export interface onMissingTranslationProps {
    translationId: string;
    languageCode: Code;
}
export declare type onMissingTranslationFunction = (data: onMissingTranslationProps) => void;
export interface Options {
    defaultLanguage: string;
    onMissingTranslation: onMissingTranslationFunction;
}
export declare type Translation = Record<string, string>;
export interface InitLocalization {
    languages: Language[];
    translations: Record<Code, Translation>;
    options: Options;
}
export declare const translationsMap: Map<Code, Translation>;
export declare const languagesMap: Map<Code, Language>;
export interface Config {
    activeLanguage: string;
    onMissingTranslation?: onMissingTranslationFunction;
}
export declare const config: Config;
export declare const initLocalization: (props: InitLocalization) => void;
