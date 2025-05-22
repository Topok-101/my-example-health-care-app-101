import {ImageSourcePropType, ViewStyle} from 'react-native'
import {Source} from 'react-native-fast-image'
export interface IConSize {
  width: number
  hight: number
  image: ImageSourcePropType
  color?: string
}

export interface IConBadge {
  size?: number
  image: Source
  isBadge?: boolean
  color?: string
  containerStyle?: ViewStyle
}

export interface IAvatar {
  sizeImage?: number
  sizeActiveIn?: number
  sizeActiveOut?: number
  isActive?: boolean
  image: Source
  containerStyle?: ViewStyle
}