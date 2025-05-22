import React, {FC} from 'react'
import {StyleSheet, View} from 'react-native'

import {ISeparatorLogin} from 'types/features'

import {TextHealthCare} from 'components'

import {colors} from 'configs/theme'

import {moderateScale} from 'helper'

const SeparatorLogin: FC<ISeparatorLogin> = (
  props: ISeparatorLogin
): JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={styles.line} />
      <View style={styles.containerText}>
        <TextHealthCare
          textType="medium"
          style={{
            fontSize: moderateScale(16),
            color: colors.greyColorsGrey400
          }}>
          {props.text}
        </TextHealthCare>
      </View>
      <View style={styles.line} />
    </View>
  )
}

export default SeparatorLogin

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  containerText: {
    paddingHorizontal: 8
  },
  line: {
    flex: 1,
    borderWidth: 1,
    borderColor: colors.greyColorsGrey200
  }
})
