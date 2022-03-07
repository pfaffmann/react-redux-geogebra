import { AnyAction, Store } from 'redux'
import { getElementFromGeoGebraApp } from '.'
import * as actions from '../../store/actions'

export const addElementListener = (app: any, store: Store<any, AnyAction>) => {
  if (!app) return
  app.registerAddListener((objName: string) => {
    const element = getElementFromGeoGebraApp(app, objName)
    //actions.addElementToStore(element)
    store.dispatch(actions.addElementToStore(element))
  })
}
