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
      <ReactGeoGebra id='ggbApplet' width={1200} />
      <button
        onClick={() => {
          //console.log(state.perspective?.views.filter((view) => view.visible))
        }}
      >
        Click me
      </button>
    </div>
  )
}

export default App
