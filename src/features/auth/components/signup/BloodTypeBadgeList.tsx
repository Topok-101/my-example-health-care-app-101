import {TouchableOpacity} from '@gorhom/bottom-sheet'
import React, {FC} from 'react'
import {View} from 'react-native'

import {IBloodType} from 'types/zustand'

import {TextHealthCare} from 'components'

import {bloodTypeListStyles} from 'features/auth/style/signup.style'

const bloodTypeList: IBloodType[] = [
  'A+',
  'A-',
  'AB+',
  'AB-',
  'B+',
  'B-',
  'O+',
  'O-'
]
const BloodTypeBadgeList: FC<{onSelectType: (type: IBloodType) => void}> = ({
  onSelectType
}) => {
  return (
    <View style={bloodTypeListStyles.container}>
      <TextHealthCare style={bloodTypeListStyles.title} textType="semibold">
        $bloodType
      </TextHealthCare>
      <View style={bloodTypeListStyles.badgeContainer}>
        {bloodTypeList.map((type, idx) => (
          <TouchableOpacity
            key={idx}
            onPress={() => onSelectType(type)}
            style={bloodTypeListStyles.bloodTypeBadge}>
            <TextHealthCare
              style={bloodTypeListStyles.bloodTypeText}
              textType="bold">
              {type}
            </TextHealthCare>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  )
}

export default BloodTypeBadgeList
