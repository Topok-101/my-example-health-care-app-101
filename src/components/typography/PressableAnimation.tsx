import React, {Children, FC, cloneElement, isValidElement} from 'react'
import {Pressable, View} from 'react-native'
import {Gesture, GestureDetector} from 'react-native-gesture-handler'
import {GenericTouchableProps} from 'react-native-gesture-handler/lib/typescript/components/touchables/GenericTouchable'
import {useAnimatedStyle, useSharedValue} from 'react-native-reanimated'

const PressableAnimation: FC<GenericTouchableProps> = ({children, onPress}) => {
  const pressed = useSharedValue(false)

  const singleTap = Gesture.Tap()
    .maxDuration(250)
    .onTouchesDown(() => {
      pressed.value = true
    })
    .onTouchesUp(() => {
      pressed.value = false
    })

  const animatedStyleButton = useAnimatedStyle(() => {
    return {
      transform: [{scale: pressed.value ? 1.01 : 1}]
    }
  })
  return (
    <Pressable onPress={onPress}>
      <GestureDetector gesture={Gesture.Exclusive(singleTap)}>
        <View>
          {Children.map(children, child => {
            if (!isValidElement(child)) return child

            return cloneElement(child, {
              ...child.props,
              style: [...child.props.style, animatedStyleButton],
              onPress
            })
          })}
        </View>
      </GestureDetector>
    </Pressable>
  )
}

export default PressableAnimation
