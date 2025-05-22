import {RefObject} from 'react'
import {TextInput} from 'react-native'

import {IBloodType} from 'types/zustand'

export type SignUpFormProps = {
  onChangeStep: (step: number) => void
  onPressUp?: () => void
  onPressDown?: () => void
  bloodTypeRef?: RefObject<TextInput>
  bloodType?: IBloodType
  prevStep: number
}
