import {ViewStyle} from 'react-native'

export type pingType = {
  dotStyle?: ViewStyle
  effectContainer?: ViewStyle
  isPing?: boolean
} & Pick<
  pingEffectType,
  'delay' | 'effectStyle' | 'duration' | 'active' | 'input' | 'output'
>

export type pingEffectType = {
  delay?: number
  effectStyle?: ViewStyle
  duration?: number
  active?: boolean
  input?: readonly number[]
  output?: readonly number[]
}
