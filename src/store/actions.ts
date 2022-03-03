import { createAction } from './utils'
import { Element, OnAppletLoadedFunc } from '../types'
import * as constants from './constants'

export const addElementToStore = (element: Element) =>
  createAction(constants.ADD_ELEMENT_TO_STORE, element)

export const onAppletLoaded = (onLoaded: OnAppletLoadedFunc) =>
  createAction(constants.ON_APPLET_LOADED, { onLoaded })

export type ReactGeoGebraAction = ReturnType<
  typeof onAppletLoaded | typeof addElementToStore
>
