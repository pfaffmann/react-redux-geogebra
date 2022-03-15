import { Location, View } from '../types'
import { locationNamesMap } from './location-constants'

export const getLocation = (view: View): Location => {
  const locationArray =
    typeof view.location === 'string'
      ? view.location.split(',').map((l) => Number(l))
      : [Number(view.location)]
  const level = locationArray.length
  const locationString = locationArray
    .reverse()
    .map((l) => locationNamesMap.get(l) || '')
    .join(' in ')
  const location: Location = {
    level,
    position: locationNamesMap.get(locationArray[0]) || '',
    location: locationString
  }
  return location
}
