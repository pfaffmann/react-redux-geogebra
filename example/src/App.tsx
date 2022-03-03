import React, { useEffect } from 'react'

import {
  ReactGeoGebra,
  useStoreActions,
  useStoreState,
  Element
} from 'react-redux-geogebra'

const App = () => {
  const state = useStoreState((state) => state)
  const addElement = useStoreActions((actions) => actions.addElementToStore)

  useEffect(() => {
    console.log(state)
  }, [state])

  const addHandler = () => {
    const app = window['ggbApplet']
    if (!app) return
    app.registerAddListener((objName: string) => {
      const element: Element = {
        name: objName,
        // coordinates: {
        //   x: app.getXcoord(objName),
        //   y: app.getYcoord(objName),
        //   z: app.getZcoord(objName)
        // },
        value: app.getValue(objName),
        //listValue: app.getListValue(objName),
        color: app.getColor(objName),
        isVisible: app.getVisible(objName),
        valueString: app.getValueString(objName),
        definitionString: app.getDefinitionString(objName),
        commandString: app.getCommandString(objName),
        LaTeXString: app.getLaTeXString(objName),
        //LaTeXBase64Definition: app.getLaTeXBase64(objName, false),
        //LaTeXBase64Value: app.getLaTeXBase64(objName, true),
        objectType: app.getObjectType(objName),
        isExisting: app.exists(objName),
        isDefined: app.isDefined(objName),
        objectNumber: app.getObjectNumber(objName),
        CASobjectNumber: app.getCASObjectNumber(objName),
        layer: app.getLayer(objName),
        lineStyle: app.getLineStyle(objName),
        lineThickness: app.getLineThickness(objName),
        pointStyle: app.getPointStyle(objName),
        pointSize: app.getPointSize(objName),
        filling: app.getFilling(objName),
        caption: app.getCaption(objName),
        labelStyle: app.getLabelStyle(objName),
        isLabelVisible: app.getLabelVisible(objName),
        isIndependent: app.isIndependent(objName),
        isMoveable: app.isMoveable(objName)
      }
      addElement(element)
    })
  }

  return (
    <div>
      <h1>GeoGebra</h1>
      <ReactGeoGebra id='ggbApplet' appletOnLoad={addHandler} />
    </div>
  )
}

export default App
