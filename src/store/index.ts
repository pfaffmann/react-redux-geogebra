import { Store } from 'redux'
import { ReactGeoGebraState } from '../types'
import { MODE_MOVE } from '../util/mode-constants'
import configureStore from './configure-store'

const initialId = 'ggbApplet'
export const initialState: ReactGeoGebraState = {
  id: initialId,
  elements: [],
  selectedElementNames: [],
  params: {
    id: initialId,
    width: 800,
    height: 600,
    showAlgebraInput: true,
    showToolBar: true,
    showMenuBar: true
  },
  mode: MODE_MOVE,
  perspective: null,
  editorState: { content: '', caret: [0] }
}

const store: Store = configureStore(initialState)

export type ReactGeoGebraDispatch = typeof store.dispatch
export default store
