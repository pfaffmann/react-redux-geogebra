import { AnyAction, Store } from 'redux'
import {
  euclidianView3DXML2JSON,
  euclidianViewXML2JSON,
  perspectiveXML2JSON
} from '../XML2Json'
import * as actions from '../../store/actions'

export const setInitalPerspective = (
  app: any,
  store: Store<any, AnyAction>
) => {
  store.dispatch(
    actions.setPerspectiveInStore(perspectiveXML2JSON(app.getPerspectiveXML()))
  )
}

export const setInitialEuclidianViews = (
  app: any,
  store: Store<any, AnyAction>
) => {
  store.dispatch(
    actions.setEuclidianViewsInStore(euclidianViewXML2JSON(app.getXML()))
  )
  store.dispatch(
    actions.setEuclidianView3DInStore(euclidianView3DXML2JSON(app.getXML()))
  )
}
