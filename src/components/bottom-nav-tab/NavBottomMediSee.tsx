import React from 'react'
import {
  Keyboard,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
  useWindowDimensions
} from 'react-native'
import ReAnimate, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming
} from 'react-native-reanimated'

import {TextHealthCare} from 'components'
import {IconWithBadge} from 'components/icon-Iconography'

import {BottomTabBarProps} from '@react-navigation/bottom-tabs'

import {colors} from 'configs/theme'

import {moderateScale, verticalScale} from 'helper'

import Images from 'assets/image/icons'

import {names} from 'constants/name-screen'

const TouchAnimate = ReAnimate.createAnimatedComponent(TouchableOpacity)
const shadow = {
  shadowOffset: {
    width: 0,
    height: 15
  },
  shadowOpacity: 0.5,
  shadowRadius: 16,
  elevation: 24,
  backgroundColor: colors.white
}

const MyTabBar: React.FC<BottomTabBarProps> = (props: BottomTabBarProps) => {
  const {state, descriptors, navigation, insets} = props
  const {width} = useWindowDimensions()
  const aim = useSharedValue(0)

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateY: aim.value}]
    }
  })

  return (
    <View
      style={{
        flexDirection: 'row',
        height: verticalScale(0.2 * width),
        ...shadow
      }}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key]
        let icon
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name

        const isFocused = state.index === index

        const onPress = () => {
          aim.value = withRepeat(withTiming(-0.5), 2, true)
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true
          })

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name)
          }
        }

        const onPressIn = () => {
          aim.value = 0
        }

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key
          })
        }

        switch (route.name) {
          case names.HomeScreen:
            icon = isFocused ? Images.homeBold : Images.homeOutline
            break
          case names.ActivityScreen:
            icon = isFocused ? Images.calendarBold : Images.calendarOutline
            break
          case names.ChatStack:
            icon = isFocused ? Images.messageBold : Images.messageOutline
            break
          case names.AccountStack:
            icon = isFocused ? Images.userBold : Images.userOutline
            break
        }
        const color = isFocused ? colors.blue600 : colors.greyColorsGrey400

        return (
          <TouchAnimate
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            onPressIn={onPressIn}
            style={[
              styles.container,
              isFocused && animatedStyle,
              {paddingBottom: 0.35 * insets.bottom}
            ]}>
            <IconWithBadge
              image={icon}
              color={color}
              containerStyle={{paddingBottom: verticalScale(2)}}
            />
            <TextHealthCare
              style={[
                {color},
                {textAlign: 'center', fontSize: moderateScale(12)}
              ]}
              textType={isFocused ? 'bold' : 'regular'}>
              {label.toString()}
            </TextHealthCare>
          </TouchAnimate>
        )
      })}
    </View>
  )
}

const NavBottomHealthCare = (props: BottomTabBarProps) => {
  const {descriptors, state} = props
  const [visible, setVisible] = React.useState(true)
  const focusedOptions = descriptors[state.routes[state.index].key].options

  React.useEffect(() => {
    if (Platform.OS === 'android') {
      Keyboard.addListener('keyboardDidShow', () => setVisible(false))
      Keyboard.addListener('keyboardDidHide', () => setVisible(true))
    }
    return () => {
      if (Platform.OS === 'android') {
        Keyboard.removeAllListeners('keyboardDidShow')
        Keyboard.removeAllListeners('keyboardDidHide')
      }
    }
  }, [])

  const render = () => {
    if (focusedOptions.tabBarStyle === false) {
      return null
    }

    if (Platform.OS === 'ios') {
      return <MyTabBar {...props} />
    }
    
    if (!visible) return null
    return <MyTabBar {...props} />
  }

  return render()
}

export default NavBottomHealthCare

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'}
})
