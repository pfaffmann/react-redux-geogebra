import { ReactGeoGebraState } from '../types'
import { initialState } from './index'
import * as constants from './constants'
import { ReactGeoGebraAction } from './actions'

const reactGeogebraReducer = (
  state = initialState,
  action: ReactGeoGebraAction
): ReactGeoGebraState => {
  switch (action.type) {
    case constants.ADD_ELEMENT_TO_STORE: {
      const geoGebraElement = action.payload
      if (!geoGebraElement) return state
      const newState: ReactGeoGebraState = {
        ...state,
        elements: state.elements.concat(geoGebraElement)
      }
      return newState
    }
    case constants.REMOVE_ELEMENT_FROM_STORE: {
      const name = action.payload
      if (!name) return state
      const newState: ReactGeoGebraState = {
        ...state,
        elements: state.elements.filter((element) => element.name !== name)
      }
      return newState
    }
    case constants.RENAME_ELEMENT_IN_STORE: {
      const rename = action.payload
      if (!rename) return state
      const newState: ReactGeoGebraState = {
        ...state,
        elements: state.elements.map((element) => {
          return {
            ...element,
            name:
              element.name === rename.oldName ? rename.newName : element.name
          }
        })
      }
      return newState
    }
    case constants.UPDATE_ELEMENT_IN_STORE: {
      const updatedElement = action.payload
      if (!updatedElement) return state
      const newState: ReactGeoGebraState = {
        ...state,
        elements: state.elements.map((element) => {
          return element.name === updatedElement.name ? updatedElement : element
        })
      }
      return newState
    }
    case constants.ADD_NAME_TO_SELECTED_ELEMENTS: {
      const name = action.payload
      if (!name) return state
      if (state.selectedElementNames.find((selEl) => selEl === name))
        return state
      const newState: ReactGeoGebraState = {
        ...state,
        selectedElementNames: state.selectedElementNames
          ? state.selectedElementNames.concat(name)
          : [name]
      }
      return newState
    }
    case constants.REMOVE_NAME_FROM_SELECTED_ELEMENTS: {
      const newState: ReactGeoGebraState = {
        ...state,
        selectedElementNames: []
      }
      return newState
    }
    case constants.ON_APPLET_LOADED:
    default:
      return state
  }
}

export default reactGeogebraReducer
