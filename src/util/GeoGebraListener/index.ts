import { Element } from '../../types'

export * from './addElementListener'
export * from './removeElementListener'
export * from './renameElementListener'
export * from './updateElementListener'
export * from './clientEventsListener'

export const getElementFromGeoGebraApp = (app: any, objName: string) => {
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
      const v1 = app.getListValue(objName, 0)
      console.log(v1)
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
    valueString: app.getValueString(objName),
    definitionString: app.getDefinitionString(objName),
    commandString: app.getCommandString(objName),
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
