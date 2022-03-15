import React, { useEffect, useState } from 'react'
import ReactJson from 'react-json-view'
import {
  ReactGeoGebra,
  useStoreState,
  GeoGebraParameters
} from 'react-redux-geogebra'
import './App.css'
const App = () => {
  const state = useStoreState((state) => state)
  const [props, setProps] = useState<Partial<GeoGebraParameters>>({
    showAlgebraInput: true,
    showMenuBar: true,
    showToolBar: true,
    width: 1200
  })
  useEffect(() => {
    console.log(state)
  }, [state])

  return (
    <div className='app'>
      <h1>React Redux GeoGebra Example</h1>
      <ReactGeoGebra id='ggbApplet' {...props} isReloadingIfPropChanges />
      <div>
        width:{' '}
        <input
          type='text'
          value={props.width}
          onChange={(e) => {
            const width = Number(e.target.value)
            setProps({ ...props, width })
          }}
        />
      </div>
      <div className='container'>
        <h2>Store State</h2>
        <ReactJson src={state} name='state' collapsed />
      </div>
    </div>
  )
}

export default App
