import { Store } from 'redux'
import { ReactGeoGebraState } from '../types'

import configureStore from './configure-store'

export const initialState: ReactGeoGebraState = {
  elements: [],
  selectedElementNames: []
}

const store: Store = configureStore(initialState)

export type ReactGeoGebraDispatch = typeof store.dispatch
export default store
