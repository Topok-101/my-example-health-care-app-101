import {ImageSourcePropType, TextInputProps, ViewStyle} from 'react-native'
import {SharedValue} from 'react-native-reanimated'

export type InputValidateProps = {
  isError?: boolean
  isCorrect?: boolean
  enableSecureTextEntry?: boolean
  style?: ViewStyle
}
interface ExtraInputProps extends InputValidateProps {
  iconRight?: ImageSourcePropType
  iconLeft?: ImageSourcePropType
  iconColor?: string
  isLeftEmpty?: boolean
  backgroundColor?: string
  onPressIconRight?: () => void
  iconRightColor?: string 
  iconRightSize?: number
  IsMaxHeight?: number
  fontFamily?: 'jm' | 'IBM'
}

export type InputProps = TextInputProps & ExtraInputProps

export interface AnimetedInterpolateInputAwesomeShake {
  isShake?: boolean
}
export interface AnimetedInterpolateInputAwesome {
  previous: string
  nextTo?: string
  isTint?: boolean
  hasText?: boolean
  isBg?: boolean
}

export interface TextInputAwesomeAnimateProps {
  dependencies: unknown
  valueShereBorder: SharedValue<number>
  valueShereTint: SharedValue<number>
  valueShereRotation: SharedValue<number>
}
