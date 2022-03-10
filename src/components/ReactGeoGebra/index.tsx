import React, { useEffect, useState, useRef } from 'react'
import { setScript } from '../../util'
import { GeoGebraParameters } from '../../types'
import {
  addElementListener,
  clientEventListener,
  removeElementListener,
  renameElementListener,
  updateElementListener
} from '../../util/GeoGebraListener'
import { useStore } from '../../store/hooks'
import { initializeStore } from '../../util/GeoGebraStoreManagement'

const Geogebra: React.FC<GeoGebraParameters> = (props) => {
  const refProps = useRef(props)

  let { id, LoadComponent, onReady, appletOnLoad, debug } = refProps.current
  if (!id) {
    id = 'ggb-applet'
  }
  if (!debug) {
    debug = false
  }
  //If a JSX Component is not given as a prop, use h3 with children
  if (!LoadComponent) {
    LoadComponent = ({ children }) => <h3>{children}</h3>
  }

  const url = 'https://geogebra.org/apps/deployggb.js'
  const [deployggbLoaded, setDeployggbLoaded] = useState(false)
  const [loading, setLoading] = useState(true)
  const [watchPropsChange, setWatchPropsChange] = useState(false)
  const store = useStore()
  //gets called by GeoGebra after the Applet is ready
  const onAppletReady = () => {
    if (appletOnLoad) appletOnLoad()
    const app = window[id as any]
    if (!app) return
    //initial State management-------------------------------------------

    initializeStore(app, store)
    //add Store Listeners -----------------------------------------------
    addElementListener(app, store)
    removeElementListener(app, store)
    renameElementListener(app, store)
    updateElementListener(app, store)
    clientEventListener(app, store)
    //-------------------------------------------------------------------
    if (onReady) onReady()
    debug && console.log(`Applet with id "${id}" is ready`)
  }

  useEffect(() => {
    !deployggbLoaded &&
      setScript(url, id)
        .then(() => {
          debug &&
            console.log(`script from "${url}" succesfull loaded into the DOM`)
          setDeployggbLoaded(true)
        })
        .catch((err) => console.error(err))

    return () => {
      setDeployggbLoaded(false)
      // removeScript(id)
      const tag = document.getElementById(`${id}-holder`)
      if (tag && tag.lastChild) {
        tag.lastChild.textContent = ''
      }
      //unregisterListeners
    }
  }, [])
  useEffect(() => {
    if (window.GGBApplet) {
      const parameter = JSON.parse(JSON.stringify(refProps.current))
      parameter.appletOnLoad = onAppletReady
      const ggbApp = new window.GGBApplet(parameter, true)
      ggbApp.inject(id)
      setLoading(false)
      setWatchPropsChange(false)
      debug &&
        console.log(`applet with id "${id}" succesfull injected into the DOM`)
    }
    return () => {
      const tag = document.getElementById(`${id}-holder`)
      if (tag && tag.lastChild) {
        tag.lastChild.textContent = ''
      }
    }
  }, [deployggbLoaded, watchPropsChange])

  return (
    <div id={`${id}-holder`}>
      {loading && <LoadComponent>Loading</LoadComponent>}
      <div id={id}></div>
    </div>
  )
}

Geogebra.defaultProps = {
  appName: 'classic',
  width: 800,
  height: 600,
  showToolBar: true,
  showAlgebraInput: true,
  showMenuBar: true
}

export default Geogebra
