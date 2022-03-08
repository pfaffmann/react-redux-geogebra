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
  perspective: undefined,
  editorState: { content: '', caret: [0] },
  mouseDown: undefined,
  views: []
}

const store: Store = configureStore(initialState)

export type ReactGeoGebraDispatch = typeof store.dispatch
export default store
