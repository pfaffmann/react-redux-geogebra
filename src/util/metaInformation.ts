import { MetaInformation, ReactGeoGebraState, Panel } from '../types'
import { getLocation } from './location'
import { modeMap } from './mode-constants'
import { viewNamesMap } from './view-constants'

export const getMetaInformationFromState = (
  state: Partial<ReactGeoGebraState>
) => {
  const visibleViews = state.perspective?.views.filter((v) => v.visible)

  if (!visibleViews) return
  const panels: Array<Panel> = visibleViews.map(
    (view): Panel => ({
      viewNo: view.id,
      name: viewNamesMap.get(view.id) || '',
      location: getLocation(view)
    })
  )

  const metaInformation: MetaInformation = {
    panels,
    mode: modeMap.get(state.mode || 0) || ''
  }

  return metaInformation
}
