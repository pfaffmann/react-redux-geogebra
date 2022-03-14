import { createAction } from './utils'
import {
  Element,
  OnAppletLoadedFunc,
  Rename,
  Perspective,
  Mouse,
  EuclidianView,
  EuclidianView3D,
  AlgebraView,
  ProbabilityCalculator,
  SpreadsheetView,
  MetaInformation
} from '../types'
import * as constants from './constants'

/*   SNIPPET rea   */
export const addElementToStore = (element: Element) =>
  createAction(constants.ADD_ELEMENT_TO_STORE, element)

export const removeElementFromStore = (name: string) =>
  createAction(constants.REMOVE_ELEMENT_FROM_STORE, name)

export const renameElementInStore = (rename: Rename) =>
  createAction(constants.RENAME_ELEMENT_IN_STORE, rename)

export const updateElementInStore = (element?: Element) =>
  createAction(constants.UPDATE_ELEMENT_IN_STORE, element)

export const onAppletLoaded = (onLoaded: OnAppletLoadedFunc) =>
  createAction(constants.ON_APPLET_LOADED, { onLoaded })

export const addNameToSelctedElements = (name?: string) =>
  createAction(constants.ADD_NAME_TO_SELECTED_ELEMENTS, name)
export const deselectElements = () =>
  createAction(constants.REMOVE_NAME_FROM_SELECTED_ELEMENTS)

export const removeElementsAtCancel = (names: Array<string>) =>
  createAction(constants.REMOVE_ELEMENTS_AT_CANCEL, names)

export const setModeInStore = (mode: number) =>
  createAction(constants.SET_MODE_IN_STORE, mode)
export const setPerspectiveInStore = (perspective: Perspective) =>
  createAction(constants.SET_PERSPECTIVE_IN_STORE, perspective)

export const setMouseDowninStore = (mouse: Mouse) =>
  createAction(constants.SET_MOUSEDOWN_IN_STORE, mouse)

export const setEuclidianViewsInStore = (
  euclidianViews: Array<EuclidianView>
) => createAction(constants.SET_EUCLIDIANVIEWS_IN_STORE, euclidianViews)

export const setEuclidianView3DInStore = (euclidianView3D: EuclidianView3D) =>
  createAction(constants.SET_EUCLIDIANVIEW3D_IN_STORE, euclidianView3D)

export const setAlgebraViewInStore = (algebraView: AlgebraView) =>
  createAction(constants.SET_ALGEBRAVIEW_IN_STORE, algebraView)

export const setSpreadsheetViewInStore = (spreadsheetView: SpreadsheetView) =>
  createAction(constants.SET_SPREADSHEETVIEW_IN_STORE, spreadsheetView)
export const setProbabilityCalculatorInStore = (
  probabilityCalculator: ProbabilityCalculator
) =>
  createAction(
    constants.SET_PROBABILITYCALCULATOR_IN_STORE,
    probabilityCalculator
  )

export const setMetainformationInStore = (metainformation: MetaInformation) =>
  createAction(constants.SET_METAINFORMATION_IN_STORE, metainformation)

export type ReactGeoGebraAction = ReturnType<
  | typeof onAppletLoaded
  | typeof addElementToStore
  | typeof removeElementFromStore
  | typeof renameElementInStore
  | typeof updateElementInStore
  | typeof addNameToSelctedElements
  | typeof deselectElements
  | typeof removeElementsAtCancel
  | typeof setModeInStore
  | typeof setPerspectiveInStore
  | typeof setMouseDowninStore
  | typeof setEuclidianViewsInStore
  | typeof setEuclidianView3DInStore
  | typeof setAlgebraViewInStore
  | typeof setProbabilityCalculatorInStore
  | typeof setSpreadsheetViewInStore
  | typeof setMetainformationInStore
>
