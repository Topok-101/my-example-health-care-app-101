import React from 'react'
import {View} from 'react-native'

import {BetterImage, ButtonHealthCare, TextHealthCare} from 'components'

import Illustrate from 'assets/image/illustrate'

import {styles} from '../style/HelpCall.style'

const HelpCall = () => {
  return (
    <View>
      <BetterImage
        resizeMode="cover"
        source={Illustrate.family}
        style={styles.image}>
        <View style={styles.textContainer}>
          <TextHealthCare style={styles.text20Grey900} textType="bold">
            $needHelp
          </TextHealthCare>
          <View>
            <ButtonHealthCare title="$callNow" size="small" width={118.29} />
          </View>
        </View>
      </BetterImage>
    </View>
  )
}

export default HelpCall
