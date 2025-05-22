import {Keyframe} from 'react-native-reanimated'

export const keyframes = {
  fadeOutSize: new Keyframe({
    0: {
      opacity: 1,
      transform: [
        {
          scaleX: 1
        },
        {
          scaleY: 1
        }
      ]
    },
    70: {
      opacity: 0,
      transform: [
        {
          scaleX: 0
        },
        {
          scaleY: 0
        }
      ]
    }
  })
}
