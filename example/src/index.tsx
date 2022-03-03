import './index.css'

import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { ReactGeoGebraProvider } from 'react-redux-geogebra'
ReactDOM.render(
  <ReactGeoGebraProvider>
    <App />
  </ReactGeoGebraProvider>,
  document.getElementById('root')
)
