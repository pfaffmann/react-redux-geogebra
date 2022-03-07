import { AnyAction, Store } from 'redux'
import * as actions from '../../store/actions'

export const renameElementListener = (
  app: any,
  store: Store<any, AnyAction>
) => {
  if (!app) return
  app.registerRenameListener((oldName: string, newName: string) => {
    store.dispatch(actions.renameElementInStore({ oldName, newName }))
  })
}
