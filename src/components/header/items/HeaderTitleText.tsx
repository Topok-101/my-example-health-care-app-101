import React, {FC} from 'react'
import {StyleSheet, View} from 'react-native'

import {TextHealthCare} from 'components'
import {moderateScale} from 'helper'
import {IClassicHeaderTitle} from 'types/components'

const HeaderTitleText: FC<IClassicHeaderTitle> = ({text}) => {
  return (
    <View>
      <TextHealthCare textType="bold" style={styles.text}>
        {text}
      </TextHealthCare>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {fontSize: moderateScale(18)}
})

export default HeaderTitleText
