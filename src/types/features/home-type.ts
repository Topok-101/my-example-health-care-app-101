import {FlatList, ViewStyle} from 'react-native'
import {Source} from 'react-native-fast-image'
import Animated, {SharedValue} from 'react-native-reanimated'
import { Week } from 'types/services/clinic'

import {Faker} from 'types/services/test-example-type'

export interface IItemBtn {
  text: string
  type: 'primary' | 'outline'
  style: ViewStyle
  width: number
}

export interface IItem {
  text: string
  image: Source
  id: number
}

export interface ICardPackageClinic {
  Image?: Source | string
  title?: string
  Descriptions?: string
  isReadMore?: boolean
}

export type IClinicMain = {
  translationY: SharedValue<number>
  data: Faker[]
  isRefresh?: boolean
}

export type IClinicMainBanner = {
  translationY: SharedValue<number>
  img?: string
}

export interface IonScrolling {
  translationY: SharedValue<number>
  top: number
  ref: React.RefObject<FlatList>
  alreadyRenderT1: boolean
  alreadyRenderT2: boolean
  refT1: React.RefObject<Animated.View>
  refT2: React.RefObject<Animated.View>
}

export interface ITopClinic {
  description: string
  address: string
  distance: string
  time: Week
  status: boolean
}
