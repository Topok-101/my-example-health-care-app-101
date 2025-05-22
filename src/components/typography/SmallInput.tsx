import React, {FC, Ref, forwardRef, useState} from 'react'
import {
  NativeSyntheticEvent,
  TextInput,
  TextInputFocusEventData,
  TextStyle,
  View
} from 'react-native'
import Animated from 'react-native-reanimated'

import {
  SmallInputProps,
  SmallInputRefProps
} from 'types/components/small-text-type'

import {horizontalScale} from 'helper'

import TextHealthCare from './TextHealthCare'
import animatedSmallText from './animations/animatedSmallText'
import {smallInputStyles} from './styles/SmallText.style'

const AnimatedTextInput = Animated.createAnimatedComponent(TextInput)
const AnimatedView = Animated.createAnimatedComponent(View)

const SmallInput: FC<SmallInputRefProps> = forwardRef(
  (
    {
      label,
      customRenderLabel,
      position = 'top',
      style,
      value = '',
      isSingleValue = false,
      onFocus,
      onBlur,
      isPressable,
      onPressDown,
      onPressUp,
      isError = false,
      ...textInputProps
    }: SmallInputProps,
    ref?: Ref<TextInput>
  ) => {
    const [isFoucusing, setIsFocusing] = useState(false)

    const {animatedValueStyle, animatedShakeStyle} = animatedSmallText(
      value,
      isFoucusing,
      isError
    )

    const handleOnFocus = (
      e: NativeSyntheticEvent<TextInputFocusEventData>
    ) => {
      setIsFocusing(true)
      onFocus && onFocus(e)
    }

    const handleOnBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
      setIsFocusing(false)

      if (isPressable && onPressDown) {
        onPressDown()
      }
      onBlur && onBlur(e)
    }
    const inputWidthStyle = isSingleValue
      ? {width: horizontalScale(64), paddingHorizontal: horizontalScale(16)}
      : {width: horizontalScale(128), paddingHorizontal: horizontalScale(32)}
    const passedStyles: TextStyle = Array.isArray(style)
      ? Object.assign({}, ...style)
      : style

    return (
      <AnimatedView
        style={[
          smallInputStyles.viewContainer,
          animatedShakeStyle({isShake: isError}),

          {flexDirection: position === 'top' ? 'column-reverse' : 'column'}
        ]}>
        <AnimatedTextInput
          onPressIn={isPressable ? onPressUp : undefined}
          ref={ref}
          showSoftInputOnFocus={isPressable ? false : true}
          // editable={isPressable ? false : true}
          value={value}
          {...textInputProps}
          onFocus={handleOnFocus}
          onBlur={handleOnBlur}
          style={[
            {...passedStyles},
            animatedValueStyle,

            inputWidthStyle,
            smallInputStyles.container
          ]}
          maxLength={isSingleValue ? 1 : undefined}
        />

        {label && (
          <TextHealthCare textType="semibold" style={{fontSize: 16}}>
            {label}
          </TextHealthCare>
        )}
        {customRenderLabel && customRenderLabel}
      </AnimatedView>
    )
  }
)

SmallInput.displayName = 'SmallInput'

export default SmallInput
