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
      if (!mode) return state
      const newState: ReactGeoGebraState = { ...state, mode }
      return newState
    }
    case constants.SET_PERSPECTIVE_IN_STORE: {
      const perspective = action.payload
      if (!perspective) return state
      const newState: ReactGeoGebraState = { ...state, perspective }
      return newState
    }
    case constants.SET_VIEW_2D_IN_STORE: {
      const view = action.payload
      if (!view) return state

      const ids = state.perspective?.views
        .filter((view) => view.visible)
        .map((view) => (view.id === 16 ? 2 : view.id))
      if (!(ids?.includes(1) || ids?.includes(2)))
        return { ...state, views: [] }

      const tmpState: ReactGeoGebraState = {
        ...state,
        views: !state.views.map((v) => v.viewNo).includes(view.viewNo)
          ? state.views.concat(view)
          : [...state.views.filter((v) => v.viewNo !== view.viewNo), view]
      }

      ////HIER WEITER MACHEN
      const newState: ReactGeoGebraState = {
        ...state,
        views: tmpState.views.filter((v) => ids.includes(v.viewNo))
      }
      return newState
    }

    case constants.ON_APPLET_LOADED:
    default:
      return state
  }
}

export default reactGeogebraReducer
