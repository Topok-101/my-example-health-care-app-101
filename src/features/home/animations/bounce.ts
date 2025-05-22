import {
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withTiming
} from 'react-native-reanimated'

const bounce = () => {
  const offset = useSharedValue(0)
  const animatedBounce = useAnimatedStyle(() => {
    return {
      transform: [{translateY: offset.value}]
    }
  })
  const onBounce = () => {
    offset.value = withSequence(
      withTiming(-5, {duration: 200}),
      withTiming(0, {duration: 200})
    )
  }
  return {animatedBounce, onBounce}
}
export default bounce
