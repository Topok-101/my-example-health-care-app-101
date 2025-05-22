import {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming
} from 'react-native-reanimated'

const wiggle = (degree: number, count: number) => {
  const rotation = useSharedValue(0)
  const animatedWiggle = useAnimatedStyle(() => {
    return {
      transform: [{rotateZ: `${rotation.value}deg`}]
    }
  })
  const onWiggle = () => {
    rotation.value = withRepeat(withTiming(degree), count, true)
  }
  return {animatedWiggle, onWiggle}
}

export default wiggle
