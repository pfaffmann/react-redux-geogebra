import { XMLParser } from 'fast-xml-parser'

const parsingOptions = {
  ignoreAttributes: false,
  preserveOrder: false,
  attributeNamePrefix: '',
  parseAttributeValue: true,
  unpairedTags: ['view', 'pane', 'toolbar', 'input', 'dockBar'],
  processEntities: true
}
export const xmlParser = new XMLParser(parsingOptions)
export * from './euclidianViewXML2Json'
export * from './perspectiveXML2Json'
