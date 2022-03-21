import React, { useEffect, useState } from 'react'
import ReactJson from 'react-json-view'
import {
  ReactGeoGebra,
  useStoreState,
  ReactGeoGebraParameters,
  ReactGeoGebraStateSubset,
  isDeepSubset as isSubsetFunc
} from 'react-redux-geogebra'

import './App.css'
const App = () => {
  const state = useStoreState((state) => state)
  const [props, setProps] = useState<Partial<ReactGeoGebraParameters>>({
    showAlgebraInput: true,
    showMenuBar: true,
    showToolBar: true,
    width: 800
  })
  const [show, setShow] = useState<boolean>(true)
  const [subset, setSubset] = useState<ReactGeoGebraStateSubset>({})
  const [isSubset, setIsSubset] = useState<boolean>(false)
  useEffect(() => {
    console.log(state)
  }, [state])

  useEffect(() => {
    setIsSubset(isSubsetFunc(state, subset))
  }, [state, subset])

  return (
    <div className='app'>
      <h1>React Redux GeoGebra Example</h1>
      {show && (
        <ReactGeoGebra id='ggbApplet' {...props} isReloadingIfPropChanges />
      )}
      <div>
        <button
          type='button'
          onClick={() => {
            setShow(!show)
          }}
        >
          toggle
        </button>
      </div>
      <div>
        share_id:{' '}
        <input
          type='text'
          value={props.material_id || ''}
          onChange={(e) => {
            const material_id = e.target.value
            setProps({ ...props, material_id })
          }}
        />
      </div>
      <div className='container'>
        <div>
          <h2>Store State</h2>
          <ReactJson src={state} name='state' />
        </div>
        <div>
          <h2>Subset</h2>
          {isSubset && <p>ist Teil vom State</p>}
          <ReactJson
            src={subset}
            name='subset'
            onAdd={(edit) => setSubset(edit.updated_src)}
            onDelete={(edit) => setSubset(edit.updated_src)}
            onEdit={(edit) => setSubset(edit.updated_src)}
          />
        </div>
      </div>
    </div>
  )
}

export default App
