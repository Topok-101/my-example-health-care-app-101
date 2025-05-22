import React from 'react'
import {View} from 'react-native'

import {JustImage} from 'components/typography'

import {colors} from 'configs/theme'

import example from 'assets/image/example'
import Images from 'assets/image/icons'

import {clinicCardStyle} from './ClinicCardStyle'

const ClinicCard = () => {
  return (
    <View style={[clinicCardStyle.container]}>
      <JustImage style={[clinicCardStyle.image]} source={example.BTClinic} />
      <View style={clinicCardStyle.logoContainer}>
        <JustImage style={[clinicCardStyle.logo]} source={example.BTLabLogo} />
      </View>
      <View style={clinicCardStyle.mapIconContainer}>
        <JustImage
          style={[clinicCardStyle.icon]}
          source={Images.map}
          tintColor={colors.blue600}
        />
      </View>
    </View>
  )
}

export default ClinicCard
