import {selectGenderStyles} from 'features/auth/style/signup.style'
import React, {FC} from 'react'
import {View} from 'react-native'

import {
  IGenderOpion,
  IGenderType,
  ISelectGenderProps
} from 'types/features/select-gender-type'

import Illustrate from 'assets/image/illustrate'

import GenderCard from './GenderCard'

const genderOption: IGenderOpion[] = [
  {gender: 'male', image: Illustrate.male},
  {gender: 'female', image: Illustrate.female}
]

const SelectGender: FC<ISelectGenderProps> = ({onSelectGender, value}) => {
  const handleSelectGender = (gender: IGenderType) => {
    onSelectGender(gender)
  }

  const mapGenderCard = (gender: IGenderOpion, idx: number) => (
    <GenderCard
      key={idx}
      gender={gender.gender}
      image={gender.image}
      onSelectGender={handleSelectGender}
      selected={value === gender.gender}
    />
  )
  return (
    <View style={selectGenderStyles.selectGenderContainer}>
      {genderOption.map(mapGenderCard)}
    </View>
  )
}

export default SelectGender
