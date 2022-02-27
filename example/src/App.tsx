import React from 'react'

import { ReactGeoGebra } from 'redux-geogebra'

const App = () => {
  return (
    <div>
      <h1>GeoGebra</h1>
      <ReactGeoGebra id='ggbApplet' />
      <ReactGeoGebra id='ggbApplet2' />
    </div>
  )
}

export default App
