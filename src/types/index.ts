import React from 'react'

declare global {
  interface Window {
    GGBApplet: any
  }
}

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
  mouseDown?: Mouse
  euclidianViews?: Array<EuclidianView>
  euclidianView3D?: EuclidianView3D
  algebraView?: AlgebraView
  spreadsheetView?: SpreadsheetView
  probabilityCalculator?: ProbabilityCalculator
  //ADD spreadsheetview, algebraview, ...
  //ADD Humanreadable metainfos
  onAppletLoaded?: OnAppletLoadedFunc
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
  orientation: number //0: waagrecht 1: senkrecht
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

export interface ProbabilityCalculator {
  distribution: Distribution
  interval: Interval
  statisticsCollection: StatisticsCollection
}
interface StatisticsCollection {
  entry: Array<Value<string | number>>
  procedure: string
  mean: number | string
  sd: number | string
  n: number | string
  count: number | string
  mean2: number | string
  sd2: number | string
  n2: number | string
  count2: number | string
  nullHyp: number | string
  level: number | string
  tail: number | string
  active: boolean
  showExpected: boolean
  showDiff: boolean
  showRowPercent: boolean
  showColPercent: boolean
  columns: number
}

interface Interval {
  mode: number
  low: number
  high: number
}

interface Distribution {
  type: number
  isCummulative: boolean
  parameters: string
}

export interface SpreadsheetView {
  size: Size
  prefCellSize: Size
  selection: Selection
}

export interface Selection {
  hScroll: number
  vScroll: number
  column: number
  row: number
}

export interface AlgebraView {
  mode: Value<number>
  collapsed?: Value<string>
}

export type Value<T> = {
  val: T
}

export interface Mouse {
  x: number
  y: number
  z: number
  viewNo: number
}
export interface EuclidianView extends BaseEuclidianView {
  viewNumber: ViewNumber
}

export interface BaseEuclidianView {
  size: Size
  coordSystem: CoordSystem
  evSettings: EvSettings
  bgColor: Color
  axesColor: Color
  gridColor: Color
  lineStyle: LineStyle
  axis: Axes
}

export interface EuclidianView3D extends BaseEuclidianView {
  coordSystem: CoordSystem3D
  plate: Plate
  clipping: Clipping
  projection: Projection
}

export interface Clipping {
  show: boolean
  use: boolean
  size: number
}
export interface Projection {
  type: number
}
export interface Plate {
  show: boolean
}

export interface ViewNumber {
  viewNo: number
}

export interface Size {
  width: number
  height: number
}

export interface CoordSystem {
  xZero: number
  yZero: number
  scale: number
  yscale: number
}

export interface CoordSystem3D extends CoordSystem {
  zZero: number
  xAngle: number
  zAngle: number
}

export interface EvSettings {
  axes: boolean
  grid: boolean
  gridIsBold: boolean
  rightAngleStyle: number
  checkBoxSize: number
  gridType: number
}

export type Color = Record<'r' | 'g' | 'b', number>

export interface LineStyle {
  axes: number
  grid: number
}

export interface Axis {
  id: number
  show: boolean
  label: string
  unitLabel: string
  tickStyle: number
  showNumbers: boolean
}

export type Axes = Array<Axis>
