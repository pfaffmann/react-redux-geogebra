import { createAction } from './utils'
import { Element, OnAppletLoadedFunc, Rename } from '../types'
import * as constants from './constants'

export const addElementToStore = (element: Element) =>
  createAction(constants.ADD_ELEMENT_TO_STORE, element)

export const removeElementFromStore = (name: string) =>
  createAction(constants.REMOVE_ELEMENT_FROM_STORE, name)

export const renameElementInStore = (rename: Rename) =>
  createAction(constants.RENAME_ELEMENT_IN_STORE, rename)

export const updateElementInStore = (element: Element) =>
  createAction(constants.UPDATE_ELEMENT_IN_STORE, element)

export const onAppletLoaded = (onLoaded: OnAppletLoadedFunc) =>
  createAction(constants.ON_APPLET_LOADED, { onLoaded })

export const addNameToSelctedElements = (name: string) =>
  createAction(constants.ADD_NAME_TO_SELECTED_ELEMENTS, name)
export const deselectElements = () =>
  createAction(constants.REMOVE_NAME_FROM_SELECTED_ELEMENTS)

export type ReactGeoGebraAction = ReturnType<
  | typeof onAppletLoaded
  | typeof addElementToStore
  | typeof removeElementFromStore
  | typeof renameElementInStore
  | typeof updateElementInStore
  | typeof addNameToSelctedElements
  | typeof deselectElements
>
