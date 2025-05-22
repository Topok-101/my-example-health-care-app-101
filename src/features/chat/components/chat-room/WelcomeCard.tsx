import React from 'react'
import {View} from 'react-native'

import {TextHealthCare} from 'components'

import {WelcomeCardStyles} from 'features/chat/styles'

const WelcomeCard = () => {
  return (
    <View style={WelcomeCardStyles.container}>
      <TextHealthCare style={WelcomeCardStyles.blue}>$startedChat</TextHealthCare>
      <TextHealthCare style={WelcomeCardStyles.fontBtn}>$welcomeChat</TextHealthCare>
    </View>
  )
}

export default WelcomeCard
