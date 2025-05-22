import {ReactNode, Ref} from 'react'
import {TextInput, TextInputProps} from 'react-native'

import {InputValidateProps} from 'types/components/text-input-awesome-type'

export type SmallInputProps = {
  label?: string
  customRenderLabel?: ReactNode
  position?: 'top' | 'bottom'
  isPressable?: boolean
  isSingleValue?: boolean
  enableSecureTextEntry?: boolean
  onPressUp?: () => void
  onPressDown?: () => void
} & TextInputProps &
  InputValidateProps

export type SmallInputRefProps = SmallInputProps &
  InputValidateProps & {ref?: Ref<TextInput>}
