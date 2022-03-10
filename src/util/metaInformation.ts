import { MetaInformation, ReactGeoGebraState, Panel } from '../types'
import { viewNamesMap } from './view-constants'

export const getMetaInformationFromState = (
  state: Partial<ReactGeoGebraState>
) => {
  const visibleViews = state.perspective?.views.filter((v) => v.visible)

  if (!visibleViews) return
  const panels: Array<Panel> = visibleViews.map(
    (view): Panel => ({
      viewNo: view.id,
      name: viewNamesMap.get(view.id) || ''
    })
  )
  const metaInformation: MetaInformation = {
    panels
  }

  return metaInformation
}
