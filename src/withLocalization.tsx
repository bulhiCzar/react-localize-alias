import React from 'react'
import { ContextLocalization } from './ProviderLocalization'

export const withLocalization = (Component: React.FC<any>) => {
  return (props: any) => {
    return (
      <ContextLocalization.Consumer>
        {(value) => (
          <Component
            {...props}
            config={value.config}
            setActiveLanguage={value.setActiveLanguage}
          />
        )}
      </ContextLocalization.Consumer>
    )
  }
}
