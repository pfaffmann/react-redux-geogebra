import Geogebra from './components/ReactGeoGebra'
import Provider from './components/ReactGeoGebraProvider'
import { isDeepSubset as utilIsDeepSubset } from './util/isDeepSubset'

export const ReactGeoGebraProvider = Provider
export const ReactGeoGebra = Geogebra

export * from './types'
export * from './store/hooks'
export * from './hooks'
export const isDeepSubset = utilIsDeepSubset
