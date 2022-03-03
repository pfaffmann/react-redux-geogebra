import React, { useMemo } from 'react'
import { Provider } from 'react-redux'
import { initialState } from '../../store'
import configureStore from '../../store/configure-store'

export interface ProviderProps {}

const ReactGeoGebraProvider: React.FC<ProviderProps> = ({ children }) => {
  const store = useMemo(() => {
    return configureStore(initialState)
  }, [])

  return <Provider store={store}>{children}</Provider>
}

ReactGeoGebraProvider.displayName = 'ReactGeoGebraProvider'

export default ReactGeoGebraProvider
