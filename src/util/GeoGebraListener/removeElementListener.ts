import { AnyAction, Store } from 'redux'
import * as actions from '../../store/actions'

export const removeElementListener = (
  app: any,
  store: Store<any, AnyAction>
) => {
  if (!app) return
  app.registerRemoveListener((objName: string) => {
    store.dispatch(actions.removeElementFromStore(objName))
  })
}
