import React from 'react'
import {StyleSheet, View} from 'react-native'
import FastImage from 'react-native-fast-image'
import Reanimated, {BounceIn} from 'react-native-reanimated'

import {IConBadge} from 'types/components/Icon-type'

import {colors} from 'configs/theme'

const IconWithBadge = (props: IConBadge) => {
  return (
    <View style={[props.containerStyle, {flexDirection: 'row'}]}>
      <FastImage
        source={props.image}
        style={[
          {
            width: props.size ? props.size : 24,
            height: props.size ? props.size : 24
          }
        ]}
        tintColor={props.color}
        resizeMode={'contain'}
      />
      {props.isBadge && (
        <Reanimated.View entering={BounceIn} style={styles.IconBadge} />
      )}
    </View>
  )
}

export default IconWithBadge

const styles = StyleSheet.create({
  IconBadge: {
    position: 'absolute',
    right: 1,
    top: 1,
    width: 8,
    height: 8,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.red
  }
})
