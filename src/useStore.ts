import React, { Dispatch, ReducerAction } from 'react'

export const reducer = <T> (state: any, action: Record<string, string>): T => {
  switch (action.type) {
    case 'setActiveLanguage':
      return { ...state, activeLanguage: action.value } as any
    default:
      return state
  }
}

export const useStore = <T> (initValue?: T): [T, Dispatch<ReducerAction<typeof reducer>>] => {
  const store = React.useReducer(reducer, initValue)

  return store as any
}
