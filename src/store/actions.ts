import { createAction } from './utils'

import * as constants from './constants'

export const setSelectedElements = (elements: any) =>
  createAction(constants.SET_SELECTED_ELEMENTS, elements)
export const resetSelectedElements = (elements: any) =>
  createAction(constants.RESET_SELECTED_ELEMENTS, elements)

export type ReactGeoGebraAction = ReturnType<
  typeof setSelectedElements | typeof resetSelectedElements
>
