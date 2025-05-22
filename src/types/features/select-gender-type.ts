import {Source} from 'react-native-fast-image'

export type ISelectGenderProps = {
  onSelectGender: (gender: IGenderType) => void
  value?: IGenderType
}
export type IGenderType = 'male' | 'female'

export type IGenderCardProps = {
  gender: IGenderType
  image: Source
  selected?: boolean
  onSelectGender: (gender: IGenderType) => void
}

export type IGenderOpion = {
  gender: IGenderType
  image: Source
}
