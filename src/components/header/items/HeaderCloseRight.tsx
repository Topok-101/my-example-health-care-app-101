import React, {FC} from 'react'
import {StyleSheet, TouchableOpacity} from 'react-native'

import {IHeaderBackProps} from 'types/components/header-type'

import {JustImage} from 'components'

import {useNavigation} from '@react-navigation/native'

import {horizontalScale, verticalScale} from 'helper'

import Images from 'assets/image/icons'

const CloseRight: FC<IHeaderBackProps> = ({
  onPress,
  canGobackStep = true
}): JSX.Element => {
  const navigation = useNavigation()
  return (
    <TouchableOpacity
      onPress={() => {
        onPress && onPress()
        canGobackStep &&
          navigation &&
          navigation.canGoBack() &&
          navigation.goBack()
      }}>
      <JustImage source={Images.close} style={styles.img} />
    </TouchableOpacity>
  )
}

export default CloseRight

const styles = StyleSheet.create({
  img: {
    width: horizontalScale(24),
    height: verticalScale(24)
  }
})
