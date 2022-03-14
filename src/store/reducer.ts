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
      if (state.elements.map((el) => el.name).includes(geoGebraElement.name))
        return state

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
    case constants.REMOVE_ELEMENTS_AT_CANCEL: {
      const names = action.payload
      if (!names) return state
      const intersectingElements = state.elements.filter((element) =>
        names.includes(element.name)
      )

      const newState: ReactGeoGebraState = {
        ...state,
        elements: intersectingElements
      }
      return newState
    }
    case constants.SET_MODE_IN_STORE: {
      const mode = action.payload

      if (typeof mode === 'undefined') return state
      const newState: ReactGeoGebraState = { ...state, mode }
      return newState
    }
    case constants.SET_PERSPECTIVE_IN_STORE: {
      const perspective = action.payload
      if (!perspective) return state
      const newState: ReactGeoGebraState = { ...state, perspective }
      return newState
    }
    case constants.SET_MOUSEDOWN_IN_STORE: {
      const mouseDown = action.payload
      if (!mouseDown) return state
      return { ...state, mouseDown }
    }
    case constants.SET_EUCLIDIANVIEWS_IN_STORE: {
      const euclidianViews = action.payload
      if (!euclidianViews) return state
      return { ...state, euclidianViews }
    }
    case constants.SET_EUCLIDIANVIEW3D_IN_STORE: {
      const euclidianView3D = action.payload
      if (!euclidianView3D) return state
      return { ...state, euclidianView3D }
    }
    case constants.SET_ALGEBRAVIEW_IN_STORE: {
      const algebraView = action.payload
      if (!algebraView) return state
      return { ...state, algebraView }
    }
    case constants.SET_SPREADSHEETVIEW_IN_STORE: {
      const spreadsheetView = action.payload
      if (!spreadsheetView) return state
      return { ...state, spreadsheetView }
    }
    case constants.SET_PROBABILITYCALCULATOR_IN_STORE: {
      const probabilityCalculator = action.payload
      if (!probabilityCalculator) return state
      return { ...state, probabilityCalculator }
    }
    case constants.SET_METAINFORMATION_IN_STORE: {
      const metaInformation = action.payload
      if (!metaInformation) return state
      return { ...state, metaInformation }
    }
    case constants.ON_APPLET_LOADED:
    default:
      return state
  }
}

export default reactGeogebraReducer
