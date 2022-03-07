import * as actions from '../../store/actions'
import { getElementFromGeoGebraApp } from '.'
import { throttle } from 'throttle-debounce'
import { AnyAction, Store } from 'redux'

export const updateElementListener = (
  app: any,
  store: Store<any, AnyAction>
) => {
  if (!app) return

  const throttledUpdateFunc = throttle(250, false, (objName: string) => {
    const element = getElementFromGeoGebraApp(app, objName)
    store.dispatch(actions.updateElementInStore(element))
  })

  app.registerUpdateListener(throttledUpdateFunc)
}
