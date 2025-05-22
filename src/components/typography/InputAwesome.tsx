import Images from '@assets/image/icons'
import React, {FC, useEffect, useRef, useState} from 'react'
import {
  Animated,
  Image,
  Platform,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View
} from 'react-native'
import Reanimated, {
  SharedValue,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming
} from 'react-native-reanimated'

import {InputProps} from 'types/components'

import {useLanguageStore} from 'storez'

import {IconBounceIn} from 'components/icon-Iconography'

import {useIsFocused} from '@react-navigation/native'

import i18n from 'configs/i18n'
import {colors} from 'configs/theme'

import {animetedTextInputAwesome} from './animations'
import {_textInputStyle, styles} from './styles'

const AnimatedTextInput = Animated.createAnimatedComponent(TextInput)
const AnimatedImage = Reanimated.createAnimatedComponent(Image)
const AnimatedView = Reanimated.createAnimatedComponent(View)

const ORIGINAL_VALUE = 0
const ANIMATED_VALUE = 1
const DURATION_FOCUS = 450
const DURATION_BURH = 350

const InputAwesome: FC<InputProps> = ({
  iconLeft,
  iconRight,
  onPressIconRight,
  enableSecureTextEntry,
  style,
  isError = false,
  isCorrect = false,
  iconColor,
  isLeftEmpty,
  backgroundColor = colors.greyColorsGrey50,
  iconRightColor,
  iconRightSize,
  IsMaxHeight,
  fontFamily,
  ...props
}) => {
  const isFocused = useIsFocused()
  const [hasText, setHasText] = useState<boolean>(false)
  const [text, setText] = useState<string>('')
  const [isFocus, setIsfocus] = useState<boolean>(false)
  const {language} = useLanguageStore()
  const inputRef = useRef<TextInput>(null)

  const shereColorTint: SharedValue<number> = useSharedValue(ORIGINAL_VALUE)
  const shereColorBorder: SharedValue<number> = useSharedValue(ORIGINAL_VALUE)
  const shereRotation: SharedValue<number> = useSharedValue(ORIGINAL_VALUE)
  const Anm = animetedTextInputAwesome({
    valueShereTint: shereColorTint,
    valueShereBorder: shereColorBorder,
    valueShereRotation: shereRotation,
    dependencies: {
      input: isFocused, //inputRef.current?.focus(),
      error: isError,
      correct: isCorrect,
      hasText: text
    }
  })

  useEffect(() => {
    shereRotation.value = withSequence(
      withTiming(-15, {duration: 70}),
      withRepeat(withTiming(ANIMATED_VALUE, {duration: 100}), 6, true),
      withTiming(0, {duration: 70})
    )
  }, [isError])

  const onChangeText = (text: string) => {
    props.onChangeText && props.onChangeText(text)
    setText(text)
    text === '' ? setHasText(false) : setHasText(true)
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => inputRef.current?.focus()}
      style={style}>
      <AnimatedView
        style={[
          styles.container,
          Anm.animatedStyleBorder({
            previous: isError ? colors.red : colors.greyColorsGrey200,
            nextTo: isError ? colors.red : colors.blue500
          }),
          {
            backgroundColor: backgroundColor
          },
          IsMaxHeight ? {maxHeight: IsMaxHeight} : {}
        ]}>
        {iconLeft && (
          <AnimatedImage
            source={iconLeft}
            resizeMode="contain"
            style={[
              styles.iconImageStyle,
              styles.iconLeftContainerStyle,
              {
                tintColor: iconColor
                  ? iconColor
                  : isError
                  ? colors.red
                  : isFocus
                  ? colors.blue600
                  : colors.greyColorsGrey400
              },
              Anm.animatedStyleTint({
                previous: iconColor
                  ? iconColor
                  : isError
                  ? colors.red
                  : colors.greyColorsGrey400,
                nextTo: iconColor
                  ? iconColor
                  : isError
                  ? colors.red
                  : colors.blue600
              }),
              Anm.animatedShakeStyle({isShake: isError})
            ]}
          />
        )}
        {isLeftEmpty && <View style={styles.empty} />}
        <AnimatedTextInput
          ref={inputRef}
          {...props}
          style={[
            _textInputStyle(language, iconLeft, fontFamily),
            Platform.OS === 'android' && {paddingVertical: 0},
            {color: colors.greyColorsGrey900}
          ]}
          cursorColor={colors.blue500}
          textAlignVertical={'center'}
          onChangeText={onChangeText}
          placeholder={i18n.t(`${props.placeholder}`)}
          placeholderTextColor={
            props.placeholderTextColor
              ? props.placeholderTextColor
              : colors.greyColorsGrey400
          }
          secureTextEntry={enableSecureTextEntry}
          allowFontScaling={false}
          onFocus={e => {
            shereColorTint.value = withTiming(ANIMATED_VALUE, {
              duration: DURATION_FOCUS
            })
            shereColorBorder.value = withTiming(ANIMATED_VALUE, {
              duration: DURATION_FOCUS
            })
            setIsfocus(true)
            props.onFocus && props.onFocus(e)
          }}
          onBlur={e => {
            !hasText &&
              (shereColorTint.value = withTiming(ORIGINAL_VALUE, {
                duration: DURATION_BURH
              }))
            shereColorBorder.value = withTiming(ORIGINAL_VALUE, {
              duration: DURATION_BURH
            })
            setIsfocus(false)
            props.onBlur && props.onBlur(e)
          }}
        />
        <View style={styles.iconRightContainerStyle}>
          {iconRight ? (
            <TouchableOpacity
              onPress={onPressIconRight}
              activeOpacity={onPressIconRight ? 0.6 : 1}>
              <AnimatedImage
                source={iconRight}
                resizeMode="contain"
                style={[
                  iconRightSize
                    ? {
                        width: iconRightSize,
                        height: iconRightSize
                      }
                    : styles.iconImageStyle,
                  {
                    tintColor: iconRightColor
                      ? iconRightColor
                      : colors.greyColorsGrey400
                  }
                ]}
              />
            </TouchableOpacity>
          ) : isCorrect && !isError && hasText ? (
            <IconBounceIn
              image={Images.check}
              hight={20}
              width={20}
              color={colors.green}
            />
          ) : (
            isError &&
            !isCorrect && (
              <IconBounceIn
                image={Images.close}
                hight={20}
                width={20}
                color={colors.red}
              />
            )
          )}
        </View>
      </AnimatedView>
    </TouchableWithoutFeedback>
  )
}

export default InputAwesome
