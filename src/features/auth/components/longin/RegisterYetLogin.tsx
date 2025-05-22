import {namesScreen} from 'const'
import React, {FC} from 'react'
import {StyleSheet, TouchableOpacity, View} from 'react-native'

import {TextHealthCare} from 'components'

import {useNavigation} from '@react-navigation/native'

import {colors} from 'configs/theme'

import {moderateScale} from 'helper'

const RegisterYetLogin: FC = (): JSX.Element => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <TextHealthCare
        style={{color: colors.greyColorsGrey500, fontSize: moderateScale(16)}}>
        $notExistUser
      </TextHealthCare>
      <TouchableOpacity
        style={{paddingLeft: 4}}
        activeOpacity={0.5}
        onPress={() => navigation.navigate(namesScreen.SignUpScreen as never)}>
        <TextHealthCare
          style={{color: colors.blue600, fontSize: moderateScale(16)}}>
          $register
        </TextHealthCare>
      </TouchableOpacity>
    </View>
  )
}

export default RegisterYetLogin

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center'
  }
})
