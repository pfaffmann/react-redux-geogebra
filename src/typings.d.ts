declare module '*.css' {
  const content: { [className: string]: string }
  export default content
}

interface SvgrComponent
  extends React.FunctionComponent<React.SVGAttributes<SVGElement>> {}

declare module '*.svg' {
  const svgUrl: string
  const svgComponent: SvgrComponent
  export default svgUrl
  export { svgComponent as ReactComponent }
}

declare var __REACT_GEOGEBRA_VERSION__: string
declare var __ENV__: string

declare module 'is-deep-subset' {
  const isDeepSubset: (superset: any, subset: any) => boolean
  export default isDeepSubset
}
declare module 'is-subset' {
  const isSubset: (superset: any, subset: any) => boolean
  export default isSubset
}
