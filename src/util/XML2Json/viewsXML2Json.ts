import { xmlParser } from '.'
// import { XMLParser } from 'fast-xml-parser'
// import { allViews } from './dummy'
//
// const parsingOptions = {
//   ignoreAttributes: false,
//   preserveOrder: false,
//   attributeNamePrefix: '',
//   parseAttributeValue: true,
//   unpairedTags: ['view', 'pane', 'toolbar', 'input', 'dockBar'],
//   processEntities: true
// }
// const xmlParser = new XMLParser(parsingOptions)

export const euclidianViewXML2Json: any = (xml: string) => {
  const json = xmlParser.parse(xml)
  return Array.isArray(json.geogebra.euclidianView)
    ? json.geogebra.euclidianView
    : [json.geogebra.euclidianView]
}

export const euclidianView3DXML2Json: any = (xml: string) => {
  const json = xmlParser.parse(xml)
  return json.geogebra.euclidianView3D
}

export const algebraViewXML2Json: any = (xml: string) => {
  const json = xmlParser.parse(xml)
  return json.geogebra.algebraView
}

export const spreadsheetViewXML2Json: any = (xml: string) => {
  const json = xmlParser.parse(xml)
  return json.geogebra.spreadsheetView
}

export const probabilityCalculatorXML2Json: any = (xml: string) => {
  const json = xmlParser.parse(xml)
  return json.geogebra.probabilityCalculator
}
