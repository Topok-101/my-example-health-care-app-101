import {
  Canvas,
  Group,
  ImageSVG,
  RoundedRect,
  useSVG
} from '@shopify/react-native-skia'
import React, {FC, useEffect, useState} from 'react'
import {TouchableOpacity, View} from 'react-native'
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming
} from 'react-native-reanimated'

import {ICheckBoxHealthCareProps} from 'types/components'

import {TextHealthCare} from 'components/typography'

import {colors} from 'configs/theme'

import {svgs} from 'assets/svg'

import {checkboxStyles} from './CheckboxHealthCareStyles'

const AnimatedTouchableOpacity =
  Animated.createAnimatedComponent(TouchableOpacity)
const AnimatedView = Animated.createAnimatedComponent(View)

const CheckboxHealthCare: FC<ICheckBoxHealthCareProps> = ({
  label,
  customLabel,
  onValueChange,
  value = false,
  checkable = true
}) => {
  const [isPress, setIsPress] = useState(value)
  const pressed = useSharedValue(1)

  const svg = useSVG(svgs.SVGCheck)

  useEffect(() => {
    pressed.value = isPress ? 0 : 1
    onValueChange && onValueChange(isPress)
  }, [isPress])

  const presableAnimated = useAnimatedStyle(() => {
    const size = withTiming(pressed.value, {
      duration: 250
    })

    return {
      transform: [{scale: size}]
    }
  })
  const onPress = () => {
    checkable && setIsPress(prevState => !prevState)
  }
  return (
    <Animated.View style={[checkboxStyles.container]}>
      <AnimatedTouchableOpacity activeOpacity={0.9} onPress={onPress}>
        <AnimatedView
          style={[
            presableAnimated,
            checkboxStyles.checkboxFill
          ]}></AnimatedView>
        <Canvas style={[checkboxStyles.checkbox]}>
          <RoundedRect
            x={0}
            y={0}
            width={24}
            height={24}
            r={8}
            color={isPress ? colors.blue600 : colors.greyColorsGrey300}
          />
          <Group>
            {svg && (
              <ImageSVG svg={svg} x={4.5} y={4.5} width={25} height={25} />
            )}
          </Group>
        </Canvas>
      </AnimatedTouchableOpacity>
      {label && !customLabel && <TextHealthCare>{label}</TextHealthCare>}
      {customLabel && customLabel}
    </Animated.View>
  )
}

export default CheckboxHealthCare
