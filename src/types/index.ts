import React from 'react'

declare global {
  interface Window {
    GGBApplet: any
  }
}
export type AppletId = string
type LabelStyle = 0 | 1 | 2 | 3
type PointSize = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9

export interface Element {
  name: string
  coordinates?: XYPosition | XYZPosition
  value?: number
  listValue?: number
  color?: string
  isVisible?: boolean
  valueString?: string
  definitionString?: string
  commandString?: string
  LaTeXString?: string
  LaTeXBase64Definition?: string
  LaTeXBase64Value?: string
  objectType?: string
  isExisting?: boolean
  isDefined?: boolean
  objectNumber?: number
  CASobjectNumber?: number
  layer?: string
  lineStyle?: number
  lineThickness?: number
  pointStyle?: number
  pointSize?: PointSize
  filling?: number
  caption?: string
  labelStyle?: LabelStyle
  isLabelVisible?: boolean
  isIndependent?: boolean
  isMoveable?: boolean
}

export type Elements = Array<Element>
interface GridVisibility {
  viewNumber?: number
  isVisible: boolean
}
type EditorState = {
  content: any
  caret?: any
  eval?: any
  latex?: any
}

export type OnAppletLoadedFunc = () => void

export interface ReactGeoGebraState {
  id: AppletId
  params: Partial<GeoGebraParameters>
  elements: Elements
  selectedElementNames: Array<string>
  mode: number
  isOnTheFlyPointCreationActive?: boolean
  isGridVisible?: GridVisibility
  editorState: EditorState
  perspective?: Perspective
  views: Array<ViewChanged2D | ViewChanged3D>
  mouseDown?: Mouse

  onAppletLoaded?: OnAppletLoadedFunc
}

export interface Perspective {
  id: string
  panes: Panes
  views: Views
  toolbar: Toolbar
  input: Input
  dockBar: DockBar
}
export interface Toolbar {
  show: boolean
  items: string
  position: number
  help: boolean
}

export interface Input {
  show: boolean
  cmd: boolean
  top: string
}

export interface DockBar {
  show: boolean
  east: boolean
}

export type Views = Array<View>
export interface View {
  id: number
  toolbar?: string
  visible: boolean
  inframe: boolean
  stylebar: boolean
  tab?: string
  location: Array<number> | number | string
  size: number
  window: string
}

export type Panes = Array<Pane>

export interface Pane {
  location: string
  divider: number
  orientation: number
}

export interface Rename {
  oldName: string
  newName: string
}

export interface XYPosition {
  x: number
  y: number
}
export interface XYZPosition {
  x: number
  y: number
  z: number
}

export interface Dimensions {
  width: number
  height: number
}

export interface AppParameters {
  id: string
  appletOnLoad?: () => void
  appName?: string
  width?: number
  height?: number
  material_id?: string
  filename?: string
  ggbBase64?: string
  borderColor?: string
  enableRightClick?: boolean
  enableLabelDrags?: boolean
  enableShiftDragZoom?: boolean
  showZoomButtons?: boolean
  errorDialogsActive?: boolean
  showToolBar?: boolean
  showAlgebraInput?: boolean
  showMenuBar?: boolean
  showToolBarHelp?: boolean
  customToolBar?: string
  showResetIcon?: boolean
  language?: string
  country?: string
  allowStyleBar?: boolean
  useBrowserForJS?: boolean
  showLogging?: boolean
  capturingThreshold?: number
  enableFileFeatures?: boolean
  perspective?: string
  enable3d?: boolean
  enableCAS?: boolean
  algebraInputPosition?: string
  preventFocus?: boolean
  scaleContainerClass?: string
  autoHeight?: boolean
  allowUpscale?: boolean
  playButton?: boolean
  scale?: number
  showAnimationButton?: boolean
  showFullscreenButton?: boolean
  showSuggestionButtons?: boolean
  showStartTooltip?: boolean
  rounding?: string
  buttonShadows?: boolean
  buttonRounding?: number
  buttonBorderColor?: string
  editorBackgroundColor?: string
  editorForegroundColor?: string
  textmode?: boolean
  keyboardType?: string
}

export interface CustomAppParameters {
  debug?: boolean
  onReady?: () => void
  LoadComponent?: React.FC
}

export type GeoGebraParameters = AppParameters & CustomAppParameters

export type ClientObj = (ViewChanged2D & ViewChanged3D & Dropdown & Mouse) & {
  type: string
  target?: string
  argument?: string
}

export interface ViewChanged2D {
  scale: number
  viewNo: number
  xZero: number
  yZero: number
  yscale: number
}

export interface ViewChanged3D {
  scale: number
  viewNo: number
  xAngle: number
  xZero: number
  yZero: number
  yscale: number
  zAngle: number
  zZero: number
  zscale: number
}

interface Dropdown {
  index: number
}

export interface Mouse {
  x: number
  y: number
  viewNo: number
}
