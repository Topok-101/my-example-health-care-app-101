import React, {useState} from 'react'
import {StyleSheet, TouchableOpacity, View} from 'react-native'
import Animated, {
  Easing,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming
} from 'react-native-reanimated'

import {PropsCollapse} from 'types/components/collapse'

const duration = 400

const CollapseHealthCare: React.FC<PropsCollapse> = ({
  renderCollapseView,
  renderTitleView,
  ContainerStyle,
  TitleViewStyle
}) => {
  const [open, setOpen] = useState(false)

  const animatedHeightValue = useSharedValue(0)
  const bodyHeight = useSharedValue(0)

  const toggleOpen = () => {
    toggleAnimationValue(!open)
    setOpen(!open)
  }

  const animatedHeight = useAnimatedStyle(() => {
    const height = interpolate(
      animatedHeightValue.value,
      [0, 1],
      [0, bodyHeight.value]
    )
    return {
      height: height
    }
  })

  const toggleAnimationValue = (isLocalOpen: boolean) => {
    if (isLocalOpen) {
      animatedHeightValue.value = withTiming(1, {
        duration: duration,
        easing: Easing.cubic
      })
    } else {
      animatedHeightValue.value = withTiming(0, {
        duration: duration,
        easing: Easing.cubic
      })
    }
  }

  return (
    <View style={styles.containerStyle}>
      <View style={ContainerStyle}>
        <TouchableOpacity
          activeOpacity={0.5}
          style={TitleViewStyle}
          onPress={toggleOpen}>
          {renderTitleView(open)}
        </TouchableOpacity>

        <Animated.View style={[styles.descStyle, animatedHeight]}>
          <View
            style={[styles.bodyContainer]}
            onLayout={event => {
              bodyHeight.value = event.nativeEvent.layout.height
            }}>
            {renderCollapseView}
          </View>
        </Animated.View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1
  },
  descStyle: {
    overflow: 'hidden'
  },
  bodyContainer: {
    position: 'absolute',
    left: 0,
    bottom: 0
  }
})

export default CollapseHealthCare
