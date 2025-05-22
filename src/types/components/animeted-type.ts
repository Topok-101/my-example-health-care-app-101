import {
  BaseAnimationBuilder,
  EntryExitAnimationFunction,
  Keyframe
} from 'react-native-reanimated'

export type IEntering =
  | BaseAnimationBuilder
  | typeof BaseAnimationBuilder
  | EntryExitAnimationFunction
  | Keyframe
  | undefined

export type ILoadingProps = {
  loading?: boolean
}
