import React, { useEffect } from 'react'
import ReactJson from 'react-json-view'
import { ReactGeoGebra, useStoreState } from 'react-redux-geogebra'
import './App.css'
const App = () => {
  const state = useStoreState((state) => ({
    panes: state.perspective?.panes,
    views: state.perspective?.views.filter((v) => v.visible)
  }))

  useEffect(() => {
    console.log(state)
  }, [state])

  return (
    <div className='app'>
      <h1>React Redux GeoGebra Example</h1>
      <ReactGeoGebra id='ggbApplet' width={1200} />
      <div className='container'>
        <h2>Store State</h2>
        <ReactJson src={state} name='state' />
      </div>
    </div>
  )
}

export default App
