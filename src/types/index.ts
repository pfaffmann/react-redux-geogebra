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
  mode: number
  isOnTheFlyPointCreationActive?: boolean
  isGridVisible?: GridVisibility
  editorState: EditorState
  perspective: any

  onAppletLoaded?: OnAppletLoadedFunc
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
  reloadOnPropChange?: boolean
  onReady?: () => void
  LoadComponent?: React.FC
}

export type GeoGebraParameters = AppParameters & CustomAppParameters
