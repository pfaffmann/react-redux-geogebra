import { xmlParser } from '.'
import { Perspective } from '../../types'

export const perspectiveXML2JSON: any = (xml: string) => {
  const json = xmlParser.parse(xml)
  const perspective: Perspective = json.perspective
  perspective.panes = Array.isArray(json.perspective.panes.pane)
    ? [...json.perspective.panes.pane]
    : [json.perspective.panes.pane]
  perspective.views = [...json.perspective.views.view]
  return perspective
}
