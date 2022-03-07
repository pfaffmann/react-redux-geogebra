import React, { useEffect } from 'react'

import { ReactGeoGebra, useStoreState } from 'react-redux-geogebra'

const App = () => {
  const state = useStoreState((state) => state)

  useEffect(() => {
    console.log(state)
  }, [state])

  return (
    <div>
      <h1>GeoGebra</h1>
      <ReactGeoGebra id='ggbApplet' />
    </div>
  )
}

export default App
