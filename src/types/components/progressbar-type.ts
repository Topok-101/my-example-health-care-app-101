import {TextStyle} from 'react-native'

export type ProgressbarProps = {
  widthPercentage: number
  textLeft?: string
  textRight?: string
  isRange?: boolean
  progressRadius?: number
  progressBackRadius?: number
  progressBackColor?: string
  height?: number
  colorStart: string | Float32Array | number
  colorStop: string | Float32Array | number
  textLeftStyle?: TextStyle | undefined
  textRightStyle?: TextStyle | undefined
}
