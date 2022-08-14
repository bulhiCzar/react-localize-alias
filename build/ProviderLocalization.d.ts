import React, { Dispatch, ReducerAction } from 'react';
import { config } from './initLocalization';
import { reducer } from './useStore';
interface ContextLocalizationProps {
    config: typeof config;
    update: Dispatch<ReducerAction<typeof reducer>>;
    setActiveLanguage: (code: string) => void;
}
export declare const ContextLocalization: React.Context<ContextLocalizationProps>;
export declare const ProviderLocalization: React.FC;
export declare const useLocalization: () => ContextLocalizationProps;
export {};
