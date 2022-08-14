import React, { Dispatch, ReducerAction, useContext, useEffect } from 'react'

import { config } from './initLocalization'
import { reducer, useStore } from './useStore'

interface ContextLocalizationProps {
  config: typeof config
  update: Dispatch<ReducerAction<typeof reducer>>
  setActiveLanguage: (code: string) => void
}

export const ContextLocalization = React.createContext<ContextLocalizationProps>({} as any)

export const ProviderLocalization: React.FC = ({ children }) => {
  const [state, dispatch] = useStore(config)

  const setActiveLanguage = (code: string) => {
    dispatch({
      type: 'setActiveLanguage',
      value: code,
    })
  }

  const stateMemo = React.useMemo(() => (
    { config: state, update: dispatch, setActiveLanguage }
  ), [state])

  useEffect(() => {
    setActiveLanguage(state.activeLanguage)
  }, [])

  return (
    <ContextLocalization.Provider value={stateMemo}>
      {children}
    </ContextLocalization.Provider>
  )
}

export const useLocalization = () => useContext(ContextLocalization)
