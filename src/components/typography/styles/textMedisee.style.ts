import {StyleSheet} from 'react-native'

import {IFontThaiType} from 'types/components/text-type'
import {LanguageType} from 'types/zustand'

export const textHealthCareStyles = (
  _lang: LanguageType,
  fontType: IFontThaiType
) =>
  StyleSheet.create(() => {
    let fontLang = 'IBMPlexSansThai'
    switch (_lang) {
      case 'th':
        fontLang =
          fontType === 'ibm'
            ? 'IBMPlexSansThai'
            : fontType === 'inter'
            ? 'Inter'
            : 'BaiJamjuree'
        break
      case 'en':
        fontLang = 'Inter'
        break
      case 'zh':
        fontLang = 'IBMPlexSansThai'
        break
    }
    return {
      regular: {
        fontFamily: `${fontLang}-Regular`
      },
      bold: {
        fontFamily: `${fontLang}-Bold`
      },
      light: {
        fontFamily: `${fontLang}-Light`
      },
      semibold: {
        fontFamily: `${fontLang}-SemiBold`
      },
      medium: {
        fontFamily: `${fontLang}-Medium`
      },
      extraLight: {
        fontFamily: `${fontLang}-ExtraLight`
      }
    }
  })
