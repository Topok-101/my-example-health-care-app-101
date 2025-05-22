import {TouchableOpacityProps} from 'react-native'
import {Source} from 'react-native-fast-image'

interface IBtnSocialLoginProps {
  icon: Source
  name: NameSocial
}

export type IBtnSocialLoginType = IBtnSocialLoginProps & TouchableOpacityProps

export type ISeparatorLogin = {text: string}

export interface IDescripstionError {
  isErrorEmailNumber?: boolean
  isErrorPassword?: boolean
}

export type NameSocial = 'Google' | 'Facebook' | 'Apple' | 'EmailUser' | 'Logout'
