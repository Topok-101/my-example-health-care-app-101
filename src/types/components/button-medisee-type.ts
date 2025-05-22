import {ImageSourcePropType, TouchableOpacityProps} from 'react-native'
import {GenericTouchableProps} from 'react-native-gesture-handler/lib/typescript/components/touchables/GenericTouchable'

export interface AnimetedInterpolateIconLoading {
  isLoading?: boolean
}

type GHTouchableOpacityProps = {
  useNativeAnimations?: boolean
}
type IVariantType = 'primaly' | 'danger'
type IButtonSizeType = 'small' | 'medium' | 'large'
export type ButtonBaseProps = {
  width?: number
  isStrechtWidth?: boolean
  type?: 'primary' | 'outline'
  variant?: IVariantType
  size?: IButtonSizeType
  title?: string
  IconStart?: ImageSourcePropType
  isLoading?: boolean
  fontSize?: number
  textOutlineColor?: string
} & TouchableOpacityProps &
  GenericTouchableProps &
  GHTouchableOpacityProps
