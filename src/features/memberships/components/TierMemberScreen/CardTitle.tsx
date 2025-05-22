import React from 'react'
import {View} from 'react-native'

import {IMemberships} from 'types/features/memberships'

import {ChipMemberCard, TextHealthCare} from 'components'

import {CardTitleStyles} from 'features/memberships/style/TierMemberScreen'

const CardTitle: React.FC<{
  title: string
  rate: string
  type: IMemberships
}> = props => {
  const {rate, title, type} = props

  return (
    <View style={CardTitleStyles.container}>
      <View style={CardTitleStyles.title}>
        <TextHealthCare style={CardTitleStyles.title} textType="bold">
          $numberMember {title}
        </TextHealthCare>
        <TextHealthCare
          style={CardTitleStyles.fontRate}
          textType="light"
          fontType="jm">
          {rate} $point
        </TextHealthCare>
      </View>
      <View style={CardTitleStyles.containerCard}>
        <ChipMemberCard type={type.toLowerCase() as IMemberships} right={true} title={title} />
      </View>
    </View>
  )
}

export default CardTitle
