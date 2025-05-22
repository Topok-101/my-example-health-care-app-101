import React from 'react'
import {Linking, StyleSheet, View} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'

import {BetterImage, ButtonHealthCare, TextHealthCare} from 'components'

import {colors} from 'configs/theme'

import {horizontalScale, verticalScale} from 'helper'

import Images from 'assets/image/illustrate'

export default function NoNetWorkScreen() {
  const goToSetting = () => {
    Linking.openSettings()
  }

  return (
    <SafeAreaView style={styles.container}>
      <BetterImage source={Images.noNetwork} style={styles.img} />
      <TextHealthCare style={styles.containertext}>$noNetwork</TextHealthCare>
      <View style={styles.containerBtn}>
        <ButtonHealthCare title="$gotoSetting" onPress={goToSetting} />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.greyColorsGrey50,
    flex: 1
  },
  img: {width: horizontalScale(782), height: verticalScale(587)},
  containertext: {paddingTop: verticalScale(14)},
  containerBtn: {paddingTop: verticalScale(56)}
})
