import {i18n} from 'configs'
import React from 'react'
import {
  Image,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View
} from 'react-native'
import Animated from 'react-native-reanimated'

import {useLanguageStore} from 'storez'

import {useNavigation} from '@react-navigation/native'

import {colors} from 'configs/theme'

import {horizontalScale, verticalScale} from 'helper'

import Images from 'assets/image/icons'

import {names} from 'constants/name-screen'

import {JustImage} from './BetterImage'
import {_textInputSearchStyle, stylesSearch} from './styles'

const AnimatedTextInput = Animated.createAnimatedComponent(TextInput)

interface ExtraSearch {
  isScanner?: boolean
}

type ISearchBar = TextInputProps & ExtraSearch

const SearchBar: React.FC<ISearchBar> = ({
  placeholder = 'searchGlobal',
  isScanner = false,
  ...props
}) => {
  const [colorIcon, setColorIcon] = React.useState<string>(colors.blue600)
  const {language} = useLanguageStore()

  const navigation = useNavigation()

  return (
    <View style={stylesSearch.container}>
      <Image
        source={Images.search}
        style={[stylesSearch.iconLeftContainerStyle, {tintColor: colorIcon}]}
        resizeMode={'contain'}
      />
      <AnimatedTextInput
        style={[
          _textInputSearchStyle(language, isScanner),
          {color: colors.greyColorsGrey700}
        ]}
        placeholder={i18n.t(`${placeholder}`)}
        placeholderTextColor={
          props.placeholderTextColor
            ? props.placeholderTextColor
            : colors.greyColorsGrey400
        }
        cursorColor={colors.blue500}
        textAlignVertical={'center'}
        onFocus={e => {
          setColorIcon(colors.greyColorsGrey400)
          props.onFocus && props.onFocus(e)
        }}
        onBlur={e => {
          setColorIcon(colors.blue600)
          props.onBlur && props.onBlur(e)
        }}
        {...props}
      />
      {isScanner && (
        <View
          style={{
            borderWidth: 1,
            height: '100%',
            borderColor: colors.greyColorsGrey200
          }}
        />
      )}
      {isScanner && (
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => navigation.navigate(names.CameraScreen as never)}>
          <JustImage
            source={Images.qr}
            style={{
              width: horizontalScale(24),
              height: verticalScale(24),
              marginHorizontal: horizontalScale(24)
            }}
            resizeMode={'contain'}
            tintColor={colors.greyColorsGrey900}
          />
        </TouchableOpacity>
      )}
    </View>
  )
}

export default SearchBar
