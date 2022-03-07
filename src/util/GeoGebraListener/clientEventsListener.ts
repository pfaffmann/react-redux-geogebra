import { AnyAction, Store } from 'redux'
import { ClientObj } from '../../types'
import * as actions from '../../store/actions'
import { getElementFromGeoGebraApp } from '.'
export const clientEventListener = (app: any, store: Store<any, AnyAction>) => {
  if (!app) return
  app.registerClientListener((clientObj: ClientObj) => {
    const { type, target } = clientObj
    switch (type) {
      case 'addMacro':
        break
      case 'addPolygon':
        break
      case 'addPolygonComplete':
        break
      case 'algebraPanelSelected':
        break
      case 'deleteGeos':
        break
      case 'deselect':
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
      case 'perspectiveChange':
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
        store.dispatch(actions.addNameToSelctedElements(target))
        break
      case 'setMode':
        break
      case 'showNavigationBar':
        break
      case 'showStyleBar':
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
        const element = getElementFromGeoGebraApp(app, target)
        store.dispatch(actions.updateElementInStore(element))
        break
      case 'viewChanged2D':
        break
      case 'viewChanged3D':
        break

      default:
        break
    }
  })
}
