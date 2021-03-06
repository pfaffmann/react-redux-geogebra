import { Element } from '../../types'

export const getElementFromGeoGebraApp = (app: any, objName?: string) => {
  const e: Element = { name: objName || '' }
  if (!objName) return e
  const objectType = app.getObjectType(objName)
  let coordinates = undefined
  switch (objectType) {
    case 'point':
      coordinates = {
        x: app.getXcoord(objName),
        y: app.getYcoord(objName),
        z: app.getZcoord(objName)
      }
      break
    case 'list':
      break
    default:
      break
  }

  const element: Element = {
    name: objName,
    coordinates,
    value: app.getValue(objName),
    //listValue: app.getListValue(objName),
    color: app.getColor(objName),
    isVisible: app.getVisible(objName),
    valueString: encodeURI(app.getValueString(objName)),
    definitionString: encodeURI(app.getDefinitionString(objName)),
    commandString: encodeURI(app.getCommandString(objName)),
    LaTeXString: app.getLaTeXString(objName),
    //LaTeXBase64Definition: app.getLaTeXBase64(objName, false),
    //LaTeXBase64Value: app.getLaTeXBase64(objName, true),
    objectType,
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

  return element
}

export * from './addElementListener'
export * from './removeElementListener'
export * from './renameElementListener'
export * from './updateElementListener'
export * from './clientEventsListener'
