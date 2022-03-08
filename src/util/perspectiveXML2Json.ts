import { XMLParser } from 'fast-xml-parser'
import { Perspective } from '../types'

const parsingOptions = {
  ignoreAttributes: false,
  preserveOrder: false,
  attributeNamePrefix: '',
  parseAttributeValue: true,
  unpairedTags: ['view', 'pane', 'toolbar', 'input', 'dockBar'],
  processEntities: true
}
const parser = new XMLParser(parsingOptions)

export const perspectiveXML2JSON: any = (xml: string) => {
  const json = parser.parse(xml)
  const perspective: Perspective = json.perspective
  perspective.panes = Array.isArray(json.perspective.panes.pane)
    ? [...json.perspective.panes.pane]
    : [json.perspective.panes.pane]
  perspective.views = [...json.perspective.views.view]
  return perspective
}
