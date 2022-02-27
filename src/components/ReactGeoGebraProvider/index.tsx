import React, { useMemo } from 'react'
import { Provider } from 'react-redux'

const initialState = {}
const configureStore = (prop: any) => {
  return prop
}

interface ProviderProps {}

const ReactGeoGebraProvider: React.FC<ProviderProps> = ({ children }) => {
  const store = useMemo(() => {
    return configureStore(initialState)
  }, [])

  return <Provider store={store}>{children}</Provider>
}

ReactGeoGebraProvider.displayName = 'ReactGeoGebraProvider'

export default ReactGeoGebraProvider
