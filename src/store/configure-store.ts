import { createStore, Store } from 'redux'
import { ReactGeoGebraAction } from './actions'
import { ReactGeoGebraState } from '../types'
import reactGeogebraReducer from './reducer'

export default function configureStore(
  preloadedState: ReactGeoGebraState
): Store<ReactGeoGebraState, ReactGeoGebraAction> {
  const store = createStore(reactGeogebraReducer, preloadedState)
  return store
}
