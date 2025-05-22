import React from 'react'
import {View} from 'react-native'

import {TextHealthCare} from 'components'

import {styles} from '../style/PreparationDetail.style'

const PreparationDetail = () => {
  return (
    <View>
      <View style={styles.mainConatiner}>
        <TextHealthCare style={styles.text18Grey900} textType="bold">
          $prepTitle
        </TextHealthCare>
      </View>
      <View style={styles.secondContainer}>
        <TextHealthCare
          style={styles.text12Black}
          textType="regular"
          fontType="jm">
          $prepDetail
        </TextHealthCare>
      </View>
    </View>
  )
}

export default PreparationDetail
