import {
  bindActionCreators,
  Store,
  ActionCreator,
  ActionCreatorsMapObject
} from 'redux'
import {
  useStore as useStoreRedux,
  useSelector,
  useDispatch as reduxUseDispatch,
  TypedUseSelectorHook
} from 'react-redux'
import { useMemo } from 'react'

import { ReactGeoGebraDispatch } from '.'
import * as actions from './actions'
import { ReactGeoGebraAction } from './actions'
import { ReactGeoGebraState } from '../types'

export const useTypedSelector: TypedUseSelectorHook<ReactGeoGebraState> =
  useSelector
export type ActionCreatorSelector<Action> = (
  acts: typeof actions
) => ActionCreator<Action>

export type ActionMapObjectSelector<Action> = (
  acts: typeof actions
) => ActionCreatorsMapObject<Action>

export type ActionSelector<Action> = (
  acts: typeof actions
) => ActionCreatorsMapObject<Action> | ActionCreator<Action>

export function useStoreActions<Action extends ReactGeoGebraAction>(
  actionSelector: ActionCreatorSelector<Action>
): ActionCreator<Action>

export function useStoreActions<Action extends ReactGeoGebraAction>(
  actionSelector: ActionMapObjectSelector<Action>
): ActionCreatorsMapObject<Action>

export function useStoreActions<Action extends ReactGeoGebraAction>(
  actionSelector: ActionSelector<Action>
) {
  const dispatch: ReactGeoGebraDispatch = reduxUseDispatch()
  const currAction = actionSelector(actions)

  const action = useMemo(() => {
    // this looks weird but required if both ActionSelector and ActionMapObjectSelector are supported
    return typeof currAction === 'function'
      ? bindActionCreators(currAction, dispatch)
      : bindActionCreators(currAction, dispatch)
  }, [dispatch, currAction])

  return action
}

export const useStoreState = useTypedSelector
export const useStore = (): Store<ReactGeoGebraState, ReactGeoGebraAction> => {
  const store = useStoreRedux<ReactGeoGebraState, ReactGeoGebraAction>()
  return store
}
export const useDispatch: ReactGeoGebraDispatch = reduxUseDispatch
