import { Location } from '../types'
import { locationNamesMap } from './location-constants'
const state = {
  persective: {
    views: [
      {
        id: 1,
        visible: true,
        inframe: false,
        stylebar: false,
        location: '1,0,3',
        size: 325,
        window: '100,100,600,400'
      },
      {
        id: 16,
        visible: true,
        inframe: false,
        stylebar: false,
        location: '1,0,1',
        size: 479,
        window: '50,50,500,500'
      },
      {
        id: 512,
        toolbar:
          '0 | 1 501 5 19 , 67 | 2 15 45 18 , 7 37 | 514 3 9 , 13 44 , 47 | 16 51 | 551 550 11 ,  20 22 21 23 , 55 56 57 , 12 | 69 | 510 511 , 512 513 | 533 531 , 534 532 , 522 523 , 537 536 , 535 , 538 | 521 520 | 36 , 38 49 560 | 571 30 29 570 31 33 | 17 | 540 40 41 42 , 27 28 35 , 6 , 502',
        visible: true,
        inframe: false,
        stylebar: false,
        location: '1,2',
        size: 211,
        window: '100,100,600,400'
      },
      {
        id: 2,
        visible: true,
        inframe: false,
        stylebar: false,
        location: 3,
        size: 380,
        tab: 'ALGEBRA',
        window: '100,100,600,400'
      }
    ]
  }
}

const locas = state.persective.views.map((v) => v.location)
const locationsArrays = locas.map((location) =>
  typeof location === 'string' ? location.split(',') : [location]
)

const maxLevel = Math.max(
  ...locationsArrays.map((locations) => locations.length)
)
console.log(maxLevel)

const locations: Array<Location> = [
  {
    locationNo: 3,
    location: locationNamesMap.get(3) || ''
  }
]
