import { AnyAction, Store } from 'redux'
import {
  algebraViewXML2Json,
  euclidianView3DXML2Json,
  euclidianViewXML2Json,
  perspectiveXML2Json,
  probabilityCalculatorXML2Json,
  spreadsheetViewXML2Json
} from '../XML2Json'
import * as actions from '../../store/actions'
import { getMetaInformationFromState } from '../metaInformation'

export const initializeStore = (app: any, store: Store<any, AnyAction>) => {
  const xml = app.getXML()
  const perspectiveXML = app.getPerspectiveXML()
  setPerspective(perspectiveXML, store)
  setEuclidianViews(xml, store)
  setAlgebraView(xml, store)
  setPropabilityCalculator(xml, store)
  setSpreadsheetView(xml, store)
  setMetaInformation(store)
}

export const xml2Store = (
  xml: string,
  perspectiveXML: string,
  store: Store<any, AnyAction>
) => {
  setPerspective(perspectiveXML, store)
  setEuclidianViews(xml, store)
  setAlgebraView(xml, store)
  setPropabilityCalculator(xml, store)
  setSpreadsheetView(xml, store)
  setMetaInformation(store)
}

export const setPerspective = (
  perspectiveXML: string,
  store: Store<any, AnyAction>
) => {
  store.dispatch(
    actions.setPerspectiveInStore(perspectiveXML2Json(perspectiveXML))
  )
}

export const setEuclidianViews = (
  xml: string,
  store: Store<any, AnyAction>
) => {
  store.dispatch(actions.setEuclidianViewsInStore(euclidianViewXML2Json(xml)))
  store.dispatch(
    actions.setEuclidianView3DInStore(euclidianView3DXML2Json(xml))
  )
}

export const setPropabilityCalculator = (
  xml: string,
  store: Store<any, AnyAction>
) => {
  store.dispatch(
    actions.setProbabilityCalculatorInStore(probabilityCalculatorXML2Json(xml))
  )
}

export const setAlgebraView = (xml: string, store: Store<any, AnyAction>) => {
  store.dispatch(actions.setAlgebraViewInStore(algebraViewXML2Json(xml)))
}
export const setSpreadsheetView = (
  xml: string,
  store: Store<any, AnyAction>
) => {
  store.dispatch(
    actions.setSpreadsheetViewInStore(spreadsheetViewXML2Json(xml))
  )
}

export const setMetaInformation = (store: Store<any, AnyAction>) => {
  const metaInformation = getMetaInformationFromState(store.getState())
  if (!metaInformation) return
  store.dispatch(actions.setMetainformationInStore(metaInformation))
}
