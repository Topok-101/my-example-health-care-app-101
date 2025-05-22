import React, {FC} from 'react'
import {StyleSheet, TouchableOpacity, View} from 'react-native'

import {IDescripstionError} from 'types/features'

import {TextHealthCare} from 'components'

import {useNavigation} from '@react-navigation/native'

import {colors} from 'configs/theme'

import {moderateScale} from 'helper'

import {namesScreen} from 'const'

const DescriptionsUpInputLogin: FC<IDescripstionError> = (
  props: IDescripstionError
): JSX.Element => {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <View style={styles.left}>
        {props.isErrorEmailNumber && (
          <TextHealthCare style={styles.textError}>$errorEmailNumber</TextHealthCare>
        )}
        {props.isErrorPassword && (
          <TextHealthCare style={styles.textError}>$errorPassword</TextHealthCare>
        )}
      </View>
      <TouchableOpacity
        style={styles.right}
        activeOpacity={0.5}
        onPress={() =>
          navigation.navigate(namesScreen.ForgetPasswordScreen as never)
        }>
        <TextHealthCare style={{color: colors.blue600}} textType={'medium'}>
          $forgetPassword
        </TextHealthCare>
      </TouchableOpacity>
    </View>
  )
}

export default DescriptionsUpInputLogin

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  left: {flex: 1, alignItems: 'flex-start'},
  right: {alignItems: 'flex-end'},
  textError: {color: colors.red, fontSize: moderateScale(12)}
})
