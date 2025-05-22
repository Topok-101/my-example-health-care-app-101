import React from 'react'
import {View} from 'react-native'

import {TextHealthCare} from 'components'

import {styles} from '../style/Footer.style'

const Footer = () => {
  return (
    <View style={styles.mainConatiner}>
      <TextHealthCare style={styles.text12Grey500} fontType="jm">
        $compCondition
      </TextHealthCare>
      <View style={styles.secondContainer}>
        <TextHealthCare style={styles.text12Grey500} fontType="jm">
          $anyQuestion
        </TextHealthCare>
        <TextHealthCare style={styles.text12Blue} fontType="jm">
          $agent
        </TextHealthCare>
      </View>
    </View>
  )
}

export default Footer
