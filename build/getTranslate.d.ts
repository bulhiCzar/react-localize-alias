import React from 'react';
import { TranslateProps } from './Translate';
export declare type getTranslateData = Omit<TranslateProps, 'id'>;
export declare const getTranslate: (id: string, props?: getTranslateData | undefined) => React.DOMElement<React.DOMAttributes<Element>, Element> | string;
