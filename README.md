# react-redux-geogebra

Hi Everyone. Welcome to my second published package for [react.js](https://reactjs.org/).
I'm going to show you an easy way to embed [GeoGebra](https://www.geogebra.org/) Maths App to your React project.<br />
**This is not an official GeoGebra-project.**

> Made with create-react-library

[![NPM](https://nodei.co/npm/react-redux-geogebra.png?compact=true)](https://nodei.co/npm/react-redux-geogebra/)

[![NPM](https://img.shields.io/npm/v/react-redux-geogebra.svg)](https://www.npmjs.com/package/react-redux-geogebra) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Demo

Try the demo: https://saunaaa.github.io/react-redux-geogebra

## Install

```bash
npm install --save redux-geogebra
```

or

```bash
yarn add redux-geogebra
```

## Usage

### GeoGebra Component

```tsx
import React from 'react'

import { ReactGeoGebra } from 'react-redux-geogebra'

const App = () => {
  return (
    <ReactGeoGebra
      width='800'
      height='600'
      showMenuBar
      showToolBar
      showAlgebraInput
    />
  )
}
```

### Provider

To use the provided hooks wrap the component in the ReactGeoGebraProvider Component

```tsx
import { ReactGeoGebraProvider } from 'react-redux-geogebra'

ReactDOM.render(
  <ReactGeoGebraProvider>
    <App />
  </ReactGeoGebraProvider>,
  document.getElementById('root')
)
```

### Hooks

```tsx
import {
  useStoreState,
  useStoreActions,
  useTypedSelector,
  useDispatch
} from 'react-redux-geogebra'
```

## Props and Parameters

### Default Props

```tsx
ReactGeoGebra.defaultProps = {
  appName: 'classic',
  width: 800,
  height: 600,
  showToolBar: true,
  showAlgebraInput: true,
  showMenuBar: true
}
```

### GeoGebra Props

A list of the GeoGebra props is available at the [GeoGebra-website](https://wiki.geogebra.org/en/Reference:GeoGebra_App_Parameters).

## GeoGebra App API

To interact with the embedded GeoGebra app you can use the [GeoGebra-API](https://wiki.geogebra.org/en/Reference:GeoGebra_Apps_API).

## License

Check out the GeoGebra license agreement on their webpage. <br>
https://www.geogebra.org/license

MIT © [saunAAA](https://github.com/saunAAA)

## Support Me?

just buy me a coffee ☕️ <br>
<a href="https://www.buymeacoffee.com/saunaaa" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" ></a>
