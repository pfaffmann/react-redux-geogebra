import { AnyAction, Store } from 'redux'

import { ClientObj, ReactGeoGebraState, ViewChanged2D } from '../../types'
import * as actions from '../../store/actions'
import { getElementFromGeoGebraApp } from '.'
import { throttle } from 'throttle-debounce'
import { perspectiveXML2JSON } from '../perspectiveXML2Json'

export const clientEventListener = (app: any, store: Store<any, AnyAction>) => {
  if (!app) return
  const removeElementsAtCancelFunc = () => {
    const names = app.getAllObjectNames()
    const state: ReactGeoGebraState = store.getState()
    if (names.length === state.elements.length) return
    store.dispatch(actions.removeElementsAtCancel(names))
  }

  const throttledClientListenerFunc = throttle(
    250,
    false,
    (clientObj: ClientObj) => {
      console.log(clientObj)
      switch (clientObj.type) {
        case 'addMacro':
          break
        case 'addPolygon':
          //addPolygon undefined undefined
          break
        case 'addPolygonComplete':
          //addPolygonComplete name name

          break
        case 'algebraPanelSelected':
          break
        case 'deleteGeos':
          break
        case 'deselect':
          //deselect undefined undefined
          removeElementsAtCancelFunc()
          store.dispatch(actions.deselectElements())
          break
        case 'dragEnd':
          break
        case 'dropdownClosed':
          break
        case 'dropdownItemFocused':
          break
        case 'dropdownOpened':
          break
        case 'editorKeyTyped':
          break
        case 'editorStart':
          //is called after Loading the Applet
          break
        case 'editorStop':
          break
        case 'export':
          break
        case 'mouseDown':
          break
        case 'movedGeos':
          break
        case 'movingGeos':
          break
        case 'openDialog':
          break
        case 'openMenu':
          break
        case 'pasteElms':
          break
        case 'pasteElmsComplete':
          break

        case 'redo':
          break
        case 'relationTool':
          break
        case 'removeMacro':
          break
        case 'renameComplete':
          break
        case 'renameMacro':
          break
        case 'select':
          store.dispatch(actions.addNameToSelctedElements(clientObj.target))
          break
        case 'setMode':
          store.dispatch(actions.setModeInStore(Number(clientObj.argument)))
          removeElementsAtCancelFunc()
          break
        case 'showNavigationBar':
          break
        case 'showStyleBar':
          //showStyleBar undefined [true,1] | [false,1] 1-> Graphics 1, 2->Algebra, 4->Spreadsheet, 8->CAS, 16->Graphics 2, 512->Graphics3D
          break
        case 'sidePanelClosed':
          break
        case 'sidePanelOpened':
          break
        case 'tablePanelSelected':
          break
        case 'toolsPanelSelected':
          break
        case 'undo':
          break
        case 'updateStyle':
          const element = getElementFromGeoGebraApp(app, clientObj.target)
          store.dispatch(actions.updateElementInStore(element))
          break
        case 'perspectiveChange':

        case 'viewChanged2D':
          store.dispatch(
            actions.setPerspectiveInStore(
              perspectiveXML2JSON(app.getPerspectiveXML())
            )
          )
          const view: ViewChanged2D = {
            viewNo: clientObj.viewNo,
            xZero: clientObj.xZero,
            scale: clientObj.scale,
            yZero: clientObj.yZero,
            yscale: clientObj.yscale
          }
          store.dispatch(actions.setView2DinStore(view))

          break
        case 'viewChanged3D':
          break

        default:
          break
      }
    }
  )

  app.registerClientListener(throttledClientListenerFunc)
}
