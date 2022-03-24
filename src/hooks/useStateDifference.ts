import { useEffect, useState } from 'react'
import { useStoreState } from '../store/hooks'
import { usePrevious } from './usePrevious'

import { diff, IChange } from 'json-diff-ts'

export const useStateDifference = () => {
  const [difference, setDifference] = useState<IChange[]>([])
  const state = useStoreState((state) => state)
  useEffect(() => {
    setDifference(diff(previousState, state, {}))
  }, [state])

  const previousState = usePrevious(state)
  return difference
}
