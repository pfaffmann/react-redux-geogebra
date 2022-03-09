import { XMLParser } from 'fast-xml-parser'

const parsingOptions = {
  ignoreAttributes: false,
  preserveOrder: false,
  attributeNamePrefix: '',
  parseAttributeValue: true,
  unpairedTags: ['view', 'pane', 'toolbar', 'input', 'dockBar'],
  processEntities: true
}
const xmlParser = new XMLParser(parsingOptions)

export const euclidianViewXML2JSON: any = (xml: string) => {
  const json = xmlParser.parse(xml)
  return Array.isArray(json.geogebra.euclidianView)
    ? json.geogebra.euclidianView
    : [json.geogebra.euclidianView]
}

export const euclidianView3DXML2JSON: any = (xml: string) => {
  const json = xmlParser.parse(xml)
  return json.geogebra.euclidianView3D
}
