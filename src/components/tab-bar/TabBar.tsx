import React, {Children, FC, useCallback, useEffect, useState} from 'react'
import {LayoutChangeEvent, TouchableOpacity, View} from 'react-native'
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring
} from 'react-native-reanimated'

import {ITabBarProps} from 'types/components/tab-bar-type'

import {useTranslator} from 'hooks'

import {colors} from 'configs/theme'

import {tabBarStyles} from './TabBarStyles'
import TextActive from './TextActive'

const AnimatedMoveView = Animated.createAnimatedComponent(View)
const TabBar: FC<ITabBarProps> = ({
  data,
  onChangeTab,
  value = 0,
  activeBackgroudColor = colors.white,
  fontType = 'ibm',
  activeTextColor = colors.blue600
}) => {
  const [itemWidth, setItemWidth] = useState(0)
  const [tabWidth, setTabWidth] = useState(0)

  const moveTabValue = useSharedValue(0)

  const [text] = useTranslator(Children.toArray(data))

  useEffect(() => {
    moveTabValue.value = tabWidth * (value / data.length)
  }, [value, tabWidth])

  const onLayout = useCallback((event: LayoutChangeEvent) => {
    const {width} = event.nativeEvent.layout
    const bottomTabWidth = width - 2
    const _itemWidth = bottomTabWidth / data.length

    setTabWidth(bottomTabWidth)
    setItemWidth(_itemWidth)
  }, [])

  const moveTabAnimate = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: withSpring(moveTabValue.value, {
            stiffness: 100, //default: 100
            damping: 15, //default: 10
            mass: 1 //default: 1
          })
        }
      ]
    }
  })

  const handleOnPress = (index: number) => {
    onChangeTab(index)
  }

  return (
    <View style={[tabBarStyles.container]} onLayout={onLayout}>
      <AnimatedMoveView
        style={[
          tabBarStyles.moverContainer,
          {width: itemWidth},
          moveTabAnimate
        ]}>
        <View
          style={[
            {backgroundColor: activeBackgroudColor.toString()},
            tabBarStyles.moverStyle
          ]}
        />
      </AnimatedMoveView>

      {text.map((tab, idx) => (
        <TouchableOpacity
          activeOpacity={0.8}
          key={idx}
          style={[tabBarStyles.childTab]}
          onPress={() => handleOnPress(idx)}>
          <View>
            <TextActive
              activeTextColor={activeTextColor}
              fontType={fontType}
              isActive={value === idx}
              text={tab}
            />
          </View>
        </TouchableOpacity>
      ))}
    </View>
  )
}

export default TabBar
