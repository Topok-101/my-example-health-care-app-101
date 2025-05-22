import {Canvas, Circle, Group} from '@shopify/react-native-skia'
import React, {FC, useEffect} from 'react'
import {TouchableOpacity, View} from 'react-native'
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming
} from 'react-native-reanimated'

import {ICheckBoxHealthCareProps} from 'types/components'

import TextActive from 'components/tab-bar/TextActive'

import {colors} from 'configs/theme'

import {radioStyles} from './RadioHealthCareStyles'

const AnimatedTouchableOpacity =
  Animated.createAnimatedComponent(TouchableOpacity)
const AnimatedView = Animated.createAnimatedComponent(View)

const CheckboxHealthCare: FC<ICheckBoxHealthCareProps> = ({
  label,
  customLabel,
  onValueChange,
  value,
  isActive = false,
  colorTextActive = colors.greyColorsGrey900
}) => {
  const pressed = useSharedValue(0)
  const radius = 12

  useEffect(() => {
    pressed.value = value ? 0.7 : 1
  }, [value])
  const presableAnimated = useAnimatedStyle(() => {
    const size = withTiming(pressed.value, {
      duration: 250
    })

    return {
      transform: [{scale: size}]
    }
  })
  const onChecked = (val: boolean) => {
    onValueChange && onValueChange(val)
  }
  return (
    <Animated.View style={[radioStyles.container]}>
      <AnimatedTouchableOpacity
        activeOpacity={0.9}
        onPress={() => onChecked(!value)}>
        <AnimatedView
          style={[presableAnimated, radioStyles.checkboxFill]}></AnimatedView>
        <Canvas style={[radioStyles.checkbox]}>
          <Circle
            cx={radius}
            cy={radius}
            r={radius}
            color={value ? colors.blue600 : colors.greyColorsGrey300}
          />
          <Group></Group>
        </Canvas>
      </AnimatedTouchableOpacity>

      {label && !customLabel && (
        <TextActive
          activeTextColor={colorTextActive}
          isActive={isActive}
          text={label}
          textType={'bold'}
          fontSize={18}

          // style={CheckboxGroupStyle.textLabel}
        />
      )}
      {customLabel && customLabel}
    </Animated.View>
  )
}

export default CheckboxHealthCare
