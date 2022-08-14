import React from 'react';
export declare type Data = Record<string, string | number>;
export interface TranslateProps {
    id: string;
    data?: Data;
}
export declare const Translate: React.FC<TranslateProps>;
