import React, {FC} from 'react'
import {
  ActivityIndicator,
  Image,
  Platform,
  Pressable,
  TextStyle,
  View
} from 'react-native'
import {
  Gesture,
  GestureDetector,
  TouchableOpacity
} from 'react-native-gesture-handler'
import Reanimated, {
  useAnimatedStyle,
  useSharedValue
} from 'react-native-reanimated'

import {ButtonBaseProps} from 'types/components/button-HealthCare-type'

import {TextHealthCare} from 'components/typography'

import {colors} from 'configs/theme'

import useAnimateButton from './animations/useAnimateButton'
import {buttonBaseStyles} from './styles/ButtonHealthCareStyle'

const AnimatedTouchableOpacity =
  Reanimated.createAnimatedComponent(TouchableOpacity)
const AnimatedImage = Reanimated.createAnimatedComponent(Image)
const AnimatedLoadingView =
  Reanimated.createAnimatedComponent(ActivityIndicator)
const AnimatedTextView = Reanimated.createAnimatedComponent(View)
const ButtonHealthCare: FC<ButtonBaseProps> = ({
  width,
  isStrechtWidth = false,
  variant = 'primaly',
  size = 'medium',
  type = 'primary',
  IconStart,
  title,
  style,
  isLoading = false,
  disabled = false,
  fontSize = 14,
  textOutlineColor = colors.blue600,
  onPress,
  ...buttonBaseProps
}) => {
  const {animatedStyle, animatedStyleLoading, animatedStyleText} =
    useAnimateButton(isLoading)

  let variantStyle: TextStyle
  let textStyle: TextStyle
  let tintColor: string
  let sizeButton: TextStyle
  const passedStyles: TextStyle = Array.isArray(style)
    ? Object.assign({}, ...style)
    : style

  switch (variant) {
    case 'primaly':
      variantStyle =
        type === 'primary'
          ? disabled
            ? buttonBaseStyles.disabled
            : buttonBaseStyles.primary
          : buttonBaseStyles.primaryOutline
      tintColor =
        type === 'primary'
          ? colors.white
          : disabled
          ? colors.greyColorsGrey600
          : colors.blue600
      textStyle =
        type === 'primary'
          ? buttonBaseStyles.textPrimary
          : disabled
          ? buttonBaseStyles.disableText
          : {color: textOutlineColor}
      break
    case 'danger':
      tintColor = type === 'primary' ? colors.white : colors.red
      textStyle =
        type === 'primary'
          ? buttonBaseStyles.textPrimary
          : buttonBaseStyles.textDangerOutline
      variantStyle =
        type === 'primary'
          ? buttonBaseStyles.danger
          : buttonBaseStyles.dangerOutline
      break
    default:
      tintColor = type === 'primary' ? colors.white : colors.blue600
      textStyle =
        type === 'primary'
          ? buttonBaseStyles.textPrimary
          : {color: textOutlineColor}
      variantStyle =
        type === 'primary'
          ? buttonBaseStyles.primary
          : buttonBaseStyles.primaryOutline
      break
  }
  switch (size) {
    case 'small':
      sizeButton = buttonBaseStyles.buttonSmall
      break
    case 'medium':
      sizeButton = buttonBaseStyles.buttonMedium
      break

    default:
      sizeButton = buttonBaseStyles.buttonMedium
      break
  }
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

  const Children: FC = (): JSX.Element => {
    return (
      <GestureDetector gesture={Gesture.Exclusive(singleTap)}>
        <AnimatedTouchableOpacity
          activeOpacity={0.9}
          onPress={
            Platform.OS === 'ios'
              ? () => {
                  return
                }
              : onPress
          }
          style={[
            {
              alignSelf: isStrechtWidth ? 'center' : undefined,
              width: width ? width : undefined
            },
            buttonBaseStyles.button,
            {...sizeButton},
            {...variantStyle},
            {
              ...animatedStyleButton,
              ...passedStyles
            }
          ]}
          {...buttonBaseProps}
          disabled={disabled || isLoading}>
          {IconStart && (
            <AnimatedImage
              source={IconStart}
              style={[{tintColor}, animatedStyle]}
              resizeMode="contain"
            />
          )}
          {isLoading && (
            <AnimatedLoadingView
              style={[
                {
                  position: 'absolute'
                },
                animatedStyleLoading
              ]}
            />
          )}
          {title && (
            <AnimatedTextView style={animatedStyleText}>
              <TextHealthCare
                style={[{...textStyle}, {fontSize: fontSize}]}
                textType={'semibold'}>
                {title}
              </TextHealthCare>
            </AnimatedTextView>
          )}
        </AnimatedTouchableOpacity>
      </GestureDetector>
    )
  }

  return Platform.OS === 'ios' ? (
    <Pressable onPress={onPress}>
      <Children></Children>
    </Pressable>
  ) : (
    <Pressable onPress={onPress}>
      <Children></Children>
    </Pressable>
  )
}
export default ButtonHealthCare
