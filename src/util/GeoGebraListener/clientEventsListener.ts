import { AnyAction, Store } from 'redux'

import { ReactGeoGebraState, Mouse } from '../../types'
import * as actions from '../../store/actions'
import { getElementFromGeoGebraApp } from '.'
import { throttle } from 'throttle-debounce'
import { setMetaInformation, xml2Store } from '../GeoGebraStoreManagement'

export const clientEventListener = (app: any, store: Store<any, AnyAction>) => {
  if (!app) return
  const removeElementsAtCancelFunc = () => {
    const names = app.getAllObjectNames()
    const state: ReactGeoGebraState = store.getState()
    if (names.length === state.elements.length) return
    store.dispatch(actions.removeElementsAtCancel(names))
  }

  const throttledClientListenerFunc = throttle(250, false, (clientObj) => {
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
        const mouse: Mouse = {
          x: clientObj.x,
          y: clientObj.y,
          z: clientObj.z || 0,
          viewNo: clientObj.viewNo === 2 ? 16 : clientObj.viewNo
        }
        store.dispatch(actions.setMouseDowninStore(mouse))
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
        setMetaInformation(store)
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
      case 'showStyleBar':
      //showStyleBar undefined [true,1] | [false,1] 1-> Graphics 1, 2->Algebra, 4->Spreadsheet, 8->CAS, 16->Graphics 2, 512->Graphics3D
      case 'showNavigationBar':
      case 'perspectiveChange':
      case 'viewChanged3D':
      case 'viewChanged2D':
        const xml = app.getXML()
        const perspectiveXML = app.getPerspectiveXML()
        xml2Store(xml, perspectiveXML, store)
        break

      default:
        break
    }
  })

  app.registerClientListener(throttledClientListenerFunc)
}
