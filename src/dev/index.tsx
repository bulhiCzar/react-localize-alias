import React from 'react'
import ReactDOM from 'react-dom'

import { ProviderLocalization } from '../index'
import { App } from './App'

ReactDOM.render(
  <ProviderLocalization>
    <App />
  </ProviderLocalization>,
  document.getElementById('root'),
)
