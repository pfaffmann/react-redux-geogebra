import { createAction } from './utils'
import {
  Element,
  OnAppletLoadedFunc,
  Rename,
  Perspective,
  ViewChanged2D,
  ViewChanged3D,
  Mouse
} from '../types'
import * as constants from './constants'

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

export const setView2DinStore = (view: ViewChanged2D) =>
  createAction(constants.SET_VIEW_2D_IN_STORE, view)
export const setView3DinStore = (view: ViewChanged3D) =>
  createAction(constants.SET_VIEW_3D_IN_STORE, view)
export const setMouseDowninStore = (mouse: Mouse) =>
  createAction(constants.SET_MOUSEDOWN_IN_STORE, mouse)

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
  | typeof setView2DinStore
  | typeof setView3DinStore
  | typeof setMouseDowninStore
>
