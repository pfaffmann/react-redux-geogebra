import React from 'react'

declare global {
  interface Window {
    GGBApplet: any
  }
}
export type AppletId = string

export interface ReactGeoGebra {
  id: AppletId
  params: AppParameters
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
