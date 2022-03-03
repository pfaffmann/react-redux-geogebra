import { ReactGeoGebraAction } from './actions'
import { ReactGeoGebraState } from '../types'
import { initialState } from './index'
import * as constants from './constants'

const reactGeogebraReducer = (
  state = initialState,
  action: ReactGeoGebraAction
): ReactGeoGebraState => {
  switch (action.type) {
    case constants.ADD_ELEMENT_TO_STORE: {
      const geoGebraElement = action.payload
      if (!geoGebraElement) return state
      const newState = {
        ...state,
        elements: state.elements.concat(geoGebraElement)
      }
      return newState
    }
    case constants.ON_APPLET_LOADED:
    default:
      return state
  }
}

export default reactGeogebraReducer
